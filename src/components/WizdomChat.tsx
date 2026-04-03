"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

type ChatApiResponse = {
    reply?: string;
    leadRequest?: boolean;
};

export default function WizdomChat() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const [history, setHistory] = useState<Msg[]>([
        { role: "assistant", content: "Hi — want help finding something on the site?" },
    ]);

    // Lead capture UI
    const [leadOpen, setLeadOpen] = useState(false);
    const [leadName, setLeadName] = useState("");
    const [leadEmail, setLeadEmail] = useState("");

    // Stable session id stored in localStorage
    const sessionId = useMemo(() => {
        if (typeof window === "undefined") return "server";
        const key = "wizdom_session_id";
        let v = window.localStorage.getItem(key);
        if (!v) {
            v = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
            window.localStorage.setItem(key, v);
        }
        return v;
    }, []);

    // Auto-scroll to bottom
    const scrollRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!open) return;
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [history, open, loading, leadOpen]);

    function getPageUrl() {
        if (typeof window === "undefined") return "";
        return window.location.pathname || "";
    }

    async function send() {
        const text = input.trim();
        if (!text || loading) return;

        if (text.length > 250) {
            setHistory((h) => [
                ...h,
                { role: "assistant", content: "Keep it short please — one question (max 250 characters)." },
            ]);
            return;
        }

        setInput("");

        const next: Msg[] = [...history, { role: "user", content: text }];
        setHistory(next);
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    pageUrl: getPageUrl(),
                    history: next.slice(-6),
                    sessionId,
                }),
            });

            const raw = await res.text();
            let data: ChatApiResponse = {};
            try {
                data = JSON.parse(raw) as ChatApiResponse;
            } catch {
                throw new Error(`Server returned non-JSON (HTTP ${res.status}).`);
            }

            if (!res.ok) throw new Error(data.reply || `Server error (HTTP ${res.status}).`);

            const reply = (data.reply || "What can I help with?").toString();
            setHistory((h) => [...h, { role: "assistant", content: reply }]);

            if (data.leadRequest) setLeadOpen(true);
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : String(e);
            setHistory((h) => [
                ...h,
                { role: "assistant", content: `I couldn’t reach the server — try again. (${message || "error"})` },
            ]);
        } finally {
            setLoading(false);
        }
    }

    async function submitLead() {
        const name = leadName.trim();
        const email = leadEmail.trim();

        if (!email) {
            setHistory((h) => [...h, { role: "assistant", content: "Please enter your email." }]);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: "Lead submitted",
                    pageUrl: getPageUrl(),
                    sessionId,
                    lead: { name, email },
                }),
            });

            const raw = await res.text();
            let data: ChatApiResponse = {};
            try {
                data = JSON.parse(raw) as ChatApiResponse;
            } catch {
                throw new Error(`Server returned non-JSON (HTTP ${res.status}).`);
            }

            const reply = (data.reply || "Thanks — got it.").toString();
            setHistory((h) => [...h, { role: "assistant", content: reply }]);

            setLeadOpen(false);
            setLeadName("");
            setLeadEmail("");
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : String(e);
            setHistory((h) => [
                ...h,
                { role: "assistant", content: `Couldn’t submit that — try again. (${message || "error"})` },
            ]);
        } finally {
            setLoading(false);
        }
    }

    // ESC to close
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            {/* Toggle button */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="fixed bottom-5 right-5 z-[9999] rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-zinc-800"
                aria-label="Open site help"
            >
                {open ? "Close help" : "Site help"}
            </button>

            {/* Overlay */}
            {open && (
                <button
                    type="button"
                    aria-label="Close overlay"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-[9997] bg-black/20 backdrop-blur-[1px]"
                />
            )}

            {/* Docked panel (1/3 page on desktop) */}
            <aside
                className={[
                    "fixed right-0 top-0 z-[9998] h-dvh bg-white shadow-2xl border-l border-zinc-200",
                    "transition-transform duration-200 ease-out",
                    open ? "translate-x-0" : "translate-x-full",
                    // responsive width
                    "w-full sm:w-[420px] md:w-[36%] md:max-w-[520px] md:min-w-[360px]",
                ].join(" ")}
                aria-hidden={!open}
            >
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-zinc-900 px-4 py-3 text-sm font-semibold text-white">
                        <div className="flex items-center gap-2">
                            <span>Wizdom Site Help</span>
                            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium">
                                beta
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="rounded-lg bg-white/10 px-2 py-1 text-xs font-semibold hover:bg-white/15"
                        >
                            Esc
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
                        <div className="space-y-3 text-sm">
                            {history.map((m, i) => (
                                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                                    <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                                        {m.role === "user" ? "You" : "Wizdom"}
                                    </div>

                                    <div
                                        className={[
                                            "mt-1 inline-block max-w-[92%] whitespace-pre-wrap rounded-2xl px-3 py-2",
                                            m.role === "user"
                                                ? "bg-zinc-900 text-white"
                                                : "bg-zinc-50 text-zinc-800 border border-zinc-200",
                                        ].join(" ")}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}

                            {loading && <div className="text-zinc-500">Typing…</div>}
                        </div>
                    </div>

                    {/* Lead capture */}
                    {leadOpen && (
                        <div className="border-t border-zinc-200 bg-zinc-50 p-3 text-sm">
                            <div className="font-semibold text-zinc-900">Want updates / help?</div>
                            <div className="mt-1 text-zinc-600">Leave your name + email and I’ll follow up.</div>

                            <div className="mt-3 grid gap-2">
                                <input
                                    value={leadName}
                                    onChange={(e) => setLeadName(e.target.value)}
                                    placeholder="Name (optional)"
                                    className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900"
                                />
                                <input
                                    value={leadEmail}
                                    onChange={(e) => setLeadEmail(e.target.value)}
                                    placeholder="Email (required)"
                                    className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900"
                                />
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={submitLead}
                                        className="flex-1 rounded-lg bg-zinc-900 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                                        disabled={loading}
                                    >
                                        Send
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setLeadOpen(false)}
                                        className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm hover:bg-zinc-50"
                                        disabled={loading}
                                    >
                                        Not now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Input row */}
                    <div className="flex border-t border-zinc-200">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    send();
                                }
                            }}
                            placeholder="Ask about Focus Blueprint, downloads, or navigation…"
                            className="flex-1 px-4 py-3 text-sm outline-none"
                            disabled={loading}
                        />
                        <button
                            type="button"
                            onClick={send}
                            className="bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                            disabled={loading}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
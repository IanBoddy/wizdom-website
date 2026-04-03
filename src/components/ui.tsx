import Link from "next/link";
import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
    return <div className="mx-auto w-full max-w-5xl px-5">{children}</div>;
}

export function ButtonLink({
    href,
    children,
    variant = "primary",
    external = true,
}: {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    external?: boolean;
}) {
    const base =
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition shadow-sm";
    const styles =
        variant === "primary"
            ? "bg-black text-white hover:bg-zinc-800"
            : "bg-white text-black ring-1 ring-zinc-200 hover:bg-zinc-50 dark:bg-slate-950 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-900";

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${base} ${styles}`}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={`${base} ${styles}`}>
            {children}
        </Link>
    );
}

export function Section({
    eyebrow,
    title,
    children,
}: {
    eyebrow?: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="py-14">
            <div className="space-y-3">
                {eyebrow ? (
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        {eyebrow}
                    </p>
                ) : null}
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                    {title}
                </h2>
            </div>
            <div className="mt-6">{children}</div>
        </section>
    );
}

export function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
            <div className="mt-2 text-sm leading-6 text-zinc-600">{children}</div>
        </div>
    );
}

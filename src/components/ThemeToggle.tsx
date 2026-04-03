"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handle = window.requestAnimationFrame(() => setMounted(true));
        return () => window.cancelAnimationFrame(handle);
    }, []);

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";

    if (!mounted) {
        return (
            <button
                type="button"
                className="inline-flex h-9 items-center rounded-full border border-zinc-300 bg-white/90 px-3 text-sm font-semibold text-zinc-900 shadow-sm transition duration-200 dark:border-zinc-700 dark:bg-zinc-950/90 dark:text-zinc-100"
                aria-label="Toggle dark mode"
            >
                {"🌙"}
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-9 items-center rounded-full border border-zinc-300 bg-white/90 px-3 text-sm font-semibold text-zinc-900 shadow-sm transition duration-200 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950/90 dark:text-zinc-100 dark:hover:bg-zinc-900"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <span className="mr-2">{isDark ? "🌙" : "☀️"}</span>
            {isDark ? "Dark" : "Light"}
        </button>
    );
}

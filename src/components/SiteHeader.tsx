"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur transition-colors duration-200 dark:border-zinc-800 dark:bg-slate-950/90">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                    <Link href="/" className="flex items-center">
                        <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                            Wizdom Enterprizes
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-5 text-sm text-zinc-600 md:flex dark:text-zinc-300">
                        <Link href="/products" className="hover:text-zinc-900 dark:hover:text-white">
                            Products
                        </Link>
                        <Link href="/services" className="hover:text-zinc-900 dark:hover:text-white">
                            Services
                        </Link>
                        <Link href="/my-downloads" className="hover:text-zinc-900 dark:hover:text-white">
                            Downloads
                        </Link>
                        <Link href="/support" className="hover:text-zinc-900 dark:hover:text-white">
                            Support
                        </Link>
                        <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white">
                            Privacy
                        </Link>

                        <Link
                            href="/focus-blueprint"
                            className="ml-2 inline-flex items-center rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                        >
                            Get Focus
                        </Link>
                        <ThemeToggle />
                    </nav>

                    {/* Mobile nav */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            type="button"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                            onClick={() => setMenuOpen((open) => !open)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 shadow-sm transition duration-200 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-slate-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                        >
                            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path fill="currentColor" d="M18.3 5.7a1 1 0 0 0-1.4-1.4L12 9.2 7.1 4.3A1 1 0 0 0 5.7 5.7L10.6 10.6 5.7 15.5a1 1 0 0 0 1.4 1.4L12 12.8l4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 10.6 18.3 5.7Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path fill="currentColor" d="M4 6h16a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2Zm16 7H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm0 7H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" />
                                </svg>
                            )}
                        </button>
                        <Link
                            href="/focus-blueprint"
                            className="inline-flex items-center rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                        >
                            Get Focus
                        </Link>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={() => setMenuOpen(false)} />
                    <div className="fixed inset-x-0 top-20 z-50 md:hidden" id="mobile-nav">
                        <div className="mx-auto max-w-6xl rounded-b-3xl border border-t-0 border-zinc-200 bg-white px-4 py-5 shadow-2xl dark:border-zinc-800 dark:bg-slate-950">
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/products"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-semibold text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/services"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-semibold text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/my-downloads"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-semibold text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                                >
                                    Downloads
                                </Link>
                                <Link
                                    href="/support"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-semibold text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                                >
                                    Support
                                </Link>
                                <Link
                                    href="/privacy"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-semibold text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                                >
                                    Privacy
                                </Link>
                                <Link
                                    href="/focus-blueprint"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                                >
                                    Get Focus
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

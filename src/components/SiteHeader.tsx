import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";

export default function SiteHeader() {
    return (
        <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <AnimatedLogo />
                    <span className="text-sm font-semibold tracking-tight text-zinc-900">
                        Wizdom Enterprizes
                    </span>
                </Link>

                <nav className="flex items-center gap-4 text-sm text-zinc-600">
                    <Link href="/focus-blueprint" className="hover:text-zinc-900">
                        Focus Blueprint
                    </Link>
                    <Link href="/support" className="hover:text-zinc-900">
                        Support
                    </Link>
                    <Link href="/privacy" className="hover:text-zinc-900">
                        Privacy
                    </Link>
                </nav>
            </div>
        </header>
    );
}

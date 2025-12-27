import Link from "next/link";
import { Container } from "./ui";
import { LINKS } from "@/lib/links";
import AnimatedLogo from "./AnimatedLogo"; // ⬅️ add this import

export function Header() {
    return (
        <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* LEFT: Animated logo + brand name */}
                    <div className="flex items-center gap-3">
                        <AnimatedLogo />
                        <Link href="/" className="font-semibold tracking-tight">
                            Wizdom Enterprizes
                        </Link>
                    </div>

                    {/* RIGHT: NAV */}
                    <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
                        <Link href="/focus-blueprint" className="hover:text-zinc-900">
                            Focus Blueprint
                        </Link>
                        <Link href="/support" className="hover:text-zinc-900">
                            Support
                        </Link>
                        <a
                            href={LINKS.etsyShop}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-zinc-900"
                        >
                            Etsy
                        </a>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <Container>
                <div className="flex flex-col gap-3 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} Wizdom Enterprizes</p>
                    <div className="flex gap-5">
                        <Link href="/privacy" className="hover:text-zinc-900">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-zinc-900">
                            Terms
                        </Link>
                        <a href={`mailto:${LINKS.supportEmail}`} className="hover:text-zinc-900">
                            {LINKS.supportEmail}
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

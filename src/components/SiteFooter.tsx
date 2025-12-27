import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function SiteFooter() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Wizdom Enterprizes</p>
                    <div className="flex gap-4">
                        <Link href="/terms" className="hover:text-zinc-900">Terms</Link>
                        <Link href="/privacy" className="hover:text-zinc-900">Privacy</Link>
                        <Link href="/support" className="hover:text-zinc-900">Support</Link>
                    </div>
                </div>

                <p className="mt-4 text-xs">
                    Support: <a className="underline" href={`mailto:${LINKS.supportEmail}`}>{LINKS.supportEmail}</a>
                </p>
            </div>
        </footer>
    );
}

import Link from "next/link";

const navItems = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQs", href: "#faq" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[color:var(--border)]/80 bg-[rgba(255,255,255,0.9)] backdrop-blur">
            <div className="container-custom flex items-center justify-between py-4">
                <Link href="#top" className="text-xl font-semibold tracking-[0.2em] text-[var(--ocha-dark)]">
                    OCHA
                </Link>
                <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--muted)] md:flex">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="transition hover:text-[var(--ocha-dark)]">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <Link
                    href="#waitlist"
                    className="rounded-full border border-[var(--ocha-dark)] px-4 py-2 text-sm font-semibold text-[var(--ocha-dark)] transition hover:bg-[var(--ocha-dark)] hover:text-white"
                >
                    Join Waitlist
                </Link>
            </div>
        </header>
    );
}

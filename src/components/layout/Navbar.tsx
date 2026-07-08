import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const navItems = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Faqs", href: "#faq" },
];

export function Navbar() {
    return (
        <header className="pointer-events-none fixed inset-x-0 top-4 z-50 h-20">
            <div className="pointer-events-auto absolute left-1/2 top-0 h-20 w-[80%] -translate-x-1/2 rounded-[16px] border-2 border-[var(--ocha-dark)] bg-white lg:w-[60%]">
                <div className="flex h-full w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                    <Link
                        href="#top"
                        aria-label="OCHA home"
                        className="block w-[112px] shrink-0 sm:w-[150px] xl:w-[180px]"
                    >
                        <Image
                            src="/logos/ocha-logo-black.png"
                            alt="OCHA"
                            width={591}
                            height={162}
                            priority
                            className="h-auto w-full"
                        />
                    </Link>
                    <nav className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium leading-none text-[var(--ocha-dark)] lg:flex xl:gap-8 xl:text-base">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-[var(--ocha-aqua)]"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href="#waitlist"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-[3px] border-[var(--ocha-dark)] bg-[var(--ocha-aqua)] px-3 text-sm font-bold leading-none text-[var(--ocha-dark)] shadow-[5px_6px_0_var(--ocha-dark)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[3px_4px_0_var(--ocha-dark)] sm:px-5 sm:text-base lg:min-h-[52px]"
                    >
                        <Mail className="size-5 text-[var(--ocha-dark)]" strokeWidth={2.4} />
                        Get Quote
                    </Link>
                </div>
            </div>
        </header>
    );
}

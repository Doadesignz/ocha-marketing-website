import Image from "next/image";

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/ocha.africa",
        icon: function InstagramIcon({ className }: { className?: string }) {
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect width="15.5" height="15.5" x="4.25" y="4.25" rx="4.25" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="2" />
                    <circle cx="16.8" cy="7.2" r="1.2" fill="currentColor" />
                </svg>
            );
        },
    },
];

export function Footer() {
    return (
        <footer className="border-t border-[color:var(--border)]/80 bg-[var(--ocha-dark)] px-5 py-10 text-white md:px-0">
            <div className="container-custom flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <Image
                        src="/logos/ocha-logo-white.png"
                        alt="OCHA"
                        width={591}
                        height={162}
                        className="h-auto w-[130px]"
                    />
                    <p className="mt-2 max-w-xl text-sm text-white/70">
                        Premium fulfilment infrastructure for modern merchants building across Africa.
                    </p>
                </div>
                <div className="text-sm text-white/70">
                    <p>Partnerships@ocha.africa</p>
                    <p>Warehouse, fulfilment, and delivery without confusion.</p>
                    <div className="mt-4 flex gap-3 md:justify-end">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[var(--ocha-aqua)] hover:bg-[var(--ocha-aqua)] hover:text-[var(--ocha-dark)]"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

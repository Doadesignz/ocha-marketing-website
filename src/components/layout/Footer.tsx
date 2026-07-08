import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-[color:var(--border)]/80 bg-[var(--ocha-dark)] py-10 text-white">
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
                    <p>hello@ocha.co</p>
                    <p>Warehouse, fulfilment, and delivery without confusion.</p>
                </div>
            </div>
        </footer>
    );
}

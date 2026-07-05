import Link from "next/link";

export function JoinWaitlistSection() {
    return (
        <section className="bg-[var(--ocha-aqua)] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom rounded-[2rem] border border-[var(--ocha-dark)]/10 bg-white/70 p-8 shadow-[0_20px_70px_rgba(28,28,28,0.08)] sm:p-12">
                <div className="max-w-3xl">
                    <p className="eyebrow">Join the OCHA merchant waitlist</p>
                    <h2 className="section-heading mt-3">Tell us about your business so we can prepare the right onboarding experience.</h2>
                    <p className="body-copy mt-5 text-lg text-[var(--muted)]">
                        We will review your fulfilment needs and reach out when OCHA launches.
                    </p>
                </div>
                <div className="mt-8">
                    <Link
                        href="#waitlist"
                        className="inline-flex items-center rounded-full bg-[var(--ocha-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Start Application
                    </Link>
                </div>
            </div>
        </section>
    );
}

const steps = [
    {
        number: "01",
        title: "Store at source",
        description:
            "Your inventory moves straight from the manufacturer to the OCHA hub. OCHA receives, quality-checks, and stores your SKUs while giving you real-time visibility into every unit.",
    },
    {
        number: "02",
        title: "Pack, ship, same day",
        description:
            "Orders sync into the system, then warehouse teams pick, pack, and dispatch items accurately and quickly.",
    },
    {
        number: "03",
        title: "End-to-end control",
        description:
            "Track every order in one dashboard from inbound stock to final delivery. One system, one SLA, one accountable team.",
    },
];

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom">
                <p className="eyebrow">How OCHA works</p>
                <h2 className="section-heading mt-3">A premium logistics flow from source to customer.</h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.number} className="rounded-[1.6rem] border border-[color:var(--border)]/80 bg-[color:var(--card)] p-7 shadow-sm">
                            <p className="text-5xl font-semibold text-[var(--ocha-aqua)]">{step.number}</p>
                            <h3 className="mt-5 text-xl font-semibold text-[var(--ocha-dark)]">{step.title}</h3>
                            <p className="mt-3 text-[var(--muted)]">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { BarChart3, Boxes, PackageCheck, ShieldCheck, Store, Workflow } from "lucide-react";

const features = [
    {
        title: "Real-time inventory tracking",
        description: "Know your stock instantly and eliminate manual guesswork.",
        bullets: ["Know your stock instantly", "No guesswork or manual counting", "Fewer out-of-stock surprises"],
        icon: BarChart3,
    },
    {
        title: "Multi-warehouse control",
        description: "See every warehouse in one place and fulfil from the nearest hub.",
        bullets: ["See all warehouses in one place", "Fulfil from the correct location", "Compare stock by location"],
        icon: Boxes,
    },
    {
        title: "Fast outbound fulfilment",
        description: "Pick, pack, and dispatch orders with fewer mistakes and faster turnarounds.",
        bullets: ["Fewer wrong and missing items", "Faster order processing", "Happier customers"],
        icon: PackageCheck,
    },
    {
        title: "Sales & logistics integrations",
        description: "Connect where you already sell and reduce manual order entry.",
        bullets: ["Connect your selling channels", "Reduce manual order entry", "Fulfil faster with fewer mistakes"],
        icon: Workflow,
    },
    {
        title: "Product authentication",
        description: "Prove your product is real and protect your brand reputation.",
        bullets: ["Stop fake products", "Protect brand reputation", "Build customer trust"],
        icon: ShieldCheck,
    },
    {
        title: "Merchant dashboard",
        description: "Get a single view of inventory, orders, and fulfilment progress.",
        bullets: ["View inventory and orders", "See daily operations clearly", "Plan better with less stress"],
        icon: Store,
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="bg-[var(--ocha-dark)] px-6 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom">
                <p className="eyebrow text-[var(--ocha-aqua)]">Everything you need to store, pack, and deliver without confusion</p>
                <h2 className="section-heading mt-3 max-w-3xl text-white">
                    OCHA brings your warehouses, orders, and deliveries into one clear system.
                </h2>
                <p className="body-copy mt-5 max-w-2xl text-lg text-white/70">
                    You always know what you have, where it is, and what is happening next.
                </p>
                <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={feature.title} className="rounded-[1.6rem] border border-white/10 bg-white/10 p-7 backdrop-blur">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ocha-aqua)]/20 text-[var(--ocha-aqua)]">
                                    <Icon size={20} />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                                <p className="mt-3 text-sm text-white/70">{feature.description}</p>
                                <ul className="mt-5 space-y-2 text-sm text-white/80">
                                    {feature.bullets.map((bullet) => (
                                        <li key={bullet} className="flex gap-2">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--ocha-aqua)]" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

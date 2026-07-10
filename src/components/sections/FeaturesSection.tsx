import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

const realTimeInventoryIllustrationUrl = "https://res.cloudinary.com/duo0bik8y/image/upload/v1783620925/ocha/features/real-time-inventory-tracking.svg";
const multiWarehouseIllustrationUrl = "https://res.cloudinary.com/duo0bik8y/image/upload/v1783620929/ocha/features/multi-warehouse-control.svg";
const fastOutboundIllustrationUrl = "https://res.cloudinary.com/duo0bik8y/image/upload/v1783620355/ocha/features/fast-outbound-fulfilment.svg";
const productAuthenticationIllustrationUrl = "/features/product-authentication-anti-fake.svg";
const salesLogisticsIllustrationUrl = "https://res.cloudinary.com/duo0bik8y/image/upload/v1783620935/ocha/features/sales-logistics-integrations.svg";
const merchantDashboardIllustrationUrl = "https://res.cloudinary.com/duo0bik8y/image/upload/v1783620938/ocha/features/merchant-dashboard.svg";

type FeatureCard = {
    eyebrow: string;
    title: string;
    description?: string;
    bullets: string[];
    tone: string;
    badgeTone: string;
    layout: string;
    variant: "warehouse" | "network" | "dispatch" | "authentication" | "integration" | "dashboard";
};

const features: FeatureCard[] = [
    {
        eyebrow: "Real-Time Inventory Tracking",
        title: "Know your stock instantly.",
        bullets: ["Always know how many items you have", "No guessing or manual counting", "Fewer out of stock surprises"],
        tone: "bg-[#a9f4f3] min-h-[470px]",
        badgeTone: "bg-[#1268d8] text-white",
        layout: "lg:col-span-2",
        variant: "warehouse",
    },
    {
        eyebrow: "Multi-Warehouse Control",
        title: "See all your warehouses in one place.",
        bullets: ["Fulfil orders from the nearest warehouse", "Grow without losing control", "Compare stock by location"],
        tone: "bg-[#f4ffff] min-h-[470px]",
        badgeTone: "bg-[#34c86a] text-white",
        layout: "lg:col-span-1",
        variant: "network",
    },
    {
        eyebrow: "Fast Outbound Fulfilment",
        title: "Orders go out the right way, every time.",
        bullets: ["Fewer wrong or missing items", "Faster order processing", "Happy customers"],
        tone: "bg-[#efffff] min-h-[440px]",
        badgeTone: "bg-[#ff3f4b] text-white",
        layout: "lg:col-span-1",
        variant: "dispatch",
    },
    {
        eyebrow: "Product Authentication",
        title: "Prove your product is real.",
        bullets: ["Stop fake products", "Build customer trust", "Protect your brand reputation"],
        tone: "bg-[#aef8f6] min-h-[440px]",
        badgeTone: "bg-[#6f74ff] text-white",
        layout: "lg:col-span-1",
        variant: "authentication",
    },
    {
        eyebrow: "Sales & Logistics Integrations",
        title: "Connect where you already sell.",
        bullets: ["No manual order entry", "Faster fulfilment", "Fewer mistakes"],
        tone: "bg-[#99e0de] min-h-[440px]",
        badgeTone: "bg-[#ff3f4b] text-white",
        layout: "lg:col-span-1",
        variant: "integration",
    },
    {
        eyebrow: "Merchant Dashboard",
        title: "See everything at a glance.",
        description: "View your inventory, orders, and fulfilment progress in one dashboard.",
        bullets: ["Clear daily overview", "Better planning", "Less stress"],
        tone: "bg-[#d9edff] min-h-[455px]",
        badgeTone: "bg-[#8b63f7] text-white",
        layout: "lg:col-span-3",
        variant: "dashboard",
    },
];

function FeaturePill({ children }: { children: string }) {
    return (
        <span className="inline-flex max-w-full items-center gap-2 rounded-full border-2 border-[var(--ocha-dark)] bg-white px-3.5 py-2 text-[0.72rem] font-bold leading-tight text-[var(--ocha-dark)] shadow-[0_2px_0_var(--ocha-dark)]">
            <span className="h-4 w-4 shrink-0 rounded-full border-2 border-[var(--ocha-dark)] bg-white" />
            <span>{children}</span>
        </span>
    );
}

function FeatureBadge({ tone, children }: { tone: string; children: string }) {
    return (
        <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.68rem] font-bold leading-none shadow-[0_1px_0_rgba(28,28,28,0.22)] ${tone}`}>
            <CheckCircle2 size={12} />
            {children}
        </span>
    );
}

function FeatureImage({ src, className }: { src: string; className: string }) {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <img src={src} alt="" aria-hidden="true" className={className} />
        </div>
    );
}

function FeatureIllustration({ variant }: { variant: FeatureCard["variant"] }) {
    if (variant === "warehouse") {
        return <FeatureImage src={realTimeInventoryIllustrationUrl} className="absolute inset-0 h-full w-full object-cover" />;
    }

    if (variant === "network") {
        return <FeatureImage src={multiWarehouseIllustrationUrl} className="absolute bottom-0 left-0 h-auto w-full object-contain" />;
    }

    if (variant === "dispatch") {
        return <FeatureImage src={fastOutboundIllustrationUrl} className="absolute bottom-0 left-0 h-auto w-full object-contain sm:bottom-[-38px] sm:left-1/2 sm:h-[350px] sm:w-auto sm:max-w-none sm:-translate-x-1/2" />;
    }

    if (variant === "authentication") {
        return <FeatureImage src={productAuthenticationIllustrationUrl} className="absolute bottom-0 left-0 h-[42%] w-full object-contain object-bottom sm:left-1/2 sm:h-[235px] sm:w-auto sm:max-w-none sm:-translate-x-1/2 lg:h-[255px]" />;
    }

    if (variant === "integration") {
        return <FeatureImage src={salesLogisticsIllustrationUrl} className="absolute bottom-0 left-0 h-auto w-full object-contain sm:left-auto sm:right-0 sm:h-[340px] sm:w-auto sm:max-w-none" />;
    }

    return <FeatureImage src={merchantDashboardIllustrationUrl} className="absolute bottom-0 left-0 h-auto w-full object-contain lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-auto lg:max-w-none lg:object-cover" />;
}

export function FeaturesSection() {
    return (
        <section id="features" className="bg-[var(--ocha-dark)] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto w-full max-w-[1246px]">
                <div className="grid gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:items-start">
                    <h2 className="max-w-2xl font-[family-name:var(--font-secondary)] text-[clamp(2.25rem,4.6vw,3.65rem)] font-bold leading-[1.1] tracking-[0] text-white/42">
                        Everything you need to store, pack, and deliver without confusion
                    </h2>
                    <div className="max-w-md lg:justify-self-end">
                        <p className="text-base font-semibold leading-7 text-white">
                            OCHA brings your warehouses, orders, and deliveries into one clear system. You always know what you have, where it is, and what is happening next.
                        </p>
                        <a
                            href="#waitlist"
                            className="mt-10 inline-flex items-center gap-3 rounded-full border-2 border-[var(--ocha-dark)] bg-[var(--ocha-aqua)] px-8 py-4 text-base font-bold text-[var(--ocha-dark)] shadow-[5px_5px_0_var(--ocha-dark)] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--ocha-dark)]"
                        >
                            <PhoneCall size={18} />
                            Get Started
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="mt-24 grid gap-4 lg:grid-cols-3">
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className={`relative overflow-hidden rounded-2xl text-[var(--ocha-dark)] ${feature.tone} ${feature.layout}`}
                        >
                            <div className={`relative z-10 ${feature.variant === "dashboard" ? "max-w-md p-8 sm:p-10 lg:p-14" : "p-6 sm:p-8"}`}>
                                <FeatureBadge tone={feature.badgeTone}>{feature.eyebrow}</FeatureBadge>
                                <h3 className="mt-6 font-[family-name:var(--font-secondary)] text-[24px] font-bold leading-[1.08] tracking-[0]">
                                    {feature.title}
                                </h3>
                                {feature.description ? (
                                    <p className="mt-5 max-w-sm text-lg leading-7 text-[var(--ocha-dark)]/80">{feature.description}</p>
                                ) : null}
                                <div className={`mt-6 flex flex-wrap gap-3 ${feature.variant === "warehouse" ? "max-w-sm flex-col items-start" : ""}`}>
                                    {feature.bullets.map((bullet) => (
                                        <FeaturePill key={bullet}>{bullet}</FeaturePill>
                                    ))}
                                </div>
                            </div>
                            <FeatureIllustration variant={feature.variant} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

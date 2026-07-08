import Link from "next/link";
import { ArrowRight, Boxes, ShieldCheck, Warehouse } from "lucide-react";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME ?? process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const heroVideoPublicId = "magnific_take-out-any-text-on-the-_e8WkKiydqL_kauly8";
const heroVideoUrl = cloudinaryCloudName
    ? `https://res.cloudinary.com/${cloudinaryCloudName}/video/upload/so_0,eo_5.5/${heroVideoPublicId}.mp4`
    : undefined;
const countries = ["Nigeria", "Kenya", "Uganda", "Tanzania", "Zambia", "Zimbabwe", "UK", "Canada"];
const featureBadges = [
    { label: "Real-time inventory", icon: Boxes },
    { label: "Anti-counterfeit", icon: ShieldCheck },
    { label: "Multi-warehouse", icon: Warehouse },
];

export function HeroSection() {
    return (
        <section id="top" className="relative flex min-h-screen overflow-hidden bg-[var(--ocha-aqua)] px-6 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">
            <HeroBackgroundVideo src={heroVideoUrl} />
            <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
            <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="max-w-2xl animate-hero-copy">
                    <p className="eyebrow text-white/80">Fulfilment infrastructure for modern merchants</p>
                    <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-secondary)] text-[clamp(2.7rem,5.2vw,4.05rem)] font-bold leading-[1.08] tracking-[-0.04rem] text-white">
                        <span className="text-[var(--ocha-aqua)]">From warehouse to customer,</span>{" "}
                        nothing gets lost.
                    </h1>
                    <p className="body-copy mt-6 max-w-xl text-lg !text-white">
                        Warehousing, fulfilment, and delivery with real-time inventory transparency, product authentication, and full visibility from shelf to customer.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="#waitlist"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--ocha-dark)] bg-[var(--ocha-aqua)] px-6 py-3 text-sm font-semibold text-[var(--ocha-dark)] transition hover:bg-white"
                        >
                            Join Waitlist <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="rounded-full border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--ocha-dark)]"
                        >
                            See How It Works
                        </Link>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-white/90">
                        {countries.map((country) => (
                            <span key={country} className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 backdrop-blur">
                                {country}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {featureBadges.map(({ label, icon: Icon }) => (
                            <div key={label} className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-sm text-white/80 backdrop-blur">
                                <Icon size={16} className="text-[var(--ocha-aqua)]" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="animate-hero-card rounded-[2rem] border border-[var(--ocha-dark)]/10 bg-white/70 p-6 shadow-[0_25px_80px_rgba(28,28,28,0.08)] backdrop-blur">
                    <div className="rounded-[1.5rem] border border-[var(--ocha-dark)]/10 bg-[var(--ocha-aqua)] p-6 text-[var(--ocha-dark)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-[var(--ocha-dark)]/65">Inventory live</p>
                                <p className="mt-2 text-3xl font-semibold">18,240 units</p>
                            </div>
                            <div className="rounded-full bg-white/60 px-3 py-2 text-sm font-semibold text-[var(--ocha-dark)]">
                                +12% this week
                            </div>
                        </div>
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-[var(--ocha-dark)]/10 bg-white/45 p-4">
                                <p className="text-sm text-[var(--ocha-dark)]/70">Fulfilment SLA</p>
                                <p className="mt-2 text-xl font-semibold">24 hours</p>
                            </div>
                            <div className="rounded-2xl border border-[var(--ocha-dark)]/10 bg-white/45 p-4">
                                <p className="text-sm text-[var(--ocha-dark)]/70">Authenticate</p>
                                <p className="mt-2 text-xl font-semibold">100% reviewed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

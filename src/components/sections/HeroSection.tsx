import Image from "next/image";
import { Boxes } from "lucide-react";
import { HeroRiveIllustration } from "./HeroRiveIllustration";

const avatars = [
    { label: "Merchant", src: "/avatars/ellipse-84.png", className: "border-[#3157ff]" },
    { label: "Customer", src: "/avatars/ellipse-85.png", className: "border-[#7a4af4] -ml-5" },
    { label: "Buyer", src: "/avatars/ellipse-86.png", className: "border-[#ff4b1f] -ml-5" },
];

export function HeroSection() {
    return (
        <section
            id="top"
            className="relative flex min-h-screen overflow-hidden bg-[var(--ocha-aqua)] px-5 pb-[38vh] pt-32 text-[var(--ocha-dark)] sm:px-8 sm:pb-[42vh] lg:px-10 lg:pb-[44vh]"
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(28,28,28,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(28,28,28,0.12)_1px,transparent_1px)] bg-[length:56px_56px]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-[52vh] bg-gradient-to-b from-transparent via-transparent to-[rgba(177,251,255,0.88)]" aria-hidden="true" />

            <div className="container-custom relative z-10 flex justify-center">
                <div className="animate-hero-copy mt-8 w-full max-w-[980px] text-center sm:mt-12 lg:mt-16">
                    <h1 className="font-[family-name:var(--font-secondary)] text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[0] text-black">
                        <span className="flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap sm:gap-3">
                            From
                            <span className="relative inline-flex translate-y-1 items-center gap-1.5 rounded-[1.45rem] border-[3px] border-black bg-white px-3 py-1 align-middle text-[0.48em] leading-none shadow-[0_8px_0_black] sm:gap-3 sm:rounded-[2.6rem] sm:border-[5px] sm:px-8 sm:py-2 sm:text-[0.55em] sm:shadow-[0_14px_0_black]">
                                warehouse
                                <span className="inline-flex size-10 items-center justify-center overflow-hidden rounded-full bg-[var(--ocha-aqua)] sm:size-16">
                                    <Image
                                        src="/animations/warehouse.gif"
                                        alt=""
                                        width={64}
                                        height={64}
                                        unoptimized
                                        className="h-full w-full object-cover"
                                    />
                                </span>
                            </span>
                            to
                        </span>
                        <span className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                            customer
                            <span className="flex items-center">
                                {avatars.map((avatar) => (
                                    <span
                                        key={avatar.label}
                                        aria-label={avatar.label}
                                        className={`relative flex size-16 items-center justify-center overflow-hidden rounded-full border-[5px] bg-white shadow-[0_8px_18px_rgba(28,28,28,0.18)] sm:size-20 ${avatar.className}`}
                                    >
                                        <Image
                                            src={avatar.src}
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="h-full w-full object-cover"
                                        />
                                    </span>
                                ))}
                            </span>
                        </span>
                        <span className="mt-3 block">nothing gets lost.</span>
                    </h1>

                    <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3 text-sm font-bold sm:text-base">
                        {["Inventory live", "24 hour SLA", "Product authentication"].map((item) => (
                            <span key={item} className="inline-flex items-center gap-2 rounded-full border-2 border-black/15 bg-white/55 px-4 py-2 backdrop-blur">
                                <Boxes className="size-4" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <HeroRiveIllustration />
        </section>
    );
}

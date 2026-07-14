"use client";

import { useEffect, useState } from "react";
import { Alignment, EventType, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { Headphones, Package, ShoppingCart, Truck } from "lucide-react";

const heroRiveSrc = "/animations/ocha-hero.riv";

function HeroIllustrationFallback() {
    return (
        <>
            <div className="absolute inset-x-[-8%] bottom-0 h-[76%] origin-bottom bg-[linear-gradient(rgba(28,28,28,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(28,28,28,0.15)_1px,transparent_1px)] bg-[length:54px_30px] [transform:perspective(620px)_rotateX(58deg)]" />

            <div className="absolute bottom-[9%] left-[7%] hidden items-end gap-2 sm:flex">
                <div className="h-14 w-5 rounded-t-full bg-[#1f5cc8]" />
                <div className="h-24 w-10 rounded-t-full bg-[#ffcd3c]" />
                <div className="h-20 w-10 rounded-t-full bg-[#1c65db]" />
                <div className="h-16 w-5 rounded-t-full bg-[#171717]" />
            </div>

            <div className="absolute bottom-[12%] left-[23%] h-20 w-40 rounded-[10px] bg-white shadow-[12px_18px_0_rgba(28,28,28,0.16)] sm:h-24 sm:w-48">
                <div className="absolute -left-12 bottom-0 h-12 w-20 rounded-l-lg bg-[#ffd42a]" />
                <div className="absolute -left-9 bottom-2 h-8 w-9 rounded bg-[#3157ff]" />
                <div className="absolute bottom-[-10px] left-3 h-7 w-7 rounded-full border-[5px] border-[#1c1c1c] bg-[#ffd42a]" />
                <div className="absolute bottom-[-10px] right-4 h-7 w-7 rounded-full border-[5px] border-[#1c1c1c] bg-[#ffd42a]" />
            </div>

            <div className="absolute bottom-[2%] left-1/2 h-36 w-40 -translate-x-1/2 rounded-[8px] bg-[#d3a34a] shadow-[12px_18px_0_rgba(28,28,28,0.16)] sm:h-44 sm:w-52">
                <div className="absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 bg-[#e6bd68]" />
                <div className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 bg-[#e6bd68]" />
                <Package className="absolute bottom-5 right-4 size-12 text-[#f26a36]" strokeWidth={1.8} />
            </div>

            <div className="absolute bottom-[15%] right-[29%] h-32 w-48 rounded-[6px] bg-[#1584c7] shadow-[12px_18px_0_rgba(28,28,28,0.16)] sm:h-40 sm:w-60">
                <div className="absolute -top-16 left-5 h-20 w-44 skew-x-[-18deg] bg-[#9b6a43] sm:w-52" />
                <div className="absolute -top-4 right-2 rounded bg-white px-3 py-1 text-sm font-extrabold uppercase text-[#e86f37] sm:text-base">
                    Warehouse
                </div>
                <div className="absolute bottom-0 right-8 h-16 w-20 rounded-t bg-white/75" />
            </div>

            <div className="absolute bottom-[7%] right-[7%] hidden h-36 w-48 rounded-[10px] border-[8px] border-[#1c1c1c] bg-[#2497df] shadow-[12px_18px_0_rgba(28,28,28,0.16)] md:block">
                <div className="absolute left-1/2 top-1/2 flex h-12 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#f3632e] text-lg font-extrabold text-white">
                    add
                </div>
                <ShoppingCart className="absolute -right-8 -top-9 size-14 rounded-full bg-[#b1fbff] p-3 text-[#1c1c1c]" />
            </div>

            <Truck className="absolute bottom-[28%] left-[41%] size-11 rotate-[-14deg] text-[#d84627]" strokeWidth={3} />
            <Truck className="absolute bottom-[19%] right-[20%] size-12 rotate-[16deg] text-[#d84627]" strokeWidth={3} />
            <Headphones className="absolute bottom-[25%] right-[3%] hidden size-20 rounded-full bg-[#77d941] p-4 text-[#1c1c1c] md:block" />
        </>
    );
}

export function HeroRiveIllustration() {
    const [hasRiveFile, setHasRiveFile] = useState(false);
    const { RiveComponent, rive } = useRive(
        hasRiveFile
            ? {
                src: heroRiveSrc,
                autoplay: true,
                layout: new Layout({ fit: Fit.Contain, alignment: Alignment.BottomCenter }),
            }
            : null,
        {
            useDevicePixelRatio: true,
            customDevicePixelRatio: 0,
            fitCanvasToArtboardHeight: false,
            useOffscreenRenderer: true,
            shouldResizeCanvasToContainer: true,
        },
    );

    useEffect(() => {
        if (!rive) {
            return;
        }

        const playableNames = [...rive.animationNames, ...rive.stateMachineNames];
        const playHeroAnimation = () => {
            if (playableNames.length > 0) {
                rive.play(playableNames, true);
            } else {
                rive.play(undefined, true);
            }
        };

        playHeroAnimation();
        rive.on(EventType.Stop, playHeroAnimation);

        return () => {
            rive.off(EventType.Stop, playHeroAnimation);
        };
    }, [rive]);

    useEffect(() => {
        let isMounted = true;

        fetch(heroRiveSrc, { method: "HEAD" })
            .then((response) => {
                if (isMounted) {
                    setHasRiveFile(response.ok);
                }
            })
            .catch(() => {
                if (isMounted) {
                    setHasRiveFile(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38vh] min-h-[260px] overflow-hidden sm:h-[42vh] lg:h-[46vh]" aria-hidden="true">
            {hasRiveFile ? (
                <RiveComponent className="absolute bottom-0 left-1/2 h-full w-[100vw] max-w-none -translate-x-1/2 sm:w-full" />
            ) : (
                <HeroIllustrationFallback />
            )}
        </div>
    );
}

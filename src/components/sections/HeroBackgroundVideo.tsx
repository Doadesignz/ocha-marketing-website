"use client";

import { useEffect, useRef } from "react";

type HeroBackgroundVideoProps = {
    src?: string;
    duration?: number;
};

export function HeroBackgroundVideo({ src, duration = 5.5 }: HeroBackgroundVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        const loopSegment = () => {
            if (video.currentTime >= duration) {
                video.currentTime = 0;
                void video.play();
            }
        };

        video.addEventListener("timeupdate", loopSegment);

        return () => {
            video.removeEventListener("timeupdate", loopSegment);
        };
    }, [duration]);

    if (!src) {
        return null;
    }

    return (
        <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
        >
            <source src={`${src}#t=0,${duration}`} />
        </video>
    );
}

const videoSrc = "https://res.cloudinary.com/duo0bik8y/video/upload/v1783509715/ocha/video-section.mp4";

export function VideoSection() {
    return (
        <section className="bg-[var(--ocha-dark)] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto w-full max-w-[1246px]">
                <div className="aspect-video overflow-hidden rounded-[14px] bg-[#ff4928]">
                    {videoSrc ? (
                        <video className="h-full w-full object-cover" controls playsInline preload="metadata">
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

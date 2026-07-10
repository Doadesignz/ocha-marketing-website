const cloudinaryVideoSrc = "https://res.cloudinary.com/duo0bik8y/video/upload/f_mp4,q_auto/ocha/video-section.mp4";
const localVideoSrc = "/videos/ocha-video-section.mp4";
const posterSrc = "https://res.cloudinary.com/duo0bik8y/video/upload/so_1,f_jpg,q_auto/ocha/video-section.jpg";

export function VideoSection() {
    return (
        <section className="bg-[var(--ocha-dark)] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto w-full max-w-[1246px]">
                <div className="aspect-video overflow-hidden rounded-[14px] bg-[#ff4928]">
                    <video
                        className="h-full w-full object-cover"
                        autoPlay
                        controls
                        loop
                        muted
                        playsInline
                        poster={posterSrc}
                        preload="auto"
                    >
                        <source src={localVideoSrc} type="video/mp4" />
                        <source src={cloudinaryVideoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
}

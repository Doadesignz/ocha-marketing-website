export function VideoSection() {
    return (
        <section className="bg-[var(--ocha-dark)] px-6 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                    <p className="eyebrow text-[var(--ocha-aqua)]">OCHA in motion</p>
                    <h2 className="section-heading mt-4 text-white">
                        See how OCHA moves inventory from source to customer.
                    </h2>
                    <p className="body-copy mt-5 max-w-xl text-lg text-white/70">
                        A simple look at how merchants store products, track inventory, fulfil orders, and protect customer trust through one connected logistics system.
                    </p>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3">
                    <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(177,251,255,0.3),_transparent_55%)]">
                        <video
                            className="h-full w-full object-cover"
                            poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                            controls
                        >
                            <source src="https://res.cloudinary.com/demo/video/upload/v1694817242/docs/woman-working.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

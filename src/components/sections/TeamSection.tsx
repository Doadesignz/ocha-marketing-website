import Image from "next/image";
import { UserRound } from "lucide-react";

type TeamMember = {
    name: string;
    role: string;
    image: string;
    imagePosition?: string;
};

// TODO: confirm roles with the team before shipping.
const team: TeamMember[] = [
    {
        name: "Uju Amaeshi",
        role: "Founder/CEO",
        image: "/team/uju-amaeshi.jpg",
        imagePosition: "center 15%",
    },
    {
        name: "Shinwa",
        role: "Operations Lead",
        image: "/team/shinwa.jpg",
        imagePosition: "center 30%",
    },
    {
        name: "Charity Umoru",
        role: "Merchant Success Lead",
        image: "/team/charity-umoru.jpg",
        imagePosition: "center 25%",
    },
    {
        name: "Daniel Ololo",
        role: "CTO",
        image: "/team/daniel-ololo.jpg",
        imagePosition: "center 20%",
    },
    {
        name: "Ehis Okoebor, Esq.",
        role: "Chief Legal Officer",
        image: "/team/ehis-okoebor.jpg",
        imagePosition: "center 15%",
    },
];

const emptySlots = 0;

export function TeamSection() {
    return (
        <section id="team" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom">
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
                    <div>
                        <p className="eyebrow">Meet the team</p>
                        <h2 className="section-heading mt-3 max-w-xl">The people behind every order.</h2>
                    </div>
                    <p className="max-w-xl text-[var(--muted)] lg:justify-self-end">
                        OCHA is run by a hands-on team that treats your inventory like their own. From the warehouse
                        floor to your inbox, these are the people making sure your products are stored safely,
                        shipped on time, and delivered with care.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <article
                            key={member.name}
                            className="group overflow-hidden rounded-[1.6rem] border border-[color:var(--border)]/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ocha-aqua)]/40">
                                <Image
                                    src={member.image}
                                    alt={`Portrait of ${member.name}, ${member.role} at OCHA`}
                                    fill
                                    sizes="(min-width: 1180px) 380px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    style={{ objectPosition: member.imagePosition ?? "center" }}
                                />
                            </div>
                            <div className="p-7">
                                <span className="inline-flex rounded-full bg-[var(--ocha-aqua)]/70 px-3 py-1 text-xs font-semibold text-[var(--ocha-dark)]">
                                    {member.role}
                                </span>
                                <h3 className="mt-4 text-2xl font-semibold text-[var(--ocha-dark)]">{member.name}</h3>
                            </div>
                        </article>
                    ))}
                    {Array.from({ length: emptySlots }, (_, i) => (
                        <div
                            key={`empty-${i}`}
                            aria-hidden="true"
                            className="overflow-hidden rounded-[1.6rem] border border-dashed border-[color:var(--border)] bg-white"
                        >
                            <div className="flex aspect-[4/5] items-center justify-center bg-[var(--ocha-aqua)]/20 text-[var(--ocha-dark)]/25">
                                <UserRound size={56} strokeWidth={1.25} />
                            </div>
                            <div className="space-y-3 p-7">
                                <div className="h-6 w-28 rounded-full bg-[var(--ocha-dark)]/5" />
                                <div className="h-7 w-40 rounded-lg bg-[var(--ocha-dark)]/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

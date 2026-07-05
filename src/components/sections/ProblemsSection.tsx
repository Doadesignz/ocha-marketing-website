import { ArrowUpRight, Boxes, CircleDollarSign, ShieldCheck, Truck, Warehouse } from "lucide-react";

const problems = [
    {
        title: "Burden of expensive warehouse costs",
        description:
            "Renting space, staffing operations, and managing inventory is expensive. OCHA gives merchants the infrastructure they need without the overhead.",
        icon: CircleDollarSign,
    },
    {
        title: "Invisible inventory and losses",
        description:
            "Merchants should never lose track of stock. OCHA helps monitor stock data with accurate reporting and real-time visibility.",
        icon: Boxes,
    },
    {
        title: "Time and resource drain",
        description:
            "OCHA removes the daily burden of juggling inventory, packing, and delivery operations across multiple channels.",
        icon: Truck,
    },
    {
        title: "Challenges of managing fulfilment staff",
        description:
            "OCHA handles receiving, picking, packing, shipping, and returns so merchants do not need to manage warehouse teams directly.",
        icon: Warehouse,
    },
    {
        title: "Counterfeit products undermining trust",
        description:
            "OCHA supports authentication and product integrity to protect your brand reputation and customer trust.",
        icon: ShieldCheck,
    },
    {
        title: "Inconsistent customer experience",
        description:
            "Every order is handled with shared accountability so the customer receives a clearer, more reliable experience.",
        icon: ArrowUpRight,
    },
];

export function ProblemsSection() {
    return (
        <section id="problem" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom">
                <p className="eyebrow">What OCHA understands and solves</p>
                <h2 className="section-heading mt-3 max-w-3xl">
                    Operational complexity shouldn't slow growth.
                </h2>
                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {problems.map((problem) => {
                        const Icon = problem.icon;
                        return (
                            <div
                                key={problem.title}
                                className="group rounded-[1.6rem] border border-[color:var(--border)]/80 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ocha-aqua)]/70 text-[var(--ocha-dark)]">
                                    <Icon size={20} />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-[var(--ocha-dark)]">{problem.title}</h3>
                                <p className="mt-3 text-[var(--muted)]">{problem.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

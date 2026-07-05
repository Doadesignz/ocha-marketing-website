import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What does OCHA offer merchants?",
        answer:
            "OCHA provides warehousing, inventory visibility, fulfilment, delivery coordination, and authentication support in one connected system.",
    },
    {
        question: "Which countries does OCHA serve?",
        answer:
            "OCHA is focused on Nigeria, Kenya, Uganda, Tanzania, Zambia, and Zimbabwe as launch markets for merchant onboarding.",
    },
    {
        question: "How does the waitlist work?",
        answer:
            "Merchants submit their details and business profile, and our team reviews the application to prepare the right onboarding experience.",
    },
    {
        question: "Can OCHA support anti-counterfeit trust?",
        answer:
            "Yes. OCHA is designed to support product authenticity, consistent handling, and stronger customer trust across the fulfilment journey.",
    },
];

export function FAQSection() {
    return (
        <section id="faq" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom">
                <p className="eyebrow">Frequently asked questions</p>
                <h2 className="section-heading mt-3 max-w-3xl">Clear answers for merchants evaluating a stronger fulfilment setup.</h2>
                <div className="mt-10 rounded-[2rem] border border-[color:var(--border)]/80 bg-white p-4 shadow-sm sm:p-7">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq.question} value={faq.question}>
                                <AccordionTrigger className="text-left text-base font-semibold text-[var(--ocha-dark)]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[var(--muted)]">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { hasSanityConfig, sanityClient } from "@/lib/sanity";

type FAQ = {
    _id?: string;
    question: string;
    answer: string;
};

const fallbackFaqs: FAQ[] = [
    {
        question: "What does Ochá do?",
        answer:
            "Ochá is a fulfillment and international logistics company. We help businesses store inventory, manage stock, fulfill customer orders, and ship products from Nigeria to destinations worldwide. Whether you need fulfillment, international shipping, or both, Ochá handles the logistics so you can focus on growing your business.",
    },
    {
        question: "Is Ochá a logistics company?",
        answer:
            "Yes. Ochá offers two core services: fulfillment and international shipping. You can use either service independently or combine both depending on your business needs.",
    },
    {
        question: "Who is Ochá for?",
        answer:
            "Ochá is built for e-commerce brands, manufacturers, wholesalers, retailers, growing businesses, and individuals who need reliable international shipping or fulfillment services.",
    },
    {
        question: "Do I need a high number of orders to use Ochá?",
        answer:
            "No. Anyone can use our international shipping service. For fulfillment, our team will assess your business needs and recommend the most suitable solution.",
    },
    {
        question: "What kind of products can I store with Ochá?",
        answer:
            "We store a wide range of non-perishable products including fashion, beauty, electronics, home goods, and consumer products. All products are reviewed before onboarding.",
    },
    {
        question: "How do I know my inventory is safe?",
        answer:
            "Your inventory is stored in secure warehouse facilities with controlled access and monitored operations. You will also have access to live inventory updates, allowing you to monitor stock levels and movement at any time.",
    },
    {
        question: "What happens when a customer places an order?",
        answer:
            "Once we receive an order, we pick the item from your inventory, pack it professionally, dispatch it, and keep you updated throughout the fulfillment process.",
    },
    {
        question: "Do you handle returns?",
        answer:
            "Yes. Returned products are received, inspected, recorded, and added back into your inventory where applicable.",
    },
    {
        question: "Can diaspora brands use Ochá?",
        answer:
            "Absolutely. Businesses anywhere in the world can store inventory with Ochá and sell to customers in Nigeria and other countries where we provide fulfillment.",
    },
    {
        question: "Do I need to hire warehouse staff if I use Ochá?",
        answer:
            "No. Ochá manages your warehousing, inventory, fulfillment, and shipping operations, reducing the need to build your own warehouse team.",
    },
    {
        question: "How much does Ochá cost?",
        answer:
            "International shipping has transparent destination-based pricing. Fulfillment pricing depends on your order volume, storage requirements, and business needs.",
    },
    {
        question: "Can Ochá integrate with my website or social media store?",
        answer:
            "Yes. We can receive orders from your website, social media pages, and supported e-commerce platforms.",
    },
    {
        question: "Can I visit the warehouse?",
        answer:
            "For the security and privacy of our clients, warehouse access is restricted and is not open for general inspections. However, you are welcome to visit our office or collection center to meet our team, discuss your logistics needs, drop off shipments, or complete your onboarding.",
    },
    {
        question: "Do you only work in Nigeria?",
        answer:
            "No. We provide fulfillment services in Nigeria, Kenya, Uganda, Tanzania, Zambia, and Zimbabwe, while offering international shipping from Nigeria to destinations worldwide.",
    },
    {
        question: "How do I get started?",
        answer:
            "Simply contact us through our website or WhatsApp, complete our onboarding form, and our team will guide you through the next steps.",
    },
];

const faqQuery = `*[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer
}`;

async function getFaqs(): Promise<FAQ[]> {
    if (!hasSanityConfig) {
        return fallbackFaqs;
    }

    try {
        const faqs = await sanityClient.fetch<FAQ[]>(
            faqQuery,
            {},
            { next: { revalidate: 60 } }
        );

        return faqs.length > 0 ? faqs : fallbackFaqs;
    } catch {
        return fallbackFaqs;
    }
}

export async function FAQSection() {
    const faqs = await getFaqs();

    return (
        <section id="faq" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom">
                <p className="eyebrow">Frequently asked questions</p>
                <h2 className="section-heading mt-3 max-w-3xl">Ocha Fulfillment – Frequently Asked Questions</h2>
                <div className="mt-10 rounded-[2rem] border border-[color:var(--border)]/80 bg-white p-4 shadow-sm sm:p-7">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq._id ?? faq.question} value={faq._id ?? faq.question}>
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

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { waitlistSchema, type WaitlistFormValues } from "@/lib/validations/waitlist";

const countries = ["Nigeria", "Kenya", "Uganda", "Tanzania", "Zambia", "Zimbabwe"];
const monthlyVolumes = ["0-50", "51-200", "201-500", "501-1000", "1000+"];
const salesChannels = ["Website", "Shopify", "Instagram", "WhatsApp", "Marketplace", "Other"];

export function WaitlistFormSection() {
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<WaitlistFormValues>({
        resolver: zodResolver(waitlistSchema),
        defaultValues: {
            companyName: "",
            fullName: "",
            email: "",
            phoneNumber: "",
            website: "",
            country: "",
            monthlyOrderVolume: "",
            salesChannel: "",
            biggestChallenge: "",
        },
    });

    async function onSubmit(values: WaitlistFormValues) {
        setIsSubmitting(true);
        setFeedback(null);
        setIsError(false);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Unable to submit");
            }

            setFeedback(data.message);
            form.reset();
        } catch (error) {
            setIsError(true);
            setFeedback(error instanceof Error ? error.message : "Unable to submit your application right now.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="waitlist" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="container-custom grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                    <p className="eyebrow">Merchant onboarding</p>
                    <h2 className="section-heading mt-3">Apply to join the OCHA waitlist.</h2>
                    <p className="body-copy mt-5 text-lg text-[var(--muted)]">
                        Tell us about your business so we can prepare the right onboarding experience when OCHA launches.
                    </p>
                </div>
                <div className="rounded-[2rem] border border-[color:var(--border)]/80 bg-[var(--ocha-aqua)]/30 p-6 shadow-sm sm:p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <div className="grid gap-5 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Acme Goods" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ada Okafor" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid gap-5 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="ada@company.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="0800 000 000" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Website URL (optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://yourbrand.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid gap-5 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Country</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select country" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {countries.map((country) => (
                                                        <SelectItem key={country} value={country}>
                                                            {country}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="monthlyOrderVolume"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Monthly Order Volume</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select range" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {monthlyVolumes.map((volume) => (
                                                        <SelectItem key={volume} value={volume}>
                                                            {volume}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid gap-5 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="salesChannel"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Main Sales Channel</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select channel" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {salesChannels.map((channel) => (
                                                        <SelectItem key={channel} value={channel}>
                                                            {channel}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="biggestChallenge"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Biggest Fulfilment Challenge</FormLabel>
                                            <FormControl>
                                                <Textarea rows={5} placeholder="Tell us what is slowing your team down." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" className="w-full bg-[var(--ocha-dark)] text-white hover:opacity-90" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Apply to Join"}
                            </Button>
                            {feedback ? (
                                <p className={`rounded-2xl border px-4 py-3 text-sm ${isError ? "border-red-300 bg-red-50 text-red-700" : "border-emerald-300 bg-emerald-50 text-emerald-700"}`}>
                                    {feedback}
                                </p>
                            ) : null}
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}

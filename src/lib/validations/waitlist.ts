import { z } from "zod";

export const waitlistSchema = z.object({
    companyName: z.string().trim().min(2, "Company name is required"),
    fullName: z.string().trim().min(2, "Full name is required"),
    email: z.string().trim().email("Enter a valid email address"),
    phoneNumber: z.string().trim().min(7, "Phone number is required"),
    website: z.string().trim().optional().or(z.literal("")),
    country: z.string().optional(),
    monthlyOrderVolume: z.string().optional(),
    salesChannel: z.string().optional(),
    biggestChallenge: z.string().trim().max(500).optional(),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;

import { NextResponse } from "next/server";
import { Resend } from "resend";

import { waitlistSchema } from "@/lib/validations/waitlist";
import { hasSanityWriteConfig, sanityWriteClient } from "@/lib/sanity";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const resendFrom = process.env.RESEND_FROM ?? "onboarding@resend.dev";
const resendTo = process.env.RESEND_TO ?? "partnerships@ocha.africa";

function formatValue(value: string | undefined) {
    return value && value.trim().length > 0 ? value : "Not provided";
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = waitlistSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please complete the required fields.",
                    errors: result.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        if (!resend) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email delivery is not configured yet.",
                },
                { status: 500 }
            );
        }

        const values = result.data;
        const submittedAt = new Date().toISOString();

        if (!hasSanityWriteConfig) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Submission storage is not configured yet.",
                },
                { status: 500 }
            );
        }

        await sanityWriteClient.create({
            _type: "waitlistSubmission",
            companyName: values.companyName,
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            website: values.website || undefined,
            country: values.country || undefined,
            monthlyOrderVolume: values.monthlyOrderVolume || undefined,
            salesChannel: values.salesChannel || undefined,
            biggestChallenge: values.biggestChallenge || undefined,
            submittedAt,
        });

        const challenge = escapeHtml(formatValue(values.biggestChallenge)).replaceAll("\n", "<br />");
        const { error } = await resend.emails.send({
            from: resendFrom,
            to: resendTo,
            replyTo: values.email,
            subject: `New OCHA waitlist application: ${values.companyName}`,
            html: `
                <h2>New OCHA waitlist application</h2>
                <p><strong>Company:</strong> ${escapeHtml(values.companyName)}</p>
                <p><strong>Name:</strong> ${escapeHtml(values.fullName)}</p>
                <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(values.phoneNumber)}</p>
                <p><strong>Website:</strong> ${escapeHtml(formatValue(values.website))}</p>
                <p><strong>Country:</strong> ${escapeHtml(formatValue(values.country))}</p>
                <p><strong>Monthly order volume:</strong> ${escapeHtml(formatValue(values.monthlyOrderVolume))}</p>
                <p><strong>Main sales channel:</strong> ${escapeHtml(formatValue(values.salesChannel))}</p>
                <p><strong>Biggest fulfilment challenge:</strong></p>
                <p>${challenge}</p>
            `,
        });

        if (error) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unable to email your application right now.",
                },
                { status: 502 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message:
                    "You’re on the list. Our team will review your details and contact you when onboarding opens.",
            },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Unable to submit your application right now.",
            },
            { status: 500 }
        );
    }
}

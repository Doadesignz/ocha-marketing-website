import { NextResponse } from "next/server";

import { waitlistSchema } from "@/lib/validations/waitlist";

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

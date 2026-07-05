import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-11 w-full rounded-full border border-[color:var(--border)]/80 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-[var(--ocha-dark)] focus:ring-2 focus:ring-[var(--ocha-aqua)]/40",
                className
            )}
            {...props}
        />
    );
}

export { Input };

import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "flex min-h-[120px] w-full rounded-[1.25rem] border border-[color:var(--border)]/80 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-[var(--ocha-dark)] focus:ring-2 focus:ring-[var(--ocha-aqua)]/40",
                className
            )}
            {...props}
        />
    );
}

export { Textarea };

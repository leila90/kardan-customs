import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export default function Button({
                                   children,
                                   className,
                                   variant = "primary",
                                   ...props
                               }: ButtonProps) {
    return (
        <button
            className={clsx(
                "inline-flex items-center justify-center",
                "rounded-[var(--radius-md)]",
                "px-6 py-3",
                "text-sm font-medium",
                "transition-all duration-300",
                "cursor-pointer",

                {
                    /* Primary */
                    "bg-[var(--color-accent)] text-white hover:opacity-90":
                        variant === "primary",

                    /* Secondary */
                    "bg-[var(--color-primary)] text-[var(--color-background)] hover:opacity-90":
                        variant === "secondary",

                    /* Ghost */
                    "border-1 border-[var(--color-border)] bg-transparent text-[var(--color-border)] hover:bg-[var(--color-background-secondary)]/50":
                        variant === "ghost",
                },

                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
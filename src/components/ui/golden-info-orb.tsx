"use client";

import { Info } from "lucide-react";
import { useState } from "react";

interface GoldenInfoOrbProps {
    title: string;
    description: string;
}

export default function GoldenInfoOrb({
                                          title,
                                          description,
                                      }: GoldenInfoOrbProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-flex flex-col items-center">
            {/* Floating Title */}
            <div
                className="
                    absolute
                    -top-12
                    whitespace-nowrap
                    rounded-full
                    border
                    border-[var(--color-secondary)]/30
                    bg-black/60
                    px-4
                    py-1.5
                    text-xs
                    font-medium
                    tracking-wide
                    text-[var(--color-secondary)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                "
            >
                {title}
            </div>

            {/* Glow */}
            <div
                className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[var(--color-secondary)]
                    opacity-20
                    blur-2xl
                    animate-pulse
                "
            />

            {/* Icon */}
            <button
                type="button"
                aria-label={title}
                aria-expanded={isOpen}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                onClick={() => setIsOpen((value) => !value)}
                className="
                    group
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--color-secondary)]/70
                    bg-black/80
                    text-[var(--color-secondary)]
                    shadow-[0_0_30px_rgba(198,146,43,0.18)]
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-[var(--color-secondary)]
                    hover:shadow-[0_0_40px_rgba(198,146,43,0.35)]
                "
            >
                <span
                    className="
                        absolute
                        inset-1
                        rounded-full
                        border
                        border-[var(--color-secondary)]/20
                    "
                />

                <Info
                    size={23}
                    strokeWidth={1.4}
                    className="relative transition-transform duration-300 group-hover:scale-110"
                />

                {/* Light sweep */}
                <span
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        overflow-hidden
                        rounded-full
                    "
                >
                    <span
                        className="
                            absolute
                            -left-full
                            top-0
                            h-full
                            w-1/2
                            rotate-12
                            bg-gradient-to-r
                            from-transparent
                            via-white/15
                            to-transparent
                            transition-all
                            duration-700
                            group-hover:left-[120%]
                        "
                    />
                </span>
            </button>

            {/* Luxury Popup */}
            <div
                className={`
                    absolute
                    top-full
                    z-50
                    mt-5
                    w-[280px]
                    origin-top
                    transition-all
                    duration-300
                    sm:w-[340px]
                    ${
                    isOpen
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-y-2 scale-95 opacity-0"
                }
                `}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[var(--color-secondary)]/30
                        bg-[#111]/90
                        p-5
                        shadow-[0_20px_70px_rgba(0,0,0,0.55)]
                        backdrop-blur-xl
                    "
                >
                    {/* Gold accent */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-0
                            h-px
                            w-24
                            -translate-x-1/2
                            bg-[var(--color-secondary)]
                            shadow-[0_0_15px_rgba(198,146,43,0.7)]
                        "
                    />

                    {/* Decorative glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-10
                            -top-10
                            h-24
                            w-24
                            rounded-full
                            bg-[var(--color-secondary)]/10
                            blur-2xl
                        "
                    />

                    <div className="relative">
                        <div className="mb-3 flex items-center gap-3">
                            <div
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[var(--color-secondary)]/30
                                    text-[var(--color-secondary)]
                                "
                            >
                                <Info size={15} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-sm font-semibold text-white">
                                {title}
                            </h3>
                        </div>

                        <p
                            className="
                                text-sm
                                leading-7
                                text-white/60
                            "
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
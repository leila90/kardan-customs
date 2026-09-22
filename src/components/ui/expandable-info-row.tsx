"use client";

import { useState } from "react";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";

interface ExpandableInfoRowProps {
    title: string;
    description: string;
}

export default function ExpandableInfoRow({
                                              title,
                                              description,
                                          }: ExpandableInfoRowProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="w-full my-4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div
                className={`
                cursor-pointer
                    group
                    relative
                    flex
                    h-15
                    max-w-full
                    items-center
                    overflow-hidden
                    rounded-[var(--radius-lg)]

                    border
                    border-[var(--color-accent)]

                    bg-[linear-gradient(
                        135deg,
                        rgba(255,255,255,0.07),
                        rgba(198,146,43,0.08),
                        rgba(0,0,0,0.88)
                    )]

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]

                    backdrop-blur-xl

                    transition-[width,box-shadow,background-color]
                    duration-1000
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                    isOpen
                        ? `
                                w-full
                                shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                            `
                        : `
                                w-fit
                                shadow-[0_4px_20px_rgba(0,0,0,0.20)]
                            `
                }
                `}
            >
                {/* Golden light sweep */}
                <span
                    className={`
                        pointer-events-none
                        absolute
                        inset-y-[-40%]
                        left-[-20%]
                        z-0
                        w-24
                        rotate-[18deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/[0.10]
                        to-transparent
                        blur-sm

                        transition-transform
                        duration-[1400ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        ${
                        isOpen
                            ? "translate-x-[700%]"
                            : "translate-x-0"
                    }
                    `}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full min-w-0 w-full items-center">

                    {/* Icon */}
                    <div className="relative flex h-15 w-15 shrink-0 items-center justify-center">
                        {/* Glow */}
                        <span
                            className={`
                                absolute
                                h-12
                                w-12
                                rounded-full
                                bg-[#C6922B]/15
                                blur-xl

                                transition-all
                                duration-1000
                                ease-out

                                ${
                                isOpen
                                    ? "scale-110 opacity-100"
                                    : "scale-90 opacity-70"
                            }
                            `}
                        />

                        {/* Gold logo */}
                        <span
                            className={`
                                relative
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full

                                border
                                border-[#D9A441]/70

                                bg-[radial-gradient(
                                    circle_at_35%_30%,
                                    #FFE8A3,
                                    #D9A441_35%,
                                    #9A6819_75%,
                                    #5F3D0C
                                )]

                                shadow-[
                                    inset_0_1px_1px_rgba(255,255,255,0.65),
                                    0_0_16px_rgba(198,146,43,0.22)
                                ]

                                transition-transform
                                duration-1000
                                ease-[cubic-bezier(0.22,1,0.36,1)]

                                group-hover:scale-[1.04]
                            `}
                        >
                            <Image
                                src="/images/hero/gold-logo-lux.png"
                                alt=""
                                width={35}
                                height={35}
                                priority
                                className="h-auto w-9 object-contain"
                            />
                        </span>
                    </div>

                    {/* Title */}
                    <div
                        className={`
                            shrink-0
                            whitespace-nowrap
                            pr-5

                            text-lg
                            font-semibold
                            tracking-[-0.01em]
                            text-[var(--color-accent)]

                            transition-all
                            duration-700
                            ease-out

                            ${
                            isOpen
                                ? "text-[#F4D995]"
                                : "text-[var(--color-accent)]"
                        }
                        `}
                    >
                        {title}
                    </div>

                    {/* Golden separator */}
                    <div
                        className={`
                            mx-1
                            h-9
                            w-px
                            shrink-0

                            bg-gradient-to-b
                            from-transparent
                            via-[#D9A441]
                            to-transparent

                            transition-all
                            duration-700
                            ease-out

                            ${
                            isOpen
                                ? "scale-y-100 opacity-100"
                                : "scale-y-0 opacity-0"
                        }
                        `}
                    />

                    {/* Description */}
                    <div
                        className={`
                            min-w-0
                            flex-1
                            overflow-hidden

                            transition-all
                            duration-[900ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]

                            ${
                            isOpen
                                ? "opacity-100"
                                : "max-w-0 opacity-0"
                        }
                        `}
                    >
                        <div
                            className={`
                                min-w-0
                                px-5

                                text-base
                                leading-6
                                text-white/75

                                transition-all
                                duration-[900ms]
                                ease-[cubic-bezier(0.22,1,0.36,1)]

                                ${
                                isOpen
                                    ? "translate-x-0 blur-0"
                                    : "translate-x-4 blur-[3px]"
                            }
                            `}
                        >
                            {description}
                        </div>
                    </div>

                    {/* Arrow */}
                    <div
                        className={`
                            flex
                            shrink-0
                            items-center
                            px-5

                            text-[#D9A441]

                            transition-all
                            duration-[900ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]

                            ${
                            isOpen
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-3 opacity-0"
                        }
                        `}
                    >
                        <ArrowUpLeft
                            size={17}
                            strokeWidth={1.7}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
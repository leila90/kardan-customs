"use client";

import type {ReactNode} from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export default function HeroFooterCard({
                                      children,
                                      className = "",
                                  }: GlassCardProps) {
    return (
        <div
            className={`
            group relative isolate overflow-hidden
            rounded-3xl
            border border-[var(--hero-accent)]/40
            bg-[var(--hero-accent)]/[0.08]
            p-4
            shadow-[0_20px_80px_-20px_rgba(0,0,0,0.45)]
            backdrop-blur-md
            transition-all duration-1000 ease-out
            
            hover:-translate-y-1
            hover:border-[var(--hero-accent)]/40
            hover:bg-[var(--hero-accent)]/[0.12]
            hover:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.55)]
            
            ${className}`}
        >
            {/* Ambient glow */}
            <div
                className="
                pointer-events-none absolute
                -right-24 -top-24
                h-48 w-48
                rounded-full
                bg-[var(--hero-accent)]/20
                blur-3xl
                transition-all duration-700
                group-hover:bg-[var(--hero-accent-hover)]/50
                group-hover:scale-125
                "
            />

            {/* Moving light */}
            <div
                className="
          pointer-events-none absolute
          -inset-y-full
          -left-1/2
          w-1/3
          rotate-[25deg]
          bg-gradient-to-r
          from-transparent
          via-[var(--hero-accent-hover)]/20
          to-transparent
          blur-md
          opacity-0

          transition-all
          duration-700
          ease-out

          group-hover:left-[120%]
          group-hover:opacity-100
        "
            />

            {/* Top glass highlight */}
            <div
                className="
          pointer-events-none absolute
          inset-x-6 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          opacity-60
        "
            />

            {/* Inner border */}
            <div
                className="
          pointer-events-none absolute
          inset-0
          rounded-3xl
          ring-1 ring-inset ring-[var( --hero-accent-hover)]/[0.06]
        "
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
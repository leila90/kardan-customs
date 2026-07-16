"use client";

import clsx from "clsx";
import useScroll from "@/hooks/use-scroll";

interface Props {
    children: React.ReactNode;
}

export default function NavbarShell({
                                        children,
                                    }: Props) {
    const isScrolled = useScroll();

    return (
        <header
            className={clsx(
                "fixed top-5 inset-x-0 z-50",
                "transition-all duration-300 px-5"
            )}
        >
            <div
                className={clsx(
                    "mx-auto",
                    "max-w-[calc(var(--container-max-width)+100px)]",
                    // "rounded-[var(--radius-lg)]",
                    "relative mx-auto max-w-6xl rounded-2xl border backdrop-blur-xs px-5 transition-all duration-500",
                    "bg-[#0e0c08]/80 border-[#c9a84c]/20 shadow-[0_0_0_1px_rgba(201,168,76,0.08),0_8px_40px_rgba(0,0,0,0.55),0_0_60px_rgba(201,168,76,0.06)]"
                )}
            >
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                    <div
                        className="absolute -top-8 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-3xl"
                        style={{ background: `radial-gradient(ellipse, rgba(201,168,76,0.14) 0%, transparent 70%)` }}
                    />
                    <div className={`absolute top-0 left-[15%] w-[35%] h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent`} />
                </div>
                {children}
            </div>
        </header>
    );
}
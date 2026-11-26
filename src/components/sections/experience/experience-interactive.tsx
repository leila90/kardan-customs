"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export type ExperienceItem = {
    id: string;
    number: string;
    title: string;
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
    tags: string[];
    action: string;
};

type Props = {
    items: ExperienceItem[];
};

export default function ExperienceInteractive({ items }: Props) {
    const locale = useLocale();
    const direction = locale === "fa" ? "rtl" : "ltr";
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = items[activeIndex] ?? items[0];

    if (!activeItem) return null;

    return (
        <div className="grid min-w-0 grid-cols-1 gap-5 p-3 sm:p-5 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,.96fr)] lg:gap-6 lg:p-4 xl:p-5" dir={direction}>
            {/* Industry selector – right side on desktop */}
            <nav className="order-1 min-w-0 lg:order-1" aria-label="انتخاب حوزه‌های تجربه">

                <div className="flex flex-col">
                    {items.map((item, index) => {
                        const selected = index === activeIndex;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={selected}
                                className={[
                                    "group m-1 cursor-pointer relative grid min-h-14 w-full grid-cols-[2.1rem_minmax(0,1fr)_1.8rem] items-center gap-2 rounded-md border px-3 py-3 text-right transition-all duration-300 ease-out sm:min-h-[4.15rem] sm:px-4",
                                    selected
                                        ? "border-(--color-accent)/60 bg-(--color-accent)/10 shadow-[inset_0_1px_0_rgba(255,255,255,.05),0_8px_28px_rgba(0,0,0,.12)]"
                                        : "border-(--color-text-muted)/10 bg-transparent hover:border-white/15 hover:bg-white/[0.035]",
                                ].join(" ")}
                            >
                                <span className={`text-sm font-semibold transition-colors ${selected ? "text-(--color-accent)" : "text-(--color-text-muted)"}`}>
                                    {item.number}
                                </span>
                                <span className={`min-w-0 text-sm font-semibold leading-7 transition-colors sm:text-base ${selected ? "text-(--color-text-primary)" : "text-(--color-text-primary)/90"}`}>
                                    {item.title}
                                </span>
                                <ArrowLeft
                                    size={19}
                                    strokeWidth={1.7}
                                    className={`justify-self-end transition-all duration-300 ${selected ? "-translate-x-1 text-(--color-accent)" : "text-(--color-text-muted) group-hover:-translate-x-1 group-hover:text-(--color-accent)"}`}
                                />
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Detail panel – left side on desktop */}
            <article
                className="order-2 min-w-0 overflow-hidden rounded-md border border-(--color-accent)/35 bg-black/10 shadow-[0_18px_55px_rgba(0,0,0,.2)] lg:order-2"
                aria-live="polite"
            >
                <div className="relative h-52 rounded-md m-5 overflow-hidden bg-black/20 sm:h-64 lg:h-[clamp(13rem,25vw,20rem)]">
                    <Image
                        key={activeItem.id}
                        src={activeItem.image}
                        alt={activeItem.imageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 48vw"
                        unoptimized
                        priority={activeIndex === 0}
                        className="experience-image object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/5" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] tracking-widest text-white/85 backdrop-blur-md">
                        {activeItem.number} / ۰۸
                    </span>
                </div>

                <div key={`${activeItem.id}-content`} className="experience-copy flex flex-col p-5 sm:p-6 lg:p-5 xl:p-6">
                    <p className="mb-1 text-sm font-medium text-(--color-accent)">
                        {activeItem.eyebrow}
                    </p>
                    <h3 className="text-xl font-bold leading-[1.7] text-(--color-text-primary) sm:text-2xl">
                        {activeItem.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-8 text-(--color-text-muted) sm:text-[.95rem]">
                        {activeItem.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {activeItem.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-(--color-accent)/45 px-3 py-1.5 text-xs text-(--color-text-primary)/90 transition-colors duration-300 hover:border-(--color-accent) hover:bg-(--color-accent)/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex w-full">
                        <Link
                            href="/contact"
                            className="mt-auto ms-auto flex w-fit items-center gap-3 pt-6 text-sm text-(--color-text-primary) transition-colors hover:text-(--color-accent)"
                        >
                            <span>{activeItem.action}</span>
                            <ArrowLeft
                                size={19}
                                className="text-(--color-accent) transition-transform duration-300 group-hover:-translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </article>

            <style jsx>{`
                @keyframes experience-image-in {
                    from { opacity: .25; transform: scale(1.035); filter: blur(3px) saturate(.45); }
                    to { opacity: 1; transform: scale(1); filter: blur(0) saturate(.78); }
                }
                @keyframes experience-copy-in {
                    from { opacity: 0; transform: translateY(9px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                :global(.experience-image) {
                    animation: experience-image-in .75s cubic-bezier(.2,.75,.25,1) both;
                    filter: saturate(.78) contrast(1.04) brightness(.84);
                }
                :global(.experience-copy) {
                    animation: experience-copy-in .45s ease both;
                }
                @media (prefers-reduced-motion: reduce) {
                    :global(.experience-image),
                    :global(.experience-copy) { animation: none; }
                }
            `}</style>
        </div>
    );
}

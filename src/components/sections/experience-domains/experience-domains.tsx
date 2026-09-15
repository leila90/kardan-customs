import {
    Boxes,
    FileCheck2,
    Globe2,
    PackageCheck,
    Route,
    ShieldCheck,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const icons = [PackageCheck, FileCheck2, Route, ShieldCheck, Globe2, Boxes];

export default async function ExperienceDomains() {
    const t = await getTranslations("ExperienceDomains");
    const items = t.raw("items") as { title: string; desc: string }[];

    return (
        <section id="experience" className="relative overflow-hidden border-y border-white/6 py-20 sm:py-24 lg:py-28">
            <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_20%,rgba(174,128,27,0.13),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(86,98,74,0.10),transparent_26%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
                            {t("eyebrow")}
                        </p>
                        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
                            {t("title")}
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                            {t("description")}
                        </p>
                    </div>

                    <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-background)]/70 lg:flex">
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-accent)]/50">
                            <span className="absolute h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_20px_var(--color-accent)]" />
                            <span className="absolute h-20 w-20 animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-[var(--color-accent)]/20" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = icons[index] ?? Boxes;

                        return (
                            <article
                                key={item.title}
                                className="group relative min-h-52 overflow-hidden bg-[var(--color-background)]/85 p-6 transition-colors duration-500 hover:bg-[#101417] sm:p-8"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-linear-to-l from-[var(--color-accent)] via-[var(--color-accent)]/30 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                                <div className="mb-8 flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/6 text-[var(--color-accent)] transition-all duration-500 group-hover:border-[var(--color-accent)]/60 group-hover:shadow-[0_0_28px_rgba(174,128,27,0.16)]">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-mono text-xs text-white/20">0{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-text-muted)]">
                                    {item.desc}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

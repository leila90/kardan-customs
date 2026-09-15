"use client";

import { useTranslations } from "next-intl";
import DecisionRiver from "./decision-river";

export default function KardanHero() {
    const t = useTranslations("Hero");

    return (
        <section className="relative min-h-screen overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-text)]">
            <DecisionRiver logoSrc="/logo.png" />

            <div className="pointer-events-none relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center px-6 py-24 lg:grid-cols-[55fr_45fr] lg:px-10">
                <div />

                <div className="pointer-events-auto max-w-xl">
                    <p className="mb-5 text-sm tracking-[0.28em] text-[var(--hero-accent)]">
                        {t("badge")}
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                        {t("title")}
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-8 text-[var(--hero-text)]/70 md:text-lg">
                        {t("description")}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href="#contactUs"
                            className="rounded-full bg-[var(--hero-accent)] px-6 py-3 text-sm font-medium text-[var(--hero-bg)] transition hover:bg-[var(--hero-accent-hover)]"
                        >
                            {t("primaryButton")}
                        </a>

                        <a
                            href="#services"
                            className="rounded-full border border-[var(--hero-text)]/15 px-6 py-3 text-sm text-[var(--hero-text)]/80 transition hover:border-[var(--hero-accent)]/60 hover:text-[var(--hero-text)]"
                        >
                            {t("secondaryButton")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

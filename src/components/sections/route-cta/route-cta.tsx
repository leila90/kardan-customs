import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function RouteCta() {
    const t = await getTranslations("RouteCta");

    return (
        <section className="relative overflow-hidden border-y border-white/6 py-20 sm:py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/6 blur-3xl" />
                <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 1200 260" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M-40 190C170 55 285 250 485 122C680-2 775 205 1000 74C1090 22 1150 42 1240 92" stroke="currentColor" strokeWidth="1" className="text-[var(--color-accent)]" />
                    <path d="M-40 215C160 105 285 260 490 150C680 48 800 228 1000 108C1090 54 1160 68 1240 112" stroke="currentColor" strokeWidth="0.7" className="text-white/20" />
                </svg>
            </div>

            <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
                <p className="text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
                    {t("eyebrow")}
                </p>
                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
                    {t("title")}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                    {t("description")}
                </p>

                <Link
                    href="#contactUs"
                    className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-[var(--color-accent)]/50 bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-[#111] shadow-[0_10px_40px_rgba(174,128,27,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--hero-accent-hover)] hover:shadow-[0_14px_50px_rgba(174,128,27,0.25)]"
                >
                    {t("button")}
                    <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        <MoveUpRight size={17} className="ltr:hidden" />
                        <MoveUpRight size={17} className="rtl:hidden" />
                    </span>
                </Link>
            </div>
        </section>
    );
}

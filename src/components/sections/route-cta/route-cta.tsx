import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/button";

export default async function RouteCta() {
    const t = await getTranslations("RouteCta");

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 bg-[var(--kardan-black)]">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/6 blur-3xl" />
                <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 1200 260" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M-40 190C170 55 285 250 485 122C680-2 775 205 1000 74C1090 22 1150 42 1240 92" stroke="currentColor" strokeWidth="1" className="text-[var(--color-accent)]" />
                    <path d="M-40 215C160 105 285 260 490 150C680 48 800 228 1000 108C1090 54 1160 68 1240 112" stroke="currentColor" strokeWidth="0.7" className="text-white/20" />
                </svg>
            </div>

            <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
                <p className="text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
                </p>
                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
                    {t("title")}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                    {t("description")}
                </p>

                <div className="mt-8">
                    <Button variant={"ghost"} className={"border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 px-15"}>
                        {t("button")}
                        <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 ltr:ml-5 rtl:mr-5 rtl:ml-0 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </Button>                </div>
            </div>
        </section>
    );
}

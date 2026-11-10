import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { GitBranch, Lightbulb, Network, ShieldCheck } from "lucide-react";

import HeroFooterCard from "@/components/ui/cards/hero-footer-card";
import ExpandableInfoRow from "@/components/ui/expandable-info-row";

const cardIcons = [Network, ShieldCheck, GitBranch, Lightbulb];

export default async function Hero() {
    const t = await getTranslations("Hero");
    const locale = await getLocale();

    const items = t.raw("items") as {
        title: string;
        desc: string;
    }[];

    const isEnglish = locale === "en";

    return (
        <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#050505]">
            {/* Main hero visual: intentionally ends before the footer */}
            <div className="relative isolate flex min-h-[34rem] flex-1 flex-col justify-center overflow-hidden">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/hero/bg-hero.png')" }}
                />

                {/* Hero Main Content */}
                <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                    <div
                        dir="ltr"
                        className={`mx-auto grid w-full grid-cols-1 items-center justify-items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8 ${isEnglish ? "lg:[&>*:first-child]:order-2" : ""}`}
                    >
                        {/* Brand visual */}
                        <div className="relative flex w-full items-center justify-center overflow-visible">
                            <div className="relative w-[34%] min-w-[120px] max-w-[190px] sm:w-[30%] sm:max-w-[230px] lg:w-[76%] lg:max-w-[380px]">
                                <Image
                                    src="/images/hero/gold-logo-lux.png"
                                    alt=""
                                    width={600}
                                    height={800}
                                    priority
                                    sizes="(max-width: 640px) 34vw, (max-width: 1024px) 30vw, 24vw"
                                    className={`block h-auto w-full object-contain ${isEnglish ? "scale-x-[-1]" : ""} [mask-image:radial-gradient(ellipse_72%_82%_at_50%_50%,black_58%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_72%_82%_at_50%_50%,black_58%,transparent_100%)]`}
                                />
                            </div>
                        </div>

                        {/* Hero content */}
                        <div
                            dir={isEnglish ? "ltr" : "rtl"}
                            className="flex min-w-0 w-full items-center justify-center lg:px-4"
                        >
                            <div className="w-full max-w-3xl space-y-2 sm:space-y-3">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <ExpandableInfoRow
                                        key={index}
                                        title="زیرساخت هوشمند"
                                        description="راهکارهای یکپارچه برای طراحی و اجرای زیرساخت‌های مدرن فناوری اطلاعات."
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer is a separate, opaque layout region—not an overlay on the hero image */}
            <footer className="relative z-20 shrink-0 border-t border-white/5 bg-[#050505] px-4 pb-5 pt-4 sm:px-5 sm:pb-7 sm:pt-5">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
                    {items.map((item, index) => {
                        const Icon = cardIcons[index] ?? Lightbulb;

                        return (
                            <HeroFooterCard
                                key={index}
                                className="cursor-default py-4 text-center sm:py-5"
                            >
                                <div className="flex justify-center">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-secondary)] text-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-105 sm:mb-4 sm:h-11 sm:w-11">
                                        <Icon size={20} strokeWidth={1.6} />
                                    </div>
                                </div>

                                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] sm:text-base lg:text-lg">
                                    {item.title}
                                </h3>
                            </HeroFooterCard>
                        );
                    })}
                </div>
            </footer>
        </section>
    );
}
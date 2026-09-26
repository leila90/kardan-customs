import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
    GitBranch,
    Lightbulb,
    Network,
    ShieldCheck,
} from "lucide-react";

import HeroFooterCard from "@/components/ui/cards/hero-footer-card";
import HerorCard from "@/components/ui/cards/hero-card";
import GoldenInfoOrb from "@/components/ui/golden-info-orb";
import ExpandableInfoRow from "@/components/ui/expandable-info-row";
import LuxuryLightNetwork from "@/components/sections/hero/luxury-light-network";

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
        <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black">
            {/* Hero Background */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src="/images/hero/hero-bg-3.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Fade to black */}
                <div
                    className="
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-black/30
            to-black
        "
                />
            </div>
            {/* Hero Main Content */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <LuxuryLightNetwork />
            </div>
            <div className="relative flex min-h-0 flex-1 px-4">
                <div
                    dir="ltr"
                    className={`
                        mx-auto
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-6
                        lg:gap-10
                        ${isEnglish ? "flex-row-reverse" : "flex-row"}
                    `}
                >
                    {/* Person - 1/3 */}
                    <div
                        className="
                            relative
                            flex
                            h-full
                            w-1/3
                            shrink-0
                            items-center
                            justify-center
                            overflow-visible
                            {/*pb-20*/}
                            {/*sm:pb-24*/}
                            {/*lg:pb-20*/}
                        "
                    >
                        <div
                            className="
                                relative
                                w-[75%]
                                max-w-[300px]
                                sm:w-[70%]
                                sm:max-w-[340px]
                                lg:w-[65%]
                                lg:max-w-[380px]
                            "
                        >
                            <Image
                                src="/images/hero/gold-logo-lux.png"
                                alt=""
                                width={600}
                                height={800}
                                priority
                                sizes="
                                    (max-width: 640px) 25vw,
                                    (max-width: 1024px) 23vw,
                                    20vw
                                "
                                className={`
                                mt-20
                                    block
                                    h-auto
                                    w-full
                                    object-contain
                                    ${
                                    isEnglish
                                        ? "scale-x-[-1]"
                                        : "scale-x-100"
                                }
                                    [mask-image:radial-gradient(
                                        ellipse_72%_82%_at_50%_50%,
                                        black_58%,
                                        transparent_100%
                                    )]
                                    [-webkit-mask-image:radial-gradient(
                                        ellipse_72%_82%_at_50%_50%,
                                        black_58%,
                                        transparent_100%
                                    )]
                                `}
                            />
                        </div>
                    </div>

                    {/* Hero Content - 2/3 */}
                    <div
                        dir={isEnglish ? "ltr" : "rtl"}
                        className="

                                mt-20
                            flex
                            min-w-0
                            flex-1
                            items-center
                            justify-center
                            lg:px-8
                        "
                    >
                        <div className="w-full max-w-3xl">
                            {/* Hero content */}
                            {/*<HerorCard>*/}
                            {/*    <h3*/}
                            {/*        className="*/}
                            {/*            text-sm*/}
                            {/*            font-semibold*/}
                            {/*            text-[var(--color-text-primary)]*/}
                            {/*            sm:text-base*/}
                            {/*            lg:text-lg*/}
                            {/*        "*/}
                            {/*    >*/}
                            {/*        {t("title")}*/}
                            {/*    </h3>*/}
                            {/*</HerorCard>*/}
                            {/*<GoldenInfoOrb*/}
                            {/*    title="راهکارهای هوشمند"*/}
                            {/*    description="راهکارهای یکپارچه و تخصصی برای طراحی، اجرا و مدیریت زیرساخت‌های فناوری اطلاعات."*/}
                            {/*/>*/}
                                <ExpandableInfoRow
                                    title="زیرساخت هوشمند"
                                    description="راهکارهای یکپارچه برای طراحی و اجرای زیرساخت‌های مدرن فناوری اطلاعات."
                                />
                                <ExpandableInfoRow
                                    title="زیرساخت هوشمند"
                                    description="راهکارهای یکپارچه برای طراحی و اجرای زیرساخت‌های مدرن فناوری اطلاعات."
                                />
                                <ExpandableInfoRow
                                    title="زیرساخت هوشمند"
                                    description="راهکارهای یکپارچه برای طراحی و اجرای زیرساخت‌های مدرن فناوری اطلاعات."
                                />
                                <ExpandableInfoRow
                                    title="زیرساخت هوشمند"
                                    description="راهکارهای یکپارچه برای طراحی و اجرای زیرساخت‌های مدرن فناوری اطلاعات."
                                />
                                <ExpandableInfoRow
                                    title="زیرساخت هوشمند"
                                    description="راهکارهای یکپارچه برای طراحی و اجرای زیرساخت‌های مدرن فناوری اطلاعات."
                                />
                                <ExpandableInfoRow
                                    title="زیرساخت هوشمند"
                                    description="راهکارهای یکپارچه برای طراحی و اجرای زیرساخت‌های مدرن فناوری اطلاعات."
                                />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Cards */}
            <div
                className="
                    relative
                    z-40
                    w-full
                    px-4
                    pb-5
                    sm:px-5
                    sm:pb-7
                "
            >
                <div
                    className="
                        mx-auto
                        grid
                        w-full
                        max-w-7xl
                        grid-cols-1
                        gap-3
                        sm:grid-cols-3
                        sm:gap-4
                    "
                >
                    {items.map((item, index) => {
                        const Icon = cardIcons[index] ?? Lightbulb;

                        return (
                            <HeroFooterCard
                                key={index}
                                className="
                                    cursor-default
                                    py-4
                                    text-center
                                    sm:py-5
                                "
                            >
                                <div className="flex justify-center">
                                    <div
                                        className="
                                            mb-4
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-[var(--color-secondary)]
                                            text-[var(--color-secondary)]
                                            transition-transform
                                            duration-300
                                            group-hover:scale-105
                                            sm:mb-5
                                            sm:h-11
                                            sm:w-11
                                        "
                                    >
                                        <Icon
                                            size={20}
                                            strokeWidth={1.6}
                                        />
                                    </div>
                                </div>

                                <h3
                                    className="
                                        text-sm
                                        font-semibold
                                        text-[var(--color-text-primary)]
                                        sm:text-base
                                        lg:text-lg
                                    "
                                >
                                    {item.title}
                                </h3>
                            </HeroFooterCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import HeroStats from "@/components/sections/hero/hero-stats";
import {getTranslations} from "next-intl/server";
import HeroContent from "@/components/sections/hero/hero-content";
import HeroMedia from "@/components/sections/hero/hero-media";
import HeroFooter from "@/components/sections/footer/hero-footer";
import RoadmapHero from "@/components/sections/hero/road-map-hero";
import Image from "next/image";
import HeroFooterCard from "@/components/ui/cards/hero-footer-card";
import {GitBranch, Lightbulb, Network, ShieldCheck} from "lucide-react";
import GlassCard from "@/components/ui/cards/glass-card";

const cardIcons = [Network, ShieldCheck, GitBranch, Lightbulb];

export default async function Hero() {
    const t = await getTranslations("Hero");
    const items = t.raw("items") as { title: string; desc: string }[];
    // const t = await getTranslations('Hero');
    return (
        <section className="flex min-h-screen flex-col items-center gap-10 lg:flex-row bg-black">
            <div className={"flex flex-col"}>
                <div className="stage">
                    {/*<Image className="base" src={"/images/hero/hero.png"} alt={"hero"} width={1000}*/}
                    {/*       height={100}></Image>*/}
                    <div className="shade"></div>

                </div>
                <div
                    className="
        sm:absolute
        flex
        bottom-8
        left-1/2
        z-20
        w-full
        sm:-translate-x-1/2
        px-5
    "
                >
                    <div
                        className="
        mx-auto
        grid
        w-full
        md:max-w-7xl
        grid-cols-1
        gap-4
        sm:grid-cols-3
        lg:grid-cols-3
    "
                    >
                        {items.map((item, index) => {
                            const Icon = cardIcons[index] ?? Lightbulb;

                            return (
                                <HeroFooterCard key={index} className={"text-center py-5 cursor-default"}>
                                    <div className={"flex justify-center"}>
                                        <div
                                            className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border text-[var(--color-text-primary)] border-[var(--color-secondary)] text-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-105">
                                            <Icon size={21} strokeWidth={1.6}/>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">
                                        {item.title}
                                    </h3>
                                    {/*<p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">*/}
                                    {/*    {item.desc}*/}
                                    {/*</p>*/}
                                </HeroFooterCard>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
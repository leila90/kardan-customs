import {getTranslations} from "next-intl/server";
import Image from "next/image";
import Title from "@/components/ui/title";
import SolutionsCard from "@/components/ui/cards/solution-card";
import Button from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

/**
 * Icon assets paired with each localized feature by index. Icons are visual
 * assets (not translatable content) so they stay in code while copy lives in
 * messages/{locale}.json under the "WhyUs" namespace.
 */
const featureIcons = [
    "/images/icons/featuresIcons/technology-integrated-circuits.svg",
    "/images/icons/featuresIcons/command-window-line.svg",
    "/images/icons/featuresIcons/developer.svg",
    "/images/icons/featuresIcons/responsive.svg",
];

export default async function Solutions() {
    const t = await getTranslations("Solutions");
    const items = t.raw("items") as { title: string; desc: string }[];

    return (
        <section id="aboutUs" className="mx-5 my-5 bg-transparent md:mx-30 md:my-10">
            <Title brand={t("brand")} title={t("title")} subTitle={t("subTitle")} description={t("description")}/>
            <div
                className=" mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-0 ">
                {items.map((item, i) => (
                    <div key={item.title} className=" relative flex items-stretch justify-center lg:px-6 ">
                        <SolutionsCard title={item.title} desc={item.desc} icon={featureIcons[i] ?? featureIcons[0]}/>
                        {/* Vertical separator */}
                        {i !=0 && i < items.length && (
                            <div aria-hidden="true" className=" pointer-events-none absolute right-0 top-1/2 hidden h-full w-px -translate-y-1/3 bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block "/>)}
                    </div>
                ))}
            </div>
            <div className={"relative flex items-stretch justify-center my-20"}>
                <Button variant={"ghost"} className={"border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 px-15"}>
                    {t("button")}
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 ltr:ml-5 rtl:mr-5 rtl:ml-0 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </Button>
            </div>
        </section>
    );
}

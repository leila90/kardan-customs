import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Title from "@/components/ui/title";
import WhyUsCard from "@/components/sections/why-us/why-us-card";

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

export default async function WhyUs() {
    const t = await getTranslations("WhyUs");
    const items = t.raw("items") as { title: string; desc: string }[];

    return (
        <section id="aboutUs" className="mx-5 my-5 bg-transparent md:mx-30 md:my-10">
            <Title brand={t("brand")} title={t("title")} subTitle={t("subTitle")} />

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
                    <div className="relative aspect-[4/3] w-full lg:aspect-square">
                        <Image
                            src="/images/why-us/image.png"
                            alt={t("title")}
                            fill
                            sizes="(min-width: 1024px) 33vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-2">
                        {items.map((item, i) => (
                            <WhyUsCard
                                key={item.title}
                                title={item.title}
                                desc={item.desc}
                                icon={featureIcons[i] ?? featureIcons[0]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

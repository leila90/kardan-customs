import { getTranslations } from "next-intl/server";
import Title from "@/components/ui/title";
import FeatureCard from "@/components/sections/features/feature-card";

const featureIcons = [
    "/images/icons/featuresIcons/rest-api.svg",
    "/images/icons/featuresIcons/repository.svg",
    "/images/icons/featuresIcons/interface-settings.svg",
    "/images/icons/featuresIcons/multimedia-code-alt.svg",
];

export default async function Features() {
    const t = await getTranslations("Features");
    const items = t.raw("items") as { title: string; desc: string }[];

    return (
        <section id="services" className="mx-5 my-5 bg-transparent md:mx-30 md:my-10">
            <Title brand={t("brand")} title={t("title")} subTitle={t("subTitle")} />

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, i) => (
                        <FeatureCard
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                            icon={featureIcons[i] ?? featureIcons[0]}
                            className="rounded-[var(--radius-lg)] border border-[var(--color-border)]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

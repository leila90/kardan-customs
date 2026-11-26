import {getTranslations} from "next-intl/server";
import Title from "@/components/ui/title";
import GlassCard from "@/components/ui/cards/glass-card";
import ExperienceInteractive, {type ExperienceItem} from "./experience-interactive";

export default async function ExperienceSection() {
    const t = await getTranslations("ExperienceSection");
    const items = t.raw("items") as ExperienceItem[];

    return (
        <section
            id="experience"
            className="mx-5 my-8 bg-transparent md:mx-30 md:my-12"
        >
            <Title
                brand={t("brand")}
                title={t("title")}
                subTitle={t("subTitle")}
                description={t("description")}
            />

            <div className="mt-10 grid grid-cols-1 items-stretch gap-5 lg:mt-14">
                <div className="min-w-0">
                    <ExperienceInteractive items={items}/>
                </div>
            </div>
        </section>
    );
}

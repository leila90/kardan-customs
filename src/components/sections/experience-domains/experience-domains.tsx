import {
    ArrowRight,
    Boxes,
    FileCheck2,
    Globe2,
    PackageCheck,
    Route,
    ShieldCheck,
    BackpackIcon,
    LucideSmartphoneNfc
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";

const icons = [PackageCheck, FileCheck2, Route, ShieldCheck, Globe2, Boxes, LucideSmartphoneNfc, BackpackIcon];

export default async function ExperienceDomains() {
    const t = await getTranslations("ExperienceDomains");
    const items = t.raw("items") as { title: string; desc: string }[];

    return (
        <section id="experience" className="mx-5 my-5 bg-transparent md:mx-30 md:my-10">
            <Title brand={t("brand")} title={t("title")} subTitle={t("subTitle")}/>
                <div className=" mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-16 lg:grid-cols-8 lg:gap-0 ">                    {items.map((item, index) => {
                        const Icon = icons[index] ?? Boxes;

                        return (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden bg-transparent transition-colors duration-500 cursor-pointer mx-2 px-2 py-5"
                            >
                                {/*<div className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-linear-to-l from-[var(--color-accent)] via-[var(--color-accent)]/30 to-transparent transition-transform duration-500 group-hover:scale-x-100" />*/}
                                <div className="mb-8 flex items-center justify-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/6 text-[var(--color-secondary)] transition-all duration-500 group-hover:bg-[var(--color-accent)]/6 group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/60 group-hover:shadow-[0_0_28px_rgba(174,128,27,0.16)]">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-md text-center font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                                    {item.title}
                                </h3>

                            </div>
                        );
                    })}
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

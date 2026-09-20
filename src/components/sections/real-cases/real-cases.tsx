import {ArrowRight} from "lucide-react";
import { getTranslations} from "next-intl/server";
import {RealCasesCard} from "@/components/ui/cards/real_cases_card";
import Button from "@/components/ui/button";
import Title from "@/components/ui/title";

export default async function RealCases() {
    const t = await getTranslations("RealCases");
    const items = t.raw("items") as { title: string; desc: string, image: string }[];

    return (
        <section id="knowledge" className="mx-5 my-5 bg-transparent md:mx-30 md:my-10">

            <Title brand={t("brand")} title={t("title")}/>

            <div className="relative my-25">
                <div className="pointer-events-none absolute -inset-6 rounded-[2rem]"/>
                <div className="relative">
                    <div className="pointer-events-none absolute -inset-6 rounded-[2rem]"/>

                    <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-4">

                        {/* Knowledge Cards - 3/4 */}
                        <div
                            className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
                            {items.map((post, index) => (
                                <div
                                    key={index}
                                    // className={
                                    //     index === 1 || index === 3
                                    //         ? "lg:translate-y-8"
                                    //         : undefined
                                    // }
                                >
                                    <RealCasesCard
                                        title={post.title}
                                        description={post.desc}
                                        image={post.image}
                                        imageAlt="Customs vehicle"
                                        href="/services"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Empty / Future Content - 1/4 */}
                        <div className="flex w-full lg:col-span-1 items-center justify-center">
                            <Button variant={"ghost"}
                                    className={"border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 px-15"}>
                                {t("button")}
                                <ArrowRight size={17}
                                            className="transition-transform duration-300 group-hover:translate-x-1 ltr:ml-5 rtl:mr-5 rtl:ml-0 rtl:rotate-180 rtl:group-hover:-translate-x-1"/>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

import {
    GitBranch,
    Lightbulb,
    Network,
    ShieldCheck,
} from "lucide-react";
import {getTranslations} from "next-intl/server";
import Title from "@/components/ui/title";
import GlassCard from "@/components/ui/cards/glass-card";

const cardIcons = [Network, ShieldCheck, GitBranch, Lightbulb];

export default async function PreActionConversation() {
    const t = await getTranslations("PreActionConversation");
    const items = t.raw("items") as { title: string; desc: string }[];

    return (
        <section id="pre-action" className="mx-5 my-5 bg-transparent md:mx-30 md:my-10">
            <Title brand={t("title")} title={t("title")} subTitle={t("subTitle")} description={t("description")}/>

                <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {items.map((item, index) => {
                        const Icon = cardIcons[index] ?? Lightbulb;

                        return (
                            <GlassCard key={index} className={"text-center py-10"} >
                                <div className={"flex justify-center"}>
                                    <div
                                        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-accent)] text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-105">
                                        <Icon size={21} strokeWidth={1.6}/>
                                    </div>
                                </div>
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                                        {item.desc}
                                    </p>
                            </GlassCard>
                        );
                    })}
                </div>
        </section>
    );
}

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

            {/*<div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">*/}
                <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {items.map((item, index) => {
                        const Icon = cardIcons[index] ?? Lightbulb;

                        return (
                            <div key={index}>
                                <div className={"flex flex-row items-center"}>
                                    <div
                                        className="flex h-11 w-11 items-center justify-center">
                                        {/*<Icon size={21} strokeWidth={1.6}/>*/}
                                        <p className={"items-center justify-center text-(--color-accent)"}>0{index+1}</p>
                                    </div>
                                    <div className=" mr-2 h-px w-full bg-(--color-accent)" />

                                </div>
                                <div className={"flex flex-col p-5"}>
                                    <h3 className="text-base font-semibold text-(--color-text-primary) sm:text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-(--color-text-muted)">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            {/*</div>*/}

            <style>{`
                @keyframes conversation-flow {
                    0%, 100% { opacity: .55; stroke-dasharray: 1 0; }
                    50% { opacity: 1; stroke-dasharray: 9 5; }
                }
                @keyframes conversation-dash {
                    to { stroke-dashoffset: -48; }
                }
            `}</style>
        </section>
    );
}

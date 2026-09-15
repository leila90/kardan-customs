import {
    GitBranch,
    Lightbulb,
    Network,
    ShieldCheck,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const cardIcons = [Network, ShieldCheck, GitBranch, Lightbulb];

function DecisionMap() {
    return (
        <div
            aria-hidden="true"
            className="relative mx-auto aspect-square w-full max-w-[430px] text-[var(--color-accent)]"
        >
            <div className="absolute inset-[12%] rounded-full border border-[var(--color-accent)]/10" />
            <div className="absolute inset-[24%] rounded-full border border-[var(--color-accent)]/10" />

            <svg
                viewBox="0 0 440 320"
                className="absolute inset-0 h-full w-full overflow-visible"
                fill="none"
            >
                <defs>
                    <filter id="conversation-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <g stroke="currentColor" strokeOpacity=".18" strokeWidth="1">
                    <path d="M220 160C168 108 116 92 62 72" />
                    <path d="M220 160C166 162 104 184 48 228" />
                    <path d="M220 160C276 112 326 92 388 72" />
                    <path d="M220 160C276 176 336 198 398 244" />
                    <path d="M220 160C180 214 138 254 84 278" />
                    <path d="M220 160C262 218 304 252 360 282" />
                </g>

                <path
                    d="M62 72C126 80 164 116 220 160C274 201 306 236 360 282"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#conversation-glow)"
                    className="motion-safe:animate-[conversation-flow_4s_ease-in-out_infinite]"
                />
                <path
                    d="M48 228C110 188 162 164 220 160C276 156 330 122 388 72"
                    stroke="currentColor"
                    strokeOpacity=".45"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="4 8"
                    className="motion-safe:animate-[conversation-dash_6s_linear_infinite]"
                />

                <g fill="currentColor">
                    <circle cx="62" cy="72" r="4" opacity=".35" />
                    <circle cx="48" cy="228" r="4" opacity=".3" />
                    <circle cx="388" cy="72" r="4" opacity=".3" />
                    <circle cx="398" cy="244" r="4" opacity=".35" />
                    <circle cx="84" cy="278" r="4" opacity=".22" />
                    <circle cx="360" cy="282" r="4" opacity=".28" />
                </g>

                <g filter="url(#conversation-glow)">
                    <circle cx="220" cy="160" r="22" fill="var(--color-background)" stroke="currentColor" strokeWidth="2" />
                    <circle cx="220" cy="160" r="8" fill="currentColor" />
                </g>

                <g fill="var(--color-background)" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="132" cy="113" r="12" />
                    <circle cx="116" cy="186" r="12" />
                    <circle cx="308" cy="112" r="12" />
                    <circle cx="328" cy="205" r="12" />
                    <circle cx="148" cy="244" r="12" />
                    <circle cx="292" cy="248" r="12" />
                </g>
            </svg>

            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[45px] whitespace-nowrap rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-background)]/80 px-3 py-1 text-[10px] font-medium text-[var(--color-accent)] backdrop-blur">
                تصمیم روشن‌تر
            </span>
        </div>
    );
}

export default async function PreActionConversation() {
    const t = await getTranslations("PreActionConversation");
    const items = t.raw("items") as { title: string; desc: string }[];

    return (
        <section
            id="services"
            aria-labelledby="pre-action-conversation-title"
            className="relative overflow-hidden border-y border-[var(--color-border)]/10 bg-[var(--color-background)] py-20 sm:py-24 lg:py-28"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(174,128,27,0.08),transparent_34%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[var(--color-accent)]/25 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)] lg:gap-16">
                    <div className="order-1 text-start lg:order-2">
                        <div className="mb-5 flex items-center gap-3 text-[var(--color-accent)]">
                            <span className="h-px w-10 bg-[var(--color-accent)]/70" />
                            <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2
                            id="pre-action-conversation-title"
                            className="max-w-2xl text-3xl font-bold leading-[1.25] text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
                        >
                            {t("title")}
                            <span className="mt-2 block text-[var(--color-accent)]">{t("highlight")}</span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                            {t("subtitle")}
                        </p>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
                            {t("description")}
                        </p>
                    </div>

                    <div className="order-2 lg:order-1">
                        <DecisionMap />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {items.map((item, index) => {
                        const Icon = cardIcons[index] ?? Lightbulb;

                        return (
                            <article
                                key={item.title}
                                className="group rounded-[var(--radius-md)] border border-[var(--color-border)]/20 bg-white/[0.015] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/[0.035] sm:p-6"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.06] text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-105">
                                    <Icon size={21} strokeWidth={1.6} />
                                </div>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                                    {item.desc}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>

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

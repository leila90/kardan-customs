import { ArrowUpLeft, BookOpen } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BlogCard from "@/components/sections/blog/blog-card";
import { getAllPosts } from "@/lib/blog/posts";
import type { SiteLocale } from "@/lib/site-config";

export default async function KnowledgePreview() {
    const locale = (await getLocale()) as SiteLocale;
    const t = await getTranslations("KnowledgePreview");
    const posts = getAllPosts().slice(0, 3);

    return (
        <section id="knowledge" className="relative py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/5 px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
                            <BookOpen size={14} />
                            <span>{t("eyebrow")}</span>
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
                            {t("title")}
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                            {t("description")}
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="group inline-flex w-fit items-center gap-2 border-b border-[var(--color-accent)]/40 pb-2 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
                    >
                        {t("viewAll")}
                        <ArrowUpLeft className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={16} />
                    </Link>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(174,128,27,0.08),transparent_48%)]" />
                    <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <div
                                key={post.slug}
                                className={index === 1 ? "lg:translate-y-8" : undefined}
                            >
                                <BlogCard
                                    post={post}
                                    locale={locale}
                                    readMoreLabel={t("readMore")}
                                    minuteReadLabel={t("minuteRead", { minutes: post.minuteRead })}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

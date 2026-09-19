import {ArrowRight, ArrowUpLeft, BookOpen} from "lucide-react";
import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import BlogCard from "@/components/sections/blog/blog-card";
import {getAllPosts} from "@/lib/blog/posts";
import type {SiteLocale} from "@/lib/site-config";
import {RealCasesCard} from "@/components/ui/cards/real_cases_card";
import GlassCard from "@/components/ui/cards/glass-card";
import Button from "@/components/ui/button";

export default async function KnowledgePreview() {
    const locale = (await getLocale()) as SiteLocale;
    const t = await getTranslations("KnowledgePreview");
    const posts = getAllPosts().slice(0, 4);

    return (
        <section id="knowledge" className="mx-5 my-5 bg-transparent md:mx-30 md:my-10">
            <div className="">
                <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <div
                            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/5 px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
                            <BookOpen size={14}/>
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
                        <ArrowUpLeft
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            size={16}/>
                    </Link>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute -inset-6 rounded-[2rem]"/>
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-6 rounded-[2rem]"/>

                        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-4">

                            {/* Knowledge Cards - 3/4 */}
                            <div
                                className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
                                {posts.map((post, index) => (
                                    <div
                                        key={post.slug}
                                        className={
                                            index === 1 || index === 3
                                                ? "lg:translate-y-8"
                                                : undefined
                                        }
                                    >
                                        <RealCasesCard
                                            title={post.title[locale]}
                                            description={post.description[locale]}
                                            image={post.coverImage}
                                            imageAlt="Customs vehicle"
                                            href="/services"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Empty / Future Content - 1/4 */}
                            <div className="flex w-full lg:col-span-1 items-center justify-center">
                                <Button variant={"ghost"} className={"border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 px-15"}>
                                {t("button")}
                                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 ltr:ml-5 rtl:mr-5 rtl:ml-0 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                            </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

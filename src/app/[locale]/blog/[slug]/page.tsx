import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Locale } from "next-intl";
import Container from "@/components/ui/container";
import { Link } from "@/i18n/navigation";
import ArticleJsonLd from "@/components/seo/article-json-ld";
import { getAllSlugs, getPostBySlug } from "@/lib/blog/posts";
import { absoluteUrl, buildLanguageAlternates, type SiteLocale } from "@/lib/site-config";

type PageParams = { locale: Locale; slug: string };

/** Pre-renders every known article at build time (SSG) for best SEO/perf. */
export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
    const { locale, slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    const siteLocale = locale as SiteLocale;
    const title = post.title[siteLocale];
    const description = post.description[siteLocale];
    const url = absoluteUrl(`blog/${slug}`, siteLocale);

    return {
        title,
        description,
        alternates: {
            canonical: url,
            languages: buildLanguageAlternates(`blog/${slug}`),
        },
        openGraph: {
            type: "article",
            title,
            description,
            url,
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            images: [{ url: absoluteUrl(post.coverImage) }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
    const { locale, slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const t = await getTranslations({ locale, namespace: "Blog" });
    const siteLocale = locale as SiteLocale;

    return (
        <Container className="py-16 sm:py-20 lg:py-24">
            <ArticleJsonLd post={post} locale={siteLocale} />

            <article className="mx-auto max-w-3xl">
                <Link
                    href="/blog"
                    className="mb-6 inline-flex text-sm font-medium text-[var(--color-accent)] hover:opacity-80"
                >
                    {t("backToList")}
                </Link>

                <h1 className="heading-1 text-[var(--color-text-primary)]">
                    {post.title[siteLocale]}
                </h1>

                <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                    {t("minuteRead", { minutes: post.minuteRead })}
                </p>

                <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-lg)]">
                    <Image
                        src={post.coverImage}
                        alt={post.title[siteLocale]}
                        fill
                        sizes="(min-width: 1024px) 768px, 100vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose-content mt-8 flex flex-col gap-5 text-[var(--color-text-secondary)]">
                    {post.content[siteLocale].map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </article>
        </Container>
    );
}

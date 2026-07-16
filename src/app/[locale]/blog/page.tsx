import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "next-intl";
import Container from "@/components/ui/container";
import BlogHeader from "@/components/sections/blog/blog-header";
import BlogList from "@/components/sections/blog/blog-list";
import { getAllPosts } from "@/lib/blog/posts";
import { absoluteUrl, buildLanguageAlternates, type SiteLocale } from "@/lib/site-config";

type PageParams = { locale: Locale };

export async function generateMetadata(
    { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
    const { locale } = await params;
    const siteLocale = locale as SiteLocale;
    const t = await getTranslations({ locale, namespace: "Blog" });

    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
        alternates: {
            canonical: absoluteUrl("blog", siteLocale),
            languages: buildLanguageAlternates("blog"),
        },
        openGraph: {
            type: "website",
            title: t("metaTitle"),
            description: t("metaDescription"),
            url: absoluteUrl("blog", siteLocale),
        },
    };
}

export default async function BlogPage({ params }: { params: Promise<PageParams> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });
    const posts = getAllPosts();

    return (
        <Container className="py-16 sm:py-20 lg:py-24">
            <BlogHeader heading={t("heading")} subheading={t("subheading")} />
            <BlogList
                posts={posts}
                locale={locale as SiteLocale}
                readMoreLabel={t("readMore")}
                minuteReadLabel={(minutes) => t("minuteRead", { minutes })}
                emptyLabel={t("empty")}
            />
        </Container>
    );
}

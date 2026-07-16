import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { BlogPost } from "@/lib/blog/posts";
import type { SiteLocale } from "@/lib/site-config";

export default function ArticleJsonLd({post, locale}: {post: BlogPost; locale: SiteLocale}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title[locale],
        description: post.description[locale],
        image: absoluteUrl(post.coverImage),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {"@type": "Organization", name: siteConfig.name},
        publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            logo: {"@type": "ImageObject", url: absoluteUrl(siteConfig.organization.logoPath)},
        },
        mainEntityOfPage: absoluteUrl(`blog/${post.slug}`, locale),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
        />
    );
}

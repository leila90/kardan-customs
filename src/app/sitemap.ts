import type { MetadataRoute } from "next";
import { absoluteUrl, buildLanguageAlternates, siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog/posts";

const staticPaths = ["", "about", "services", "projects", "blog", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticEntries: MetadataRoute.Sitemap = siteConfig.locales.flatMap((locale) =>
        staticPaths.map((path) => ({
            url: absoluteUrl(path, locale),
            lastModified: new Date(),
            changeFrequency: path === "" ? "weekly" : "monthly",
            priority: path === "" ? 1 : 0.7,
            alternates: {languages: buildLanguageAlternates(path)},
        }))
    );

    const postEntries: MetadataRoute.Sitemap = getAllPosts().flatMap((post) =>
        siteConfig.locales.map((locale) => ({
            url: absoluteUrl(`blog/${post.slug}`, locale),
            lastModified: new Date(post.updatedAt),
            changeFrequency: "monthly" as const,
            priority: 0.6,
            alternates: {languages: buildLanguageAlternates(`blog/${post.slug}`)},
        }))
    );

    return [...staticEntries, ...postEntries];
}

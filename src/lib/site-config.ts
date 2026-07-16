import { routing } from "@/i18n/routing";

/**
 * Single source of truth for site-wide SEO facts.
 * Change the domain / brand / social links here once and every
 * metadata, sitemap, robots.txt and JSON-LD block updates automatically.
 */
export const siteConfig = {
    name: "Kardan Customs",
    shortName: "Kardan",
    /** TODO: replace with the real production domain before launch */
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kardancustoms.com",
    defaultLocale: routing.defaultLocale,
    locales: routing.locales,
    social: {
        instagram: "https://instagram.com/kardancustoms",
        linkedin: "https://linkedin.com/company/kardancustoms",
        telegram: "https://t.me/kardancustoms",
    },
    organization: {
        legalName: "Kardan Customs Brokerage",
        logoPath: "/logo.png",
        email: "info@kardancustoms.com",
    },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];

/** Builds an absolute URL for a given locale + path, used in metadata/sitemap/hreflang. */
export function absoluteUrl(path: string = "", locale?: SiteLocale) {
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    const base = siteConfig.url.replace(/\/$/, "");
    const localePrefix = locale ? `/${locale}` : "";
    return cleanPath ? `${base}${localePrefix}/${cleanPath}` : `${base}${localePrefix}`;
}

/** Builds the { [locale]: url } map Next.js expects for alternates.languages (hreflang). */
export function buildLanguageAlternates(path: string = "") {
    return Object.fromEntries(
        siteConfig.locales.map((locale) => [locale, absoluteUrl(path, locale)])
    );
}

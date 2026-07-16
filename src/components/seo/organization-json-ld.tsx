import { absoluteUrl, siteConfig } from "@/lib/site-config";

/**
 * Renders the Organization structured data (schema.org/Organization) once,
 * site-wide. Search engines use this to build the knowledge-panel style
 * result and to attribute all pages to the same brand entity.
 */
export default function OrganizationJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.organization.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.organization.logoPath),
        email: siteConfig.organization.email,
        sameAs: Object.values(siteConfig.social),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
        />
    );
}

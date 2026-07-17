/**
 * Serializes structured data for a <script type="application/ld+json"> tag.
 *
 * Plain JSON.stringify() does not escape "</", so a value containing
 * "</script>" (or similar) could close the script tag early and inject
 * arbitrary HTML/JS. This is low-risk today since JSON-LD sources are
 * static, but the blog data layer is explicitly designed to be swapped
 * for a real CMS later — at that point this becomes a real stored-XSS
 * vector, so it's escaped here now.
 */
export function safeJsonLd(data: unknown): string {
    return JSON.stringify(data)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026");
}

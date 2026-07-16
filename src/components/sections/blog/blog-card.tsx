import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/lib/blog/posts";
import type { SiteLocale } from "@/lib/site-config";

type BlogCardProps = {
    post: BlogPost;
    locale: SiteLocale;
    readMoreLabel: string;
    minuteReadLabel: string;
};

/**
 * Single Knowledge Base article preview.
 * Kept intentionally small/dumb: all data comes in as props so it can be
 * reused in the listing page, a "related articles" widget, or the homepage.
 */
export default function BlogCard({ post, locale, readMoreLabel, minuteReadLabel }: BlogCardProps) {
    return (
        <article
            className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] transition-shadow duration-300 hover:shadow-lg"
        >
            <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title[locale]}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <span className="text-xs font-medium text-[var(--color-text-muted)]">
                    {minuteReadLabel}
                </span>

                <h3 className="heading-3 line-clamp-2 text-[var(--color-text-primary)]">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-accent)]">
                        {post.title[locale]}
                    </Link>
                </h3>

                <p className="line-clamp-3 text-sm text-[var(--color-text-secondary)]">
                    {post.description[locale]}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-[var(--color-accent)] hover:opacity-80"
                >
                    {readMoreLabel}
                </Link>
            </div>
        </article>
    );
}

import type { BlogPost } from "@/lib/blog/posts";
import type { SiteLocale } from "@/lib/site-config";
import BlogCard from "@/components/sections/blog/blog-card";

type BlogListProps = {
    posts: BlogPost[];
    locale: SiteLocale;
    readMoreLabel: string;
    minuteReadLabel: (minutes: number) => string;
    emptyLabel: string;
};

/**
 * Pure layout component: 1 column on mobile, 2 on tablet, 3 on desktop.
 * Contains no data-fetching so it can be reused for filtered/paginated lists later.
 */
export default function BlogList({ posts, locale, readMoreLabel, minuteReadLabel, emptyLabel }: BlogListProps) {
    if (posts.length === 0) {
        return (
            <p className="py-16 text-center text-[var(--color-text-muted)]">{emptyLabel}</p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {posts.map((post) => (
                <BlogCard
                    key={post.slug}
                    post={post}
                    locale={locale}
                    readMoreLabel={readMoreLabel}
                    minuteReadLabel={minuteReadLabel(post.minuteRead)}
                />
            ))}
        </div>
    );
}

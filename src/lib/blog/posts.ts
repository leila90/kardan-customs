import type { SiteLocale } from "@/lib/site-config";

export type LocalizedText = Record<SiteLocale, string>;

export type BlogPost = {
    slug: string;
    coverImage: string;
    publishedAt: string; // ISO date
    updatedAt: string; // ISO date
    minuteRead: number;
    title: LocalizedText;
    description: LocalizedText;
    /** Simple paragraph-per-item body. Swap for rich text/markdown when a CMS is connected. */
    content: Record<SiteLocale, string[]>;
};

/**
 * Temporary local data source for the Knowledge Base.
 *
 * This is intentionally isolated behind `getAllPosts` / `getPostBySlug` so the
 * rest of the app (listing page, detail page, sitemap, metadata) never talks
 * to raw data directly. When a real CMS/API is ready, only this file needs to
 * change — e.g. replace the arrays below with `await fetch(...)` calls and
 * keep the same function signatures.
 */
const posts: BlogPost[] = [
    {
        slug: "customs-clearance-process",
        coverImage: "/images/why-us/image.png",
        publishedAt: "2026-05-01",
        updatedAt: "2026-05-01",
        minuteRead: 6,
        title: {
            fa: "مراحل ترخیص کالا از گمرک؛ راهنمای گام‌به‌گام",
            en: "The Customs Clearance Process: A Step-by-Step Guide",
        },
        description: {
            fa: "آشنایی با مراحل قانونی و اسناد لازم برای ترخیص کالا از گمرک ایران.",
            en: "Understand the legal steps and required documents for clearing goods through Iranian customs.",
        },
        content: {
            fa: [
                "ترخیص کالا از گمرک فرآیندی چندمرحله‌ای است که با ثبت اظهارنامه آغاز می‌شود.",
                "در ادامه، اسناد بازرگانی بررسی و ارزش‌گذاری کالا بر اساس مقررات گمرکی انجام می‌شود.",
                "در نهایت پس از پرداخت حقوق ورودی، مجوز خروج کالا از گمرک صادر می‌شود.",
            ],
            en: [
                "Customs clearance is a multi-step process that begins with filing a customs declaration.",
                "Commercial documents are then reviewed and the goods are valued according to customs regulations.",
                "Finally, after import duties are paid, the release permit is issued and goods leave customs.",
            ],
        },
    },
    {
        slug: "order-registration-guide",
        coverImage: "/images/why-us/image.png",
        publishedAt: "2026-05-10",
        updatedAt: "2026-05-10",
        minuteRead: 5,
        title: {
            fa: "ثبت سفارش کالا چیست و چرا اهمیت دارد؟",
            en: "What Is Order Registration and Why Does It Matter?",
        },
        description: {
            fa: "بررسی مفهوم ثبت سفارش، جایگاه قانونی آن و نقشش در واردات موفق.",
            en: "A look at order registration, its legal standing, and its role in successful imports.",
        },
        content: {
            fa: [
                "ثبت سفارش پیش‌شرط قانونی واردات بسیاری از کالاها به کشور است.",
                "این فرآیند از طریق سامانه جامع تجارت و با ارائه پروفرما انجام می‌شود.",
            ],
            en: [
                "Order registration is a legal prerequisite for importing many categories of goods.",
                "It is completed through the national trade portal, based on a submitted proforma invoice.",
            ],
        },
    },
    {
        slug: "customs-tariff-basics",
        coverImage: "/images/why-us/image.png",
        publishedAt: "2026-05-18",
        updatedAt: "2026-05-18",
        minuteRead: 4,
        title: {
            fa: "آشنایی با تعرفه گمرکی و نحوه محاسبه آن",
            en: "Understanding Customs Tariffs and How They're Calculated",
        },
        description: {
            fa: "تعرفه گمرکی چگونه تعیین می‌شود و چه عواملی بر آن اثر می‌گذارند؟",
            en: "How customs tariffs are determined and which factors influence them.",
        },
        content: {
            fa: [
                "هر کالا بر اساس کد تعرفه هشت‌رقمی (HS Code) شناسایی و طبقه‌بندی می‌شود.",
                "نرخ حقوق ورودی بر اساس این کد و مبدأ کالا محاسبه می‌شود.",
            ],
            en: [
                "Every product is identified and classified using an eight-digit HS Code.",
                "The import duty rate is then calculated based on that code and the country of origin.",
            ],
        },
    },
];

export function getAllPosts(): BlogPost[] {
    return [...posts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
    return posts.map((post) => post.slug);
}

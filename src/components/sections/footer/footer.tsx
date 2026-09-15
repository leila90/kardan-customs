import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Locale } from "next-intl";
import FooterHeader from "@/components/sections/footer/footer-header";
import FooterLinkColumn from "@/components/sections/footer/footer-link-column";
import NewsletterForm from "@/components/sections/footer/newsletter-form";
import { navItems } from "@/components/layout/navbar/nav-items";
import { siteConfig } from "@/lib/site-config";

export default async function Footer({ locale }: { locale: Locale }) {
    const t = await getTranslations({ locale, namespace: "Footer" });
    const tNav = await getTranslations({ locale, namespace: "Navbar" });

    const importantLinks = navItems.map((item) => ({
        label: tNav(item.key),
        href: item.slug === "" ? `/${locale}` : `/${locale}/${item.slug}`,
    }));

    const socialLinks = [
        { label: "Instagram", href: siteConfig.social.instagram },
        { label: "LinkedIn", href: siteConfig.social.linkedin },
        { label: "Telegram", href: siteConfig.social.telegram },
    ];

    return (
        <section id="footer">
            <FooterHeader />
            <footer className="bg-black px-4 pt-50 pb-12 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
                        <div className="flex w-full flex-col items-center text-center md:w-[45%] md:items-start md:text-left lg:w-[35%]">
                            <Image src="/images/logo/logo-f-w.png" alt={siteConfig.name} width={200} height={34} />
                            <div className="my-4 h-px w-full bg-linear-to-r from-[var(--color-border)] to-[var(--color-primary)]" />
                            <p className="max-w-sm text-sm leading-relaxed text-white/60">
                                {t("about")}
                            </p>
                        </div>

                        <FooterLinkColumn heading={t("linksHeading")} links={importantLinks} />
                        <FooterLinkColumn heading={t("socialHeading")} links={socialLinks} />
                        <NewsletterForm
                            heading={t("newsletterHeading")}
                            placeholder={t("newsletterPlaceholder")}
                            submitLabel={t("subscribe")}
                        />
                    </div>

                    <div className="mt-16 mb-4 h-px w-full bg-[var(--color-border)]" />

                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-xs text-white/60">
                            {t("copyright", { year: new Date().getFullYear() })}
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-xs text-white/60 transition-colors hover:text-white">
                                {t("terms")}
                            </a>
                            <div className="h-4 w-px bg-white/20" />
                            <a href="#" className="text-xs text-white/60 transition-colors hover:text-white">
                                {t("privacy")}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

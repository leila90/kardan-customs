import type { Metadata } from "next";
import "../globals.css";
import {Locale, NextIntlClientProvider} from 'next-intl';
import {inter, yekan} from "@/lib/font";
import Navbar from "@/components/layout/navbar/navbar";
import {getTranslations} from "next-intl/server";
import Footer from "@/components/sections/footer/footer";
import {absoluteUrl, buildLanguageAlternates, siteConfig, type SiteLocale} from "@/lib/site-config";
import OrganizationJsonLd from "@/components/seo/organization-json-ld";
import {routing} from "@/i18n/routing";

type LayoutParams = { locale: Locale };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(
    {params}: {params: Promise<LayoutParams>}
): Promise<Metadata> {
  const {locale} = await params;
  const siteLocale = locale as SiteLocale;
  const t = await getTranslations({locale, namespace: "Metadata"});

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      template: t("titleTemplate"),
      default: t("defaultTitle"),
    },
    description: t("description"),
    alternates: {
      canonical: absoluteUrl("", siteLocale),
      languages: buildLanguageAlternates(""),
    },
    openGraph: {
      type: "website",
      locale,
      siteName: siteConfig.name,
      title: t("defaultTitle"),
      description: t("description"),
      url: absoluteUrl("", siteLocale),
      images: [{url: absoluteUrl("/logo.png"), alt: t("ogAlt")}],
    },
    twitter: {
      card: "summary_large_image",
      title: t("defaultTitle"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {index: true, follow: true},
    },
  };
}

export default async function LocaleLayout({
                                           children,
                                           params
                                         }: {
  children: React.ReactNode;
  params: Promise<{locale: Locale}>
}) {

  const {locale} = await params;
  const fontClass =
      locale === "fa"
          ? yekan.className
          : inter.className;

    const t = await getTranslations("Navbar");

    const labels = {
        home: t("home"),
        about: t("about"),
        services: t("services"),
        projects: t("projects"),
        blog: t("blog"),
        contact: t("contact"),
    };

  return (
      <NextIntlClientProvider>
      <OrganizationJsonLd />
      <div
          className={`${fontClass}`}
          dir={locale === "fa" ? "rtl" : "ltr"}
      >
          <Navbar
              labels={labels}
              cta={t("cta")}
          />
          <div className="bg-[var(--color-background)]">
              {children}
          </div>
          <Footer locale={locale} />
      </div>
      </NextIntlClientProvider>

  );
}
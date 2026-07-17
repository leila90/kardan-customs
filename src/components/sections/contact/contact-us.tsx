import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Title from "@/components/ui/title";
import ContactForm from "@/components/sections/contact/contact-form";
import SocialLinks from "@/components/sections/contact/social-links";

export default async function ContactUs() {
    const t = await getTranslations("Contact");

    return (
        <section id="contactUs" className="mx-5 my-5 md:mx-30 md:my-10">
            <Title brand={t("brand")} title={t("title")} subTitle={t("subTitle")} />

            <div className="relative flex flex-col justify-center md:flex-row">
                <div className="relative basis-1/2 p-4 sm:p-10">
                    <ContactForm
                        labels={{
                            name: t("name"),
                            namePlaceholder: t("namePlaceholder"),
                            email: t("email"),
                            emailPlaceholder: t("emailPlaceholder"),
                            message: t("message"),
                            messagePlaceholder: t("messagePlaceholder"),
                            agreement: t("agreement"),
                            terms: t("terms"),
                            privacy: t("privacy"),
                            submit: t("submit"),
                        }}
                    />
                </div>

                <div className="relative flex basis-1/2 flex-col">
                    <div className="flex basis-2/5 items-center justify-center px-10">
                        <Image src="/images/logo/logo-f-b.png" alt="" width={280} height={280} />
                    </div>
                    <div className="flex basis-1/4 flex-col items-center justify-center px-10">
                        <div className="h-px w-full bg-linear-to-r from-[var(--color-border)]/0 via-[var(--color-border)] to-[var(--color-border)]/0" />
                        <p className="mt-6 max-w-md text-center text-sm leading-relaxed text-[var(--color-text-secondary)]">
                            {t("aboutText")}
                        </p>
                    </div>
                    <div className="flex basis-1/4 flex-col items-center justify-center px-10">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </section>
    );
}

import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/button";
import Image from "next/image";

export default async function RouteCta() {
    const t = await getTranslations("RouteCta");

    return (
        <section className="relative flex overflow-hidden py-20 sm:py-24 bg-[var(--kardan-black)]">

            <Image
                className="absolute right-0 mask-radial-[100%_100%] mask-radial-from-50% mask-radial-at-left"
                alt=""
                src="/images/cta.png"
                width={700}
                height={300}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
                <p className="text-sm tracking-[0.18em] text-[var(--color-accent)] uppercase">
                    همراه با کاردان
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-xl lg:text-2xl">
                    {t("title")}
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                    {t("description")}
                </p>

                <div className="mt-8">
                    <Button
                        variant="ghost"
                        className="border-[var(--color-accent)] bg-transparent px-15 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
                    >
                        {t("button")}

                        <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 ltr:ml-5 rtl:mr-5 rtl:ml-0 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                        />
                    </Button>
                </div>
            </div>

            {/* Left image - horizontally flipped */}
            <Image
                className="absolute hidden sm:block left-0 mask-radial-[100%_100%] mask-radial-from-50% mask-radial-at-left -scale-x-100"
                alt=""
                src="/images/cta.png"
                width={700}
                height={300}
            />

        </section>
    );
}
import HeroStats from "./hero-stats";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

interface Props {
    t: (key: string) => string;
}

export default function HeroContent({t}: Props) {
    return (
        <div className="text-center lg:text-start">

                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-primary)]
                            text-[var(--color-border)]
                            px-4
                            py-2
                            text-sm
                        "
                    >
                        {t('badge')}
                    </span>

            <h1
                className="
                            heading-1
                            mx-auto
                            max-w-4xl
                            mt-6
                            text-[var(--bright-snow)]
                        "
            >

                {t('title')}
            </h1>

            <p
                className="
                        body-lg
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-[var(--color-border)]
                        "
            >
                {t('description')}
            </p>

            <div
                className="
                            mt-10
                            flex
                            flex-wrap
                            justify-center
                            gap-4
                        "
            >
                <Button>
                    {t('primaryButton')}
                </Button>

                <Button variant="ghost">
                    {t('secondaryButton')}
                </Button>
            </div>
            {/*<HeroStats/>*/}
        </div>
    );
}
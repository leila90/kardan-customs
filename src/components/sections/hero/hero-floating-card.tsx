type Props = {
    title: string;
    description: string;
};

export default function HeroFloatingCard({
                                             title,
                                             description,
                                         }: Props) {
    return (
        <div
            className="
                rounded-xl
                border
                border-[var(--color-border)]
                bg-white/90
                backdrop-blur
                p-4
                shadow-xl
                max-w-[240px]
            "
        >
            <div className="flex items-center gap-2">
                <span
                    className="
                        flex
                        size-6
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-support)]
                        text-white
                        text-xs
                    "
                >
                    ✓
                </span>

                <h3 className="font-semibold">
                    {title}
                </h3>
            </div>

            <p
                className="
                    mt-2
                    text-sm
                    text-[var(--color-text-secondary)]
                "
            >
                {description}
            </p>
        </div>
    );
}
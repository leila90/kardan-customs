const heroStats = [
    {
        value: "10+",
        label: "سال تجربه",
    },
    {
        value: "500+",
        label: "پرونده موفق",
    },
    {
        value: "24/7",
        label: "پشتیبانی",
    },
];
export default function HeroStats() {
    return (
        <div
            className="
                mt-10
                grid
                grid-cols-3
                gap-8
                border-t
                border-[var(--color-border)]
                pt-8
            "
        >
            {heroStats.map((item) => (
                <div
                    key={item.label}
                    className="text-center"
                >
                    <div
                        className="
                            text-3xl
                            font-bold
                            text-[var(--color-primary)]
                        "
                    >
                        {item.value}
                    </div>

                    <div
                        className="
                            mt-2
                            text-sm
                            text-[var(--color-text-secondary)]
                        "
                    >
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
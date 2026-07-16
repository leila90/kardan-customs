import Image from "next/image";
import HeroFloatingCard from "@/components/sections/hero/hero-floating-card";

export default function HeroMedia() {
    return (
        <div className="relative">
        <div
            className="relative
            aspect-[4/3]
            overflow-hidden
            rounded-[var(--radius-lg)]
            border
            {/*border-[var(--color-border)]*/}
            {/*bg-[var(--color-background-secondary)]*/}
            "
        >
            <Image
                src="/images/hero/2.png"
                alt="Customs Clearance"
                fill
                priority
                className="object-cover"
            />

        </div>
    {/*        <div*/}
    {/*            className="*/}
    {/*    absolute*/}
    {/*    -left-8*/}
    {/*    top-8*/}
    {/*    z-10*/}
    {/*    hidden*/}
    {/*    lg:block*/}
    {/*"*/}
    {/*        >*/}
    {/*            <HeroFloatingCard*/}
    {/*                title="ترخیص کالا"*/}
    {/*                description="انجام سریع و دقیق امور گمرکی"*/}
    {/*            />*/}
    {/*        </div>*/}
    {/*        <div*/}
    {/*            className="*/}
    {/*    absolute*/}
    {/*    -right-8*/}
    {/*    bottom-8*/}
    {/*    z-10*/}
    {/*    hidden*/}
    {/*    lg:block*/}
    {/*"*/}
    {/*        >*/}
    {/*            <HeroFloatingCard*/}
    {/*                title="مشاوره واردات و صادرات"*/}
    {/*                description="همراهی از ثبت سفارش تا ترخیص"*/}
    {/*            />*/}

    {/*        </div>*/}
        </div>


    );
}
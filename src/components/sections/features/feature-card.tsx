import Image from "next/image";

type FeatureCardProps = {
    title: string;
    desc: string;
    icon: string;
    className?: string;
};

export default function FeatureCard({ title, desc, icon, className = "" }: FeatureCardProps) {
    return (
        <div className={`cursor-pointer px-2 py-6 text-center transition-transform hover:-translate-y-1 hover:bg-[var(--color-primary)]/50 sm:px-4 sm:py-10 ${className}`}>
            <div className="flex justify-center">
                <Image src={icon} width={50} height={50} alt="" aria-hidden="true" className="h-16 w-16" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                {title}
            </h3>
            {/*<div className="my-5 h-px w-full bg-linear-to-r from-[var(--color-border)]/0 via-[var(--color-border)] to-[var(--color-border)]/0" />*/}
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {desc}
            </p>
        </div>
    );
}

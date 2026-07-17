import Image from "next/image";

type WhyUsCardProps = {
    title: string;
    desc: string;
    icon: string;
};

/** Single feature tile. Kept dumb/reusable so it can appear in other sections later. */
export default function WhyUsCard({ title, desc, icon }: WhyUsCardProps) {
    return (
        <div className="m-2 flex cursor-pointer gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] p-4 sm:m-3 sm:p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)]/10">
                <Image src={icon} alt="" width={28} height={28} aria-hidden="true" />
            </div>
            <div>
                <h4 className="font-bold text-[var(--color-text-primary)]">{title}</h4>
                <h6 className="sub-heading-1 mt-1 text-[var(--color-text-secondary)]">{desc}</h6>
            </div>
        </div>
    );
}

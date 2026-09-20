import Image from "next/image";

type SolutionsCardProps = {
    title: string;
    desc: string;
    icon: string;
};

/** Single feature tile. Kept dumb/reusable so it can appear in other sections later. */
export default function SolutionsCard({title, desc, icon}: SolutionsCardProps) {
    return (
        <div className="mt-10 flex cursor-pointer flex-col items-center justify-center gap-4 text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="flex justify-center">
                <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)]/5">
                    <Image src={icon} alt="" width={45} height={45} aria-hidden="true"/>
                </div>
            </div>
            <h4 className="pt-5 font-bold text-[var(--color-accent)]">{title}</h4>
            <h6 className="sub-heading-1 px-2 pt-2 text-[var(--color-text-secondary)]">{desc}</h6>
        </div>
    );
}

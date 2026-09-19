import Image from "next/image";

type SolutionsCardProps = {
    title: string;
    desc: string;
    icon: string;
};

/** Single feature tile. Kept dumb/reusable so it can appear in other sections later. */
export default function SolutionsCard({title, desc, icon}: SolutionsCardProps) {
    return (
        <div className="cursor-pointer gap-4 justify-center text-center hover:hover:-translate-y-1 mt-10">
            <div className={"flex justify-center"}>
                <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)]/5">
                    <Image src={icon} alt="" width={45} height={45} aria-hidden="true"/>
                </div>
            </div>
            <h4 className="font-bold text-[var(--color-accent)] pt-5">{title}</h4>
            <h6 className="sub-heading-1 mt-1 text-[var(--color-text-secondary)] pt-2">{desc}</h6>
        </div>
    );
}

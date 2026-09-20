import Image from "next/image";
import {Link} from "@/i18n/navigation";

type RealCasesCardProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    href?: string;
};

export function RealCasesCard({
    title,
    description,
    image,
    imageAlt,
    href = "#",
}: RealCasesCardProps) {
    return (
        <Link
            href={href}
            className="group relative isolate block h-[180px] w-full overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-[var(--kardan-black)] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_14px_45px_rgba(0,0,0,0.30)] sm:h-[200px]"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.07]"
            />

            <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-1/2 -left-[45%] z-30 h-[200%] w-[28%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-[120%] group-hover:opacity-100"
            />

            <div className="relative flex h-full w-full flex-row rtl:flex-row ltr:flex-row-reverse">
                <div className="relative h-full w-1/2 shrink-0 overflow-hidden">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 220px"
                        className="rounded-[var(--radius-md)] object-cover scale-[1.01] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 from-transparent via-[var(--kardan-black)]/[0.9] to-[var(--kardan-black)] rtl:bg-gradient-to-r ltr:bg-gradient-to-l"
                    />
                </div>

                <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-3 py-3 text-center sm:px-4">
                    <h3 className="line-clamp-2 text-[13px] font-semibold leading-[1.65] tracking-[-0.01em] text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--bright-snow)]">
                        {title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[10px] leading-[1.8] text-[var(--color-text-muted)] transition-colors duration-300 group-hover:text-[var(--charcoal)]">
                        {description}
                    </p>
                </div>
            </div>

            <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 start-0 h-px w-0 bg-[var(--color-accent)] opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-60"
            />
        </Link>
    );
}

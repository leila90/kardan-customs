type FooterLinkItem = {
    label: string;
    href: string;
};

type FooterLinkColumnProps = {
    heading: string;
    links: FooterLinkItem[];
    widthClass?: string;
};

export default function FooterLinkColumn({ heading, links, widthClass = "lg:w-[15%]" }: FooterLinkColumnProps) {
    return (
        <div className={"flex w-full flex-col items-center text-center md:w-[45%] md:items-start md:text-start " + widthClass}>
            <h3 className="text-sm font-medium text-white">{heading}</h3>
            <div className="mt-6 flex flex-col gap-2">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

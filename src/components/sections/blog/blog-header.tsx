type BlogHeaderProps = {
    heading: string;
    subheading: string;
};

export default function BlogHeader({ heading, subheading }: BlogHeaderProps) {
    return (
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <h1 className="heading-1 text-[var(--color-text-primary)]">{heading}</h1>
            <p className="sub-heading-1 mt-3 text-[var(--color-text-muted)]">{subheading}</p>
        </header>
    );
}

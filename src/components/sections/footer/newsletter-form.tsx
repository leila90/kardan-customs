import Button from "@/components/ui/button";

type NewsletterFormProps = {
    heading: string;
    placeholder: string;
    submitLabel: string;
};

/** No submit handler yet — needs a newsletter provider (e.g. Mailchimp/Resend) wired up before launch. */
export default function NewsletterForm({ heading, placeholder, submitLabel }: NewsletterFormProps) {
    return (
        <div className="flex w-full flex-col items-center text-center md:w-[45%] md:items-start md:text-start lg:w-[25%]">
            <h3 className="text-sm font-medium text-white">{heading}</h3>
            <form className="mt-4 flex h-13 w-full max-w-80 items-center gap-2 overflow-hidden rounded-full border border-[var(--color-accent)]/50">
                <input
                    type="email"
                    name="email"
                    placeholder={placeholder}
                    required
                    className="h-full w-full bg-transparent p-6 text-start text-sm text-white outline-none placeholder:text-xs placeholder:text-white/60"
                />
                <Button
                    variant={"ghost"}
                    className={"mx-1.5 h-10 shrink-0 cursor-pointer rounded-full border-[var(--color-accent)] bg-linear-to-b from-[var(--color-accent)]/50 to-[var(--color-accent)]/20 px-4 text-sm text-white transition hover:from-[var(--color-accent)]/20 hover:to-[var(--color-accent)]/50 active:scale-95"}
                >
                    {submitLabel}
                </Button>
            </form>
        </div>
    );
}

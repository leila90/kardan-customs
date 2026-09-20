import Button from "@/components/ui/button";

type ContactFormLabels = {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    agreement: string;
    terms: string;
    privacy: string;
    submit: string;
};

const fieldClass =
    "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition focus:border-[var(--color-accent)] focus:outline-none";

/**
 * Presentational form only: no submit handler is wired up yet because there is
 * no backend/email endpoint configured for this project. Connect this to an
 * API route (or a service like Resend/Formspree) before launch.
 */
export default function ContactForm({ labels }: { labels: ContactFormLabels }) {
    return (
        <form className="space-y-6">
            <div>
                <label className="mb-2 block text-sm text-[var(--color-text-primary)]">{labels.name}</label>
                <input type="text" name="name" required placeholder={labels.namePlaceholder} className={fieldClass} />
            </div>

            <div>
                <label className="mb-2 block text-sm text-[var(--color-text-primary)]">{labels.email}</label>
                <input type="email" name="email" required placeholder={labels.emailPlaceholder} className={fieldClass} />
            </div>

            <div>
                <label className="mb-2 block text-sm text-[var(--color-text-primary)]">{labels.message}</label>
                <textarea name="message" required rows={4} placeholder={labels.messagePlaceholder} className={`${fieldClass} resize-none`} />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs text-[var(--color-text-muted)] sm:text-sm">
                    {labels.agreement}
                </p>
                <Button variant={"ghost"} className={"mx-1.5 h-10 shrink-0 cursor-pointer rounded-full border-[var(--color-accent)] bg-linear-to-b from-[var(--color-accent)]/50 to-[var(--color-accent)]/20 hover:from-[var(--color-accent)]/20 hover:to-[var(--color-accent)]/50 px-4 text-sm text-white transition active:scale-95"}>
                    {labels.submit}
                </Button>
            </div>
        </form>
    );
}

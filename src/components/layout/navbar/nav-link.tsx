"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({
                                    href,
                                    children,
                                }: NavLinkProps) {
    const pathname = usePathname();

    const isActive =
        pathname === href ||
        pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className={clsx(
                "relative py-2 transition-all duration-300  font-medium",

                isActive
                    ? "text-[var(--color-accent)] font-medium"
                    : "text-[var(--color-secondary)] hover:text-[var(--color-accent)]"
            )}
        >
            {children}

            <span
                className={clsx(
                    "absolute left-0 bottom-0 h-[2px] rounded-full bg-[var(--color-accent)] transition-all duration-300",

                    isActive
                        ? "w-full"
                        : "w-0"
                )}
            />
        </Link>
    );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
        pathname.endsWith(href);

    return (
        <Link
            href={href}
            className={clsx(
                "relative text-sm transition-colors duration-300",
                {
                    "text-[var(--color-accent)] font-medium":
                    isActive,
                    "hover:text-[var(--color-accent)]":
                        !isActive,
                }
            )}
        >
            {children}

            {isActive && (
                <span
                    className="
            absolute
            -bottom-2
            left-0
            h-[2px]
            w-full
            rounded-full
            bg-[var(--color-accent)]
          "
                />
            )}
        </Link>
    );
}
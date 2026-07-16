"use client";

import { usePathname } from "next/navigation";

import NavLink from "./nav-link";
import { navItems } from "./nav-items";

interface Props {
    labels: Record<string, string>;
}

export default function NavbarLinks({
                                        labels,
                                    }: Props) {
    const pathname = usePathname();

    const locale =
        pathname.split("/")[1] || "fa";
    return (
        <nav>
            <ul className="flex items-center gap-5">
                {navItems.map((item) => {
                    const href =
                        item.slug === ""
                            ? `/${locale}`
                            : `/${locale}/${item.slug}`;

                    return (
                        <li key={item.key}>
                            <NavLink href={href}>
                                {labels[item.key]}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
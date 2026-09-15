"use client";

import {useState} from "react";
import {Menu, X} from "lucide-react";

import Button from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageSwitcher from "@/components/ui/language-switcher";

import Link from "next/link";
import {navItems} from "./nav-items";
import clsx from "clsx";

interface MobileMenuProps {
    labels: Record<string, string>;
    cta: Record<string, string>;
}

export default function MobileMenu({
                                       labels,
                                       cta,
                                   }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        {!isOpen && (<button
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
            >
                <Menu size={24} />
            </button>
        )}

            {isOpen && (
                <div
                    className="
            fixed
            inset-0
            z-[100]
          "
                >
                    <div
                        className="
              flex
              items-center
              justify-between
              p-6
              border-b
              border-[var(--color-border)]
            "
                    >
            <span className="font-bold">

            </span>

                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Menu"
                            className={"px-3"}
                        >
                            <X size={24}/>
                        </button>
                    </div>

                    <div className="p-6
            bg-[var(--color-primary)] rounded-b-[var(--radius-lg)]">
                        <nav>
                            <ul className="space-y-6">
                                {navItems.map((item) => (
                                    <li key={item.key}>
                                        <Link
                                            href={item.slug}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {labels[item.key]}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mt-10 flex items-center gap-4">
                            <ThemeToggle/>
                            <LanguageSwitcher/>
                        </div>

                        <div className="mt-8">
                            <Button className="w-full">
                                {cta['cta']}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
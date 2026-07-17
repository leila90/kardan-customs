"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    // next-themes can't know the stored/system theme on the server, so
    // `theme` is undefined during SSR and on the very first client render.
    // Rendering theme-dependent attributes/icons before mount causes a
    // hydration mismatch (aria-label and the icon shown would differ
    // between server and client). Deferring to a neutral, static state
    // until mounted avoids that.
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // This is next-themes' own documented workaround: the theme is
        // genuinely unknowable during SSR (it lives in localStorage/system
        // preference), so a second client-only render is unavoidable here,
        // not an accidental extra render this rule is meant to catch.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    return (
        <button
            id="switch"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={mounted ? theme : undefined}
            suppressHydrationWarning
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-xl border transition-all duration-200 text-[#7a5520] hover:text-[#3d2800] border-[#9a6e28]/25 bg-[#9a6e28]/6 hover:bg-[#9a6e28]/12 hover:border-[#9a6e28]/40"
        >
            {mounted && theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}

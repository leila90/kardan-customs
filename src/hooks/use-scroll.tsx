"use client";

import { useEffect, useState } from "react";

export default function useScroll() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    return isScrolled;
}
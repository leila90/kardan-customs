import localFont from "next/font/local";

export const inter = localFont({
    src: [
        {
            path: "../assets/fonts/inter/Inter-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/inter/Inter-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/inter/Inter-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-inter",
    display: "swap",
});

export const yekan = localFont({
    src: [
        {
            path: "../assets/fonts/yekan/YekanBakh-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/yekan/YekanBakh-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/yekan/YekanBakh-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-yekan",
    display: "swap",
});
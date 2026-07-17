import {inter, yekan} from "@/lib/font";
import {ThemeProvider} from "@/providers/theme-provider";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            suppressHydrationWarning
            data-scroll-behavior="smooth"
            className={`${inter.variable} ${yekan.variable}`}>
        <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
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
            className={`${inter.variable} ${yekan.variable}`}>
        <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
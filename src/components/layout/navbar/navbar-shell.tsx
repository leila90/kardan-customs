interface Props {
    children: React.ReactNode;
}

export default function NavbarShell({children}: Props) {
    return (
        <header className="fixed inset-x-0 top-5 z-50 px-3 transition-all duration-300 sm:px-5">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#c9a84c]/20 bg-[#0e0c08]/80 px-3 shadow-[0_0_0_1px_rgba(201,168,76,0.08),0_8px_40px_rgba(0,0,0,0.55),0_0_60px_rgba(201,168,76,0.06)] backdrop-blur-xs transition-all duration-500 sm:px-5">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <div
                        className="absolute -top-8 left-1/2 h-16 w-3/4 -translate-x-1/2 blur-3xl"
                        style={{background: "radial-gradient(ellipse, rgba(201,168,76,0.14) 0%, transparent 70%)"}}
                    />
                    <div className="absolute left-[15%] top-0 h-px w-[35%] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
                </div>
                {children}
            </div>
        </header>
    );
}

"use client";

import DecisionRiver from "./DecisionRiver";

export default function KardanHero() {
    return (
        <section
            dir="rtl"
            className="relative min-h-screen overflow-hidden bg-[#07090B] text-[#F7F3EA]"
        >
            <DecisionRiver logoSrc="/logo.png" />

            <div className="pointer-events-none relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center px-6 py-24 lg:grid-cols-2 lg:px-10">
                <div />

                <div className="pointer-events-auto max-w-xl">
                    <p className="mb-5 text-sm tracking-[0.28em] text-[#C8922D]">
                        کاردان ترخیص
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                        پیش از اجرا،
                        <br />
                        مسیر تصمیم روشن می‌شود.
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-8 text-[#F7F3EA]/70 md:text-lg">
                        جایی که مقررات، ریسک، هزینه، زمان و اسناد به هم می‌رسند؛ کاردان
                        مسیر را آرام، قابل فهم و قابل تصمیم می‌کند.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="rounded-full bg-[#C8922D] px-6 py-3 text-sm font-medium text-[#07090B] transition hover:bg-[#E8BC62]"
                        >
                            شروع بررسی پرونده
                        </a>

                        <a
                            href="#approach"
                            className="rounded-full border border-[#F7F3EA]/15 px-6 py-3 text-sm text-[#F7F3EA]/80 transition hover:border-[#C8922D]/60 hover:text-[#F7F3EA]"
                        >
                            روش کار کاردان
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
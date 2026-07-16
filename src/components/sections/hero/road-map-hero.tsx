'use client'

import { motion } from "framer-motion";
import {
    Handshake,
    Route,
    BadgeCheck,
    Search,
    ShieldAlert,
    BriefcaseBusiness,
} from "lucide-react";

const GOLD = "#ffde00";
const HOT_GOLD = "#ffffff";

const steps = [
    { title: "تعامل", icon: Handshake, x: "14%", y: "17%", large: false },
    { title: "مسیرهای ممکن", icon: Route, x: "43%", y: "25%", large: false },
    { title: "تصمیم آگاهانه", icon: BadgeCheck, x: "77%", y: "31%", large: false },
    { title: "شناسایی ریسک‌ها", icon: ShieldAlert, x: "54%", y: "82%", large: false },
    { title: "اجرا", icon: BriefcaseBusiness, x: "15%", y: "70%", large: false },
    { title: "شناخت شرایط", icon: Search, x: "86%", y: "61%", large: true },
];

const labels = [
    ["بررسی نیازها", "10%", "29%"],
    ["تحلیل داده‌ها", "14%", "38%"],
    ["مطالعه بازار", "12%", "55%"],
    ["جمع‌آوری اطلاعات", "33%", "74%"],
    ["کنترل و پایش", "39%", "86%"],
    ["اعتبارسنجی", "49%", "50%"],
    ["بررسی پیامدها", "59%", "60%"],
    ["مقایسه راهکارها", "67%", "46%"],
    ["تحلیل سناریوها", "61%", "21%"],
    ["مدیریت ریسک", "79%", "83%"],
    ["ارزیابی گزینه‌ها", "43%", "36%"],
];

const mainPath = `
  M145 92
  C230 95 250 170 360 145
  C455 120 520 120 535 230
  C555 350 440 360 160 550
  C480 750 620 455 550 600
  C690 285 745 325 775 245
  C820 150 990 200 900 435
`;

const sidePaths = [
    `M145 92 C240 170 235 240 160 282 C105 315 130 375 230 345`,
    `M230 345 C310 305 350 245 535 230`,
    `M230 345 C170 405 120 465 155 555 C185 625 255 635 315 565`,
    `M155 555 C230 590 260 690 335 655 C405 620 370 520 460 455`,
    `M360 145 C440 195 485 190 535 230`,
    `M535 230 C610 190 610 130 535 105 C490 90 455 115 430 145`,
    `M535 230 C625 240 650 190 710 180 C765 170 805 205 775 245`,
    `M775 245 C855 230 925 260 900 350 C875 440 805 390 855 335`,
    `M650 382 C720 410 735 475 690 535 C650 590 570 560 585 470`,
    `M460 455 C380 430 315 455 310 525 C305 610 390 625 460 565`,
    `M460 455 C520 410 570 430 650 382`,
    `M585 470 C520 520 450 515 410 570 C365 630 430 690 520 640`,
    `M315 565 C390 555 420 610 520 640`,
    `M650 382 C715 345 770 350 855 335`,
];

export default function IsometricRoadmap() {
    return (
        <section
            dir="rtl"
            className="
        relative w-full overflow-hidden rounded-3xl text-white
        h-[420px] sm:h-[520px] md:h-[620px]
        lg:h-[720px] lg:w-1/2
        [--roadmap-scale:.52]
        sm:[--roadmap-scale:.66]
        md:[--roadmap-scale:.82]
        lg:[--roadmap-scale:.72]
        xl:[--roadmap-scale:.82]
      "
            style={{ perspective: "3500px" }}
        >
            <div
                className="absolute left-1/2 top-1/2 h-[760px] w-[1120px]"
                style={{
                    transformStyle: "preserve-3d",
                    transform:
                        "translate(-50%, -50%) scale(var(--roadmap-scale)) rotateX(48deg) rotateZ(0deg)",
                }}
            >
                <div
                    className="absolute inset-0 rounded-[42px] opacity-50"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,215,0,.20) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.20) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <svg
                    className="absolute inset-0 h-full w-full overflow-visible"
                    viewBox="0 0 1000 760"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <filter id="mapGlow">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        <linearGradient id="movingGoldMap" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255,215,0,0)" />
                            <stop offset="44%" stopColor="rgba(255,215,0,1)" />
                            <stop offset="55%" stopColor="rgba(255,243,163,1)" />
                            <stop offset="100%" stopColor="rgba(255,215,0,0)" />
                        </linearGradient>
                    </defs>

                    {sidePaths.map((d, i) => (
                        <path
                            key={i}
                            d={d}
                            fill="none"
                            stroke="rgba(255,255,255,.58)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="6 8"
                        />
                    ))}

                    <path
                        d={mainPath}
                        fill="none"
                        stroke="rgba(255,215,255,.58)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        filter="url(#mapGlow)"
                        strokeDasharray="6 8"
                    />

                    <motion.path
                        d={mainPath}
                        fill="none"
                        stroke="url(#movingGoldMap)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="url(#mapGlow)"
                        strokeDasharray="4 50"
                        animate={{ strokeDashoffset: [900, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    />

                    {[
                        [145, 92],
                        [360, 145],
                        [535, 230],
                        [460, 455],
                        [650, 382],
                        [775, 245],
                        [855, 335],
                        [155, 555],
                    ].map(([cx, cy], i) => (
                        <motion.circle
                            key={i}
                            cx={cx}
                            cy={cy}
                            r="4.5"
                            fill={HOT_GOLD}
                            filter="url(#mapGlow)"
                            animate={{ r: [4, 7.5, 4], opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                delay: i * 0.16,
                            }}
                        />
                    ))}
                </svg>

                {steps.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                            style={{
                                left: item.x,
                                top: item.y,
                                transformStyle: "preserve-3d",
                                transform: "translateZ(95px) rotateZ(12deg) rotateX(-58deg)",
                            }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.18,
                            }}
                        >
                            <motion.div
                                className={[
                                    "mx-auto flex items-center justify-center rounded-full border bg-black/10 backdrop-blur-md",
                                    item.large
                                        ? "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 border-[3px]"
                                        : "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 border",
                                ].join(" ")}
                                style={{
                                    borderColor: GOLD,
                                    boxShadow:
                                        "0 0 22px rgba(255,215,0,.8), 0 0 70px rgba(255,215,0,.75), inset 0 0 20px rgba(255,215,0,.25)",
                                }}
                                animate={{
                                    boxShadow: [
                                        "0 0 18px rgba(255,215,0,.55), 0 0 45px rgba(255,215,0,.55), inset 0 0 14px rgba(255,215,0,.18)",
                                        "0 0 35px rgba(255,215,0,1), 0 0 95px rgba(255,215,0,.95), inset 0 0 28px rgba(255,215,0,.35)",
                                        "0 0 18px rgba(255,215,0,.55), 0 0 45px rgba(255,215,0,.55), inset 0 0 14px rgba(255,215,0,.18)",
                                    ],
                                }}
                                transition={{
                                    duration: 2.3,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            >
                                <Icon
                                    className={
                                        item.large
                                            ? "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                                            : "h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
                                    }
                                    strokeWidth={1.85}
                                    color={GOLD}
                                    style={{
                                        filter: "drop-shadow(0 0 12px rgba(255,215,0,1))",
                                    }}
                                />
                            </motion.div>

                            <div
                                className={[
                                    "mt-2 sm:mt-3 rounded-xl border border-yellow-400/45 bg-black/75 font-semibold backdrop-blur-md",
                                    item.large
                                        ? "px-4 py-1.5 text-base sm:px-5 sm:py-2 sm:text-xl md:text-2xl"
                                        : "px-3 py-1.5 text-sm sm:px-4 sm:text-base md:px-5 md:py-2 md:text-xl",
                                ].join(" ")}
                                style={{
                                    color: GOLD,
                                    textShadow: "0 0 18px rgba(255,215,0,1)",
                                    boxShadow: "0 12px 26px rgba(0,0,0,.6)",
                                }}
                            >
                                {item.title}
                            </div>
                        </motion.div>
                    );
                })}

                {labels.map(([text, x, y], i) => (
                    <div
                        key={i}
                        className="
              absolute rounded-lg border border-white/20 bg-black/65
              px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-md
              sm:px-3 sm:py-1.5 sm:text-xs
              md:px-4 md:text-sm
            "
                        style={{
                            left: x,
                            top: y,
                            boxShadow: "0 8px 18px rgba(0,0,0,.55)",
                        }}
                    >
                        {text}
                    </div>
                ))}
            </div>
        </section>
    );
}
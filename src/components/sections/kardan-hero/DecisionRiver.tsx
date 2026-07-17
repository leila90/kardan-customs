"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hubs, sources } from "./riverData";

type Props = {
    logoSrc: string;
};

function pathToHub(sourceId: string, x1: number, y1: number, x2: number, y2: number) {
    const bend = sourceId.length % 2 === 0 ? -7 : 7;
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2 + bend;
    return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

function pathBetween(x1: number, y1: number, x2: number, y2: number, bend = 0) {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2 + bend;
    return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export default function DecisionRiver({ logoSrc }: Props) {
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!root.current) return;

        const ctx = gsap.context(() => {
            const feederPaths = gsap.utils.toArray<SVGPathElement>(".river-feeder");
            const mainPaths = gsap.utils.toArray<SVGPathElement>(".river-main");
            const hubGroups = gsap.utils.toArray<SVGGElement>(".river-hub");
            const sourceLabels = gsap.utils.toArray<SVGTextElement>(".source-label");

            feederPaths.forEach((p) => {
                const len = p.getTotalLength();
                gsap.set(p, {
                    strokeDasharray: `${len * 0.08} ${len * 0.92}`,
                    strokeDashoffset: len,
                    opacity: 0.18,
                });
            });

            mainPaths.forEach((p) => {
                const len = p.getTotalLength();
                gsap.set(p, {
                    strokeDasharray: `${len * 0.16} ${len * 0.84}`,
                    strokeDashoffset: len,
                    opacity: 0.2,
                });
            });

            gsap.set(hubGroups, { opacity: 0, scale: 0.96, transformOrigin: "center" });
            gsap.set(sourceLabels, { opacity: 0 });
            gsap.set(".ambient-thread", { opacity: 0.1 });
            gsap.set(".kardan-shore", { opacity: 0.72, scale: 0.96, transformOrigin: "center" });

            gsap.to(".ambient-thread", {
                strokeDashoffset: -220,
                duration: 18,
                repeat: -1,
                ease: "none",
                stagger: 0.5,
            });

            gsap.to(".ambient-particle", {
                opacity: () => gsap.utils.random(0.15, 0.55),
                scale: () => gsap.utils.random(0.8, 1.25),
                duration: () => gsap.utils.random(2.2, 5),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.18,
            });

            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

            tl.to(sourceLabels, {
                opacity: 0.55,
                duration: 0.8,
                stagger: { each: 0.05, from: "random" },
                ease: "sine.out",
            });

            tl.to(
                feederPaths,
                {
                    strokeDashoffset: 0,
                    opacity: 0.68,
                    duration: 3.6,
                    ease: "power2.inOut",
                    stagger: { each: 0.07, from: "random" },
                },
                "<0.2"
            );

            tl.to(
                ".source-spark",
                {
                    opacity: 0.9,
                    scale: 1.35,
                    duration: 0.7,
                    yoyo: true,
                    repeat: 1,
                    stagger: { each: 0.06, from: "random" },
                    ease: "sine.inOut",
                },
                "<0.1"
            );

            tl.to(
                hubGroups,
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.75,
                    stagger: { each: 0.14, from: "random" },
                    ease: "power2.out",
                },
                "-=2.3"
            );

            tl.to(
                ".hub-sub",
                {
                    opacity: 0.86,
                    y: 0,
                    duration: 0.45,
                    stagger: { each: 0.04, from: "random" },
                    ease: "sine.out",
                },
                "-=1.6"
            );

            tl.to(
                mainPaths,
                {
                    strokeDashoffset: 0,
                    opacity: 0.85,
                    duration: 3.2,
                    stagger: 0.18,
                    ease: "power2.inOut",
                },
                "-=1.5"
            );

            tl.to(
                ".main-current-core",
                {
                    opacity: 1,
                    duration: 1,
                    ease: "sine.out",
                },
                "-=2.2"
            );

            tl.to(
                ".kardan-shore",
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                },
                "-=0.8"
            );

            tl.to(
                ".shore-glow",
                {
                    opacity: 0.72,
                    scale: 1.06,
                    duration: 1.8,
                    ease: "sine.inOut",
                },
                "-=1"
            );

            tl.to(
                [feederPaths, mainPaths, hubGroups, sourceLabels],
                {
                    opacity: 0.12,
                    duration: 2.2,
                    ease: "sine.inOut",
                },
                "+=1.4"
            );

            tl.to(
                ".shore-glow",
                {
                    opacity: 0.28,
                    scale: 1,
                    duration: 1.6,
                    ease: "sine.inOut",
                },
                "<"
            );
        }, root);

        return () => ctx.revert();
    }, []);

    const targetLogo = { x: 82, y: 50 };

    return (
        <div
            ref={root}
            className="absolute inset-0 z-0 overflow-hidden bg-[#07090B]"
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_48%,rgba(200,146,45,0.12),transparent_34%),linear-gradient(90deg,rgba(7,9,11,0.04),rgba(7,9,11,0.3)_64%,rgba(7,9,11,0.78))]" />

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <linearGradient id="riverAmber" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#F7F3EA" stopOpacity="0.15" />
                        <stop offset="52%" stopColor="#C8922D" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#E8BC62" stopOpacity="0.95" />
                    </linearGradient>

                    <linearGradient id="riverWhite" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#F7F3EA" stopOpacity="0.08" />
                        <stop offset="80%" stopColor="#F7F3EA" stopOpacity="0.88" />
                    </linearGradient>
                </defs>

                {/* ambient invisible field */}
                {Array.from({ length: 18 }).map((_, i) => {
                    const y = 14 + ((i * 9) % 74);
                    const x1 = 5 + ((i * 13) % 55);
                    const x2 = x1 + 18 + ((i * 7) % 24);
                    const bend = i % 2 ? 9 : -9;

                    return (
                        <path
                            key={`ambient-${i}`}
                            className="ambient-thread"
                            d={pathBetween(x1, y, x2, y + ((i % 3) - 1) * 7, bend)}
                            fill="none"
                            stroke="#C8922D"
                            strokeOpacity="0.18"
                            strokeWidth="0.18"
                            strokeDasharray="1 5"
                            strokeLinecap="round"
                        />
                    );
                })}

                {/* source to hub streams */}
                {sources.map((s) => {
                    const hub = hubs.find((h) => h.id === s.to)!;
                    return (
                        <g key={s.id}>
                            <path
                                className="river-feeder"
                                d={pathToHub(s.id, s.x, s.y, hub.x, hub.y)}
                                fill="none"
                                stroke="url(#riverAmber)"
                                strokeWidth="0.45"
                                strokeLinecap="round"
                                filter="url(#softGlow)"
                            />
                            <path
                                d={pathToHub(`${s.id}-white`, s.x, s.y, hub.x, hub.y)}
                                fill="none"
                                stroke="url(#riverWhite)"
                                strokeWidth="0.16"
                                strokeLinecap="round"
                                opacity="0.35"
                            />
                            <circle
                                className="source-spark"
                                cx={s.x}
                                cy={s.y}
                                r="0.35"
                                fill="#F7F3EA"
                                opacity="0.15"
                                filter="url(#softGlow)"
                            />
                            <text
                                className="source-label"
                                x={s.x}
                                y={s.y - 1.6}
                                textAnchor="middle"
                                fill="#F7F3EA"
                                opacity="0"
                                fontSize="1.65"
                                fontWeight="500"
                            >
                                {s.label}
                            </text>
                        </g>
                    );
                })}

                {/* hub to final river */}
                {hubs.map((h, i) => {
                    const bend = i % 2 ? 8 : -8;
                    const width = h.level === 2 ? 0.82 : 0.58;

                    return (
                        <path
                            key={`main-${h.id}`}
                            className="river-main"
                            d={pathBetween(h.x, h.y, targetLogo.x, targetLogo.y, bend)}
                            fill="none"
                            stroke="url(#riverAmber)"
                            strokeWidth={width}
                            strokeLinecap="round"
                            filter="url(#softGlow)"
                        />
                    );
                })}

                {/* main calm current near Kardan */}
                <path
                    className="main-current-core"
                    d="M 58 51 C 66 48, 73 49, 82 50"
                    fill="none"
                    stroke="#F7F3EA"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    opacity="0"
                    filter="url(#softGlow)"
                />

                {/* hubs */}
                {hubs.map((h) => (
                    <g key={h.id} className="river-hub">
                        <circle
                            cx={h.x}
                            cy={h.y}
                            r={h.level === 2 ? 3.4 : 2.4}
                            fill="#C8922D"
                            opacity="0.08"
                            filter="url(#softGlow)"
                        />
                        <text
                            x={h.x}
                            y={h.y - 2.8}
                            textAnchor="middle"
                            fill="#F7F3EA"
                            fontSize={h.level === 2 ? "2.45" : "2.05"}
                            fontWeight="700"
                        >
                            {h.label}
                        </text>
                        {h.subs.map((sub, index) => (
                            <text
                                key={sub}
                                className="hub-sub"
                                x={h.x}
                                y={h.y + 2.2 + index * 2.3}
                                textAnchor="middle"
                                fill="#E8BC62"
                                fontSize="1.5"
                                opacity="0"
                                transform="translate(0 1)"
                            >
                                {sub}
                            </text>
                        ))}
                    </g>
                ))}

                {/* Kardan shore */}
                <g className="kardan-shore">
                    <ellipse
                        className="shore-glow"
                        cx={targetLogo.x}
                        cy={targetLogo.y}
                        rx="8"
                        ry="13"
                        fill="#C8922D"
                        opacity="0.24"
                        filter="url(#softGlow)"
                    />
                    <foreignObject x="76.4" y="41.5" width="11.2" height="17">
                        <div className="flex h-full w-full items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element --
                                next/image can't size correctly inside an SVG foreignObject
                                at this tiny viewBox scale; this is a small decorative logo,
                                not an LCP element. */}
                            <img
                                src={logoSrc}
                                alt=""
                                className="max-h-full max-w-full object-contain opacity-90"
                            />
                        </div>
                    </foreignObject>
                </g>

                {/* particles */}
                {Array.from({ length: 54 }).map((_, i) => {
                    const x = 6 + ((i * 19) % 78);
                    const y = 8 + ((i * 31) % 84);
                    return (
                        <circle
                            key={`particle-${i}`}
                            className="ambient-particle"
                            cx={x}
                            cy={y}
                            r={i % 4 === 0 ? 0.22 : 0.14}
                            fill={i % 3 === 0 ? "#F7F3EA" : "#C8922D"}
                            opacity="0.1"
                        />
                    );
                })}
            </svg>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_50%,transparent_0%,rgba(7,9,11,0.15)_52%,rgba(7,9,11,0.78)_100%)]" />
        </div>
    );
}
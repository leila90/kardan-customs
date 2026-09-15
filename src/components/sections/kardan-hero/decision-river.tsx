"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { kardanCenter, riverNodes } from "./river-data";

type Props = {
    logoSrc: string;
};

/** Gentle organic curve from a node out to the Kardan center. */
function pathToCenter(id: string, x: number, y: number) {
    const bend = id.length % 2 === 0 ? -6 : 6;
    const mx = (x + kardanCenter.x) / 2;
    const my = (y + kardanCenter.y) / 2 + bend;
    return `M ${x} ${y} Q ${mx} ${my} ${kardanCenter.x} ${kardanCenter.y}`;
}

function pathBetween(x1: number, y1: number, x2: number, y2: number, bend = 0) {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2 + bend;
    return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export default function DecisionRiver({ logoSrc }: Props) {
    const root = useRef<HTMLDivElement | null>(null);

    const activeNodes = riverNodes.filter((n) => n.tier === "active");
    const secondaryNodes = riverNodes.filter((n) => n.tier === "secondary");
    const ghostNodes = riverNodes.filter((n) => n.tier === "ghost");
    const customsNode = riverNodes.find((n) => n.id === "customs");

    useEffect(() => {
        if (!root.current) return;

        const ctx = gsap.context(() => {
            const activePaths = gsap.utils.toArray<SVGPathElement>(".path-active");
            const secondaryPaths = gsap.utils.toArray<SVGPathElement>(".path-secondary");
            const nodeGroups = gsap.utils.toArray<SVGGElement>(".river-node");
            const subLabels = gsap.utils.toArray<SVGTextElement>(".hub-sub");

            secondaryPaths.forEach((p) => {
                const len = p.getTotalLength();
                gsap.set(p, {
                    strokeDasharray: `${len * 0.1} ${len * 0.9}`,
                    strokeDashoffset: len,
                    opacity: 0.15,
                });
            });

            activePaths.forEach((p) => {
                const len = p.getTotalLength();
                gsap.set(p, {
                    strokeDasharray: `${len * 0.18} ${len * 0.82}`,
                    strokeDashoffset: len,
                    opacity: 0.2,
                });
            });

            gsap.set(nodeGroups, { opacity: 0, scale: 0.96, transformOrigin: "center" });
            gsap.set(subLabels, { opacity: 0 });
            gsap.set(".ghost-path", { opacity: 0.07 });
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

            tl.to(nodeGroups, {
                opacity: 1,
                scale: 1,
                duration: 0.75,
                stagger: { each: 0.12, from: "random" },
                ease: "power2.out",
            });

            tl.to(
                secondaryPaths,
                {
                    strokeDashoffset: 0,
                    opacity: 0.4,
                    duration: 3,
                    ease: "power2.inOut",
                    stagger: { each: 0.08, from: "random" },
                },
                "-=0.5"
            );

            tl.to(
                activePaths,
                {
                    strokeDashoffset: 0,
                    opacity: 0.95,
                    duration: 2.6,
                    stagger: 0.2,
                    ease: "power2.inOut",
                },
                "-=2.2"
            );

            tl.to(
                subLabels,
                {
                    opacity: 0.86,
                    y: 0,
                    duration: 0.45,
                    stagger: { each: 0.06, from: "start" },
                    ease: "sine.out",
                },
                "-=1"
            );

            tl.to(
                ".kardan-shore",
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                },
                "-=1.2"
            );

            tl.to(
                ".shore-glow",
                {
                    opacity: 0.75,
                    scale: 1.06,
                    duration: 1.8,
                    ease: "sine.inOut",
                },
                "-=1"
            );

            tl.to(
                [secondaryPaths, activePaths, nodeGroups, subLabels],
                {
                    opacity: (i, target) =>
                        target.classList?.contains("path-active")
                            ? 0.35
                            : target.classList?.contains("river-node")
                              ? 0.7
                              : 0.12,
                    duration: 2.2,
                    ease: "sine.inOut",
                },
                "+=1.6"
            );
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={root}
            className="absolute inset-0 z-0 overflow-hidden bg-[var(--hero-bg)]"
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_27%_50%,rgba(200,146,45,0.14),transparent_38%),linear-gradient(90deg,rgba(7,9,11,0.05),rgba(7,9,11,0.35)_58%,rgba(7,9,11,0.82))]" />

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
                        <stop offset="0%" stopColor="#F7F3EA" stopOpacity="0.2" />
                        <stop offset="48%" stopColor="#C8922D" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#E8BC62" stopOpacity="0.95" />
                    </linearGradient>
                </defs>

                {/* ambient starfield threads spanning the whole canvas, including the empty text-side */}
                {Array.from({ length: 16 }).map((_, i) => {
                    const y = 10 + ((i * 11) % 82);
                    const x1 = 4 + ((i * 17) % 88);
                    const x2 = x1 + 12 + ((i * 9) % 22);
                    const bend = i % 2 ? 7 : -7;

                    return (
                        <path
                            key={`ambient-${i}`}
                            className="ambient-thread"
                            d={pathBetween(x1, y, x2, y + ((i % 3) - 1) * 6, bend)}
                            fill="none"
                            stroke="#C8922D"
                            strokeOpacity="0.15"
                            strokeWidth="0.16"
                            strokeDasharray="1 5"
                            strokeLinecap="round"
                        />
                    );
                })}

                {/* ghost (inactive) cluster paths -- e.g. قرارداد: barely visible */}
                {ghostNodes.map((n) => (
                    <path
                        key={`ghost-${n.id}`}
                        className="ghost-path"
                        d={pathToCenter(n.id, n.x, n.y)}
                        fill="none"
                        stroke="#C8922D"
                        strokeWidth="0.28"
                        strokeDasharray="0.3 2.4"
                        strokeLinecap="round"
                    />
                ))}

                {/* secondary paths: faint dashed lines to the surrounding entities */}
                {secondaryNodes.map((n) => (
                    <path
                        key={`secondary-${n.id}`}
                        className="path-secondary"
                        d={pathToCenter(n.id, n.x, n.y)}
                        fill="none"
                        stroke="url(#riverAmber)"
                        strokeWidth="0.32"
                        strokeLinecap="round"
                    />
                ))}

                {/* active main current: order list + customs, the two live flows */}
                {activeNodes.map((n) => (
                    <path
                        key={`active-${n.id}`}
                        className="path-active"
                        d={pathToCenter(n.id, n.x, n.y)}
                        fill="none"
                        stroke="url(#riverAmber)"
                        strokeWidth="0.7"
                        strokeLinecap="round"
                        filter="url(#softGlow)"
                    />
                ))}

                {/* customs sub-branches fanning out (تعرفه / ارزش / مجوز) */}
                {customsNode?.subs?.map((sub, index) => {
                    const angle = -0.55 + index * 0.55;
                    const bx = customsNode.x + 7 * Math.cos(angle);
                    const by = customsNode.y + 7 * Math.sin(angle);
                    return (
                        <g key={sub}>
                            <path
                                className="path-secondary"
                                d={pathBetween(customsNode.x, customsNode.y, bx, by)}
                                fill="none"
                                stroke="url(#riverAmber)"
                                strokeWidth="0.24"
                                strokeLinecap="round"
                            />
                            <text
                                className="hub-sub"
                                x={bx}
                                y={by}
                                textAnchor="middle"
                                fill="#E8BC62"
                                fontSize="1.5"
                                opacity="0"
                                transform="translate(0 1)"
                            >
                                {sub}
                            </text>
                        </g>
                    );
                })}

                {/* ghost node markers (very faint, no glow) */}
                {ghostNodes.map((n) => (
                    <g key={n.id} className="river-node">
                        <circle cx={n.x} cy={n.y} r="1.8" fill="#C8922D" opacity="0.05" />
                        <text
                            x={n.x}
                            y={n.y - 2.4}
                            textAnchor="middle"
                            fill="#F7F3EA"
                            fontSize="1.75"
                            fontWeight="500"
                            opacity="0.25"
                        >
                            {n.label}
                        </text>
                    </g>
                ))}

                {/* secondary node markers */}
                {secondaryNodes.map((n) => (
                    <g key={n.id} className="river-node">
                        <circle
                            cx={n.x}
                            cy={n.y}
                            r="2.2"
                            fill="#C8922D"
                            opacity="0.08"
                            filter="url(#softGlow)"
                        />
                        <text
                            x={n.x}
                            y={n.y - 2.8}
                            textAnchor="middle"
                            fill="#F7F3EA"
                            fontSize="2"
                            fontWeight="600"
                        >
                            {n.label}
                        </text>
                    </g>
                ))}

                {/* active node markers: larger, brighter halo */}
                {activeNodes.map((n) => (
                    <g key={n.id} className="river-node">
                        <circle
                            cx={n.x}
                            cy={n.y}
                            r="3.4"
                            fill="#C8922D"
                            opacity="0.12"
                            filter="url(#softGlow)"
                        />
                        <text
                            x={n.x}
                            y={n.y - 3.4}
                            textAnchor="middle"
                            fill="#F7F3EA"
                            fontSize="2.5"
                            fontWeight="700"
                        >
                            {n.label}
                        </text>
                    </g>
                ))}

                {/* Kardan center */}
                <g className="kardan-shore">
                    <ellipse
                        className="shore-glow"
                        cx={kardanCenter.x}
                        cy={kardanCenter.y}
                        rx="9"
                        ry="14"
                        fill="#C8922D"
                        opacity="0.24"
                        filter="url(#softGlow)"
                    />
                    <foreignObject
                        x={kardanCenter.x - 5.6}
                        y={kardanCenter.y - 8.5}
                        width="11.2"
                        height="17"
                    >
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
                    <text
                        x={kardanCenter.x}
                        y={kardanCenter.y + 11.5}
                        textAnchor="middle"
                        fill="#F7F3EA"
                        fontSize="2.6"
                        fontWeight="700"
                    >
                        کاردان
                    </text>
                </g>

                {/* particles spanning the whole canvas */}
                {Array.from({ length: 48 }).map((_, i) => {
                    const x = 4 + ((i * 19) % 92);
                    const y = 6 + ((i * 31) % 88);
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

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_27%_50%,transparent_0%,rgba(7,9,11,0.1)_46%,rgba(7,9,11,0.7)_100%)]" />
        </div>
    );
}

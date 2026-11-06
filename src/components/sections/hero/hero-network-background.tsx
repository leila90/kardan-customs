"use client";

import { useEffect, useRef, useState } from "react";

const NETWORK_PATHS = [
    "M210 210 C258 199 295 217 329 230 C370 250 389 236 410 231 C461 204 497 184 555 190 C646 177 662 254 735 284 C787 306 811 308 841 352 C882 413 894 455 946 466",
    "M204 350 C286 332 325 373 354 394 C374 408 390 414 407 417 C455 428 471 468 505 475 C558 484 588 458 620 435 C666 404 702 415 744 420 C793 421 824 445 857 468 C887 481 925 470 946 466",
    "M204 525 C264 518 295 516 332 479 C358 453 381 427 407 417",
    "M204 525 C271 520 314 546 356 574 C390 595 407 621 442 622 C486 623 501 621 535 634 C579 650 597 663 632 666 C673 670 693 654 720 650 C776 651 809 622 834 585 C863 541 888 490 946 466",
    "M222 674 C295 689 347 649 386 630 C405 621 425 621 442 622",
    "M555 190 C497 175 467 174 410 231 C374 268 342 277 365 299 C396 322 431 323 469 347 C488 360 505 397 505 475",
    "M744 420 C697 392 641 353 587 347 C562 334 540 322 519 325 C478 325 459 336 469 347",
    "M505 475 C554 485 571 505 602 519 C654 540 697 552 746 534 C799 508 823 477 857 468 C894 461 923 469 946 466",
];

const EXCHANGE_PATHS = [
    "M1040 491 C1142 523 1259 533 1369 497 C1414 483 1457 485 1480 494 C1503 503 1525 508 1552 505",
    "M1552 505 C1440 474 1411 343 1235 348 C1150 348 1090 365 1030 412",
];

function LightPath({ d, exchange = false }: { d: string; exchange?: boolean }) {
    const halo = exchange ? "#ffc15d" : "#ffbb50";
    const core = exchange ? "#fff1cb" : "#fff1c8";

    return (
        <>
            <path
                d={d}
                fill="none"
                stroke={halo}
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.9"
                filter="url(#network-soft-glow)"
            />
            <path
                d={d}
                fill="none"
                stroke={core}
                strokeWidth={exchange ? "2" : "2.2"}
                strokeLinecap="round"
                filter="url(#network-tight-glow)"
            />
        </>
    );
}

interface HeroNetworkBackgroundProps {
    /** نمایش یا مخفی‌کردن کنترل توقف انیمیشن */
    showControls?: boolean;
    /** سرعت چرخه کامل نور، بر حسب میلی‌ثانیه */
    duration?: number;
}

export default function HeroNetworkBackground({
    showControls = true,
    duration = 16000,
}: HeroNetworkBackgroundProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [paused, setPaused] = useState(false);
    const pausedRef = useRef(paused);
    const durationRef = useRef(duration);

    useEffect(() => {
        pausedRef.current = paused;
    }, [paused]);

    useEffect(() => {
        durationRef.current = duration;
    }, [duration]);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const wave = svg.querySelector<SVGLinearGradientElement>("#network-wave-gradient");
        const exchangeWave = svg.querySelector<SVGLinearGradientElement>("#network-exchange-gradient");
        const networkLight = svg.querySelector<SVGGElement>("#network-light");
        const logoLight = svg.querySelector<SVGGElement>("#network-logo-light");
        const outbound = svg.querySelector<SVGGElement>("#network-outbound");
        const inbound = svg.querySelector<SVGGElement>("#network-inbound");
        const confirmation = svg.querySelector<SVGGElement>("#network-customer-confirmation");
        const check = svg.querySelector<SVGPathElement>("#network-customer-check");
        const ring = svg.querySelector<SVGCircleElement>("#network-confirmation-ring");

        if (!wave || !exchangeWave || !networkLight || !logoLight || !outbound || !inbound || !confirmation || !check || !ring) {
            return;
        }

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const smooth = (value: number) => {
            const t = Math.max(0, Math.min(1, value));
            return t * t * (3 - 2 * t);
        };

        let elapsed = 0;
        let last = 0;
        let animationFrame = 0;

        const frame = (now: number) => {
            if (last && !pausedRef.current && !document.hidden && !reduceMotion.matches) {
                elapsed += Math.min(now - last, 80);
            }
            last = now;

            const phase = (elapsed % durationRef.current) / durationRef.current;
            const head = -80 + Math.min(1, phase / 0.59) * 1680;

            wave.setAttribute("x1", String(head - 750));
            wave.setAttribute("x2", String(head));
            networkLight.setAttribute("opacity", reduceMotion.matches ? "0" : String(0.96 * (1 - smooth((phase - 0.63) / 0.12))));
            logoLight.setAttribute(
                "opacity",
                reduceMotion.matches ? "0" : String(1.02 * smooth((head - 948) / 200) * (1 - smooth((phase - 0.74) / 0.15))),
            );

            const outgoing = smooth((phase - 0.48) / 0.08) * (1 - smooth((phase - 0.8) / 0.06));
            const incoming = smooth((phase - 0.8) / 0.04) * (1 - smooth((phase - 0.98) / 0.02));
            outbound.setAttribute("opacity", reduceMotion.matches ? "0" : String(outgoing * 0.96));
            inbound.setAttribute("opacity", reduceMotion.matches ? "0" : String(incoming * 0.78));

            const movingForward = phase < 0.8;
            const end = movingForward
                ? 980 + Math.max(0, (phase - 0.48) / 0.32) * 900
                : 1720 - Math.max(0, (phase - 0.8) / 0.2) * 900;
            exchangeWave.setAttribute("x1", String(movingForward ? end - 450 : end + 450));
            exchangeWave.setAttribute("x2", String(end));

            const arrived = smooth((phase - 0.71) / 0.035);
            const checkFade = 1 - smooth((phase - 0.94) / 0.05);
            confirmation.setAttribute("opacity", reduceMotion.matches ? "0" : String(arrived * checkFade));
            check.setAttribute("stroke-dashoffset", String(1 - arrived));
            const ringProgress = smooth((phase - 0.71) / 0.09);
            ring.setAttribute("r", String(28 + 14 * ringProgress));
            ring.setAttribute("opacity", String(arrived * (1 - ringProgress) * 0.8));

            animationFrame = window.requestAnimationFrame(frame);
        };

        animationFrame = window.requestAnimationFrame(frame);
        const resetClock = () => {
            last = 0;
        };
        document.addEventListener("visibilitychange", resetClock);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            document.removeEventListener("visibilitychange", resetClock);
        };
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#050909]" aria-hidden="true">
            <svg
                ref={svgRef}
                viewBox="0 0 1672 941"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="network-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="7" />
                    </filter>
                    <filter id="network-tight-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="2.3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="network-white-isolate" colorInterpolationFilters="sRGB">
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncR type="linear" slope="3" intercept="-2" />
                            <feFuncG type="linear" slope="3" intercept="-2" />
                            <feFuncB type="linear" slope="3" intercept="-2" />
                        </feComponentTransfer>
                    </filter>
                    <mask id="network-brand-mask" maskUnits="userSpaceOnUse" x="948" y="409" width="425" height="86" style={{ maskType: "luminance" }}>
                        <image href="/images/hero/network-reference.png" x="0" y="0" width="1672" height="941" filter="url(#network-white-isolate)" />
                    </mask>
                    <linearGradient id="network-wave-gradient" gradientUnits="userSpaceOnUse" x1="-750" x2="0">
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="0.25" stopColor="white" stopOpacity="0.02" />
                        <stop offset="0.6" stopColor="white" stopOpacity="0.3" />
                        <stop offset="0.86" stopColor="white" stopOpacity="0.85" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="network-rise-gradient" gradientUnits="userSpaceOnUse" x1="0" x2="950">
                        <stop stopColor="white" stopOpacity="0.12" />
                        <stop offset="0.5" stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient id="network-exchange-gradient" gradientUnits="userSpaceOnUse" x1="850" x2="1100">
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="0.35" stopColor="white" stopOpacity="0.1" />
                        <stop offset="0.8" stopColor="white" stopOpacity="0.9" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id="network-wave-mask"><rect width="1672" height="941" fill="url(#network-wave-gradient)" /></mask>
                    <mask id="network-intensity-mask"><rect width="1672" height="941" fill="url(#network-rise-gradient)" /></mask>
                    <mask id="network-exchange-mask"><rect width="1672" height="941" fill="url(#network-exchange-gradient)" /></mask>
                </defs>

                <image href="/images/hero/network-reference.png" x="0" y="0" width="1672" height="941" />

                <g id="network-light" mask="url(#network-wave-mask)">
                    <g mask="url(#network-intensity-mask)">
                        {NETWORK_PATHS.map((d) => <LightPath key={d} d={d} />)}
                    </g>
                </g>

                <g id="network-logo-light" opacity="0">
                    <g filter="url(#network-soft-glow)">
                        <rect x="948" y="409" width="425" height="86" fill="#ffd994" mask="url(#network-brand-mask)" />
                    </g>
                    <g filter="url(#network-tight-glow)">
                        <rect x="948" y="409" width="425" height="86" fill="#fff7dd" mask="url(#network-brand-mask)" />
                    </g>
                </g>

                <g id="network-exchange-light" mask="url(#network-exchange-mask)">
                    <g id="network-outbound" opacity="0"><LightPath d={EXCHANGE_PATHS[0]} exchange /></g>
                    <g id="network-inbound" opacity="0"><LightPath d={EXCHANGE_PATHS[1]} exchange /></g>
                </g>

                <g id="network-customer-confirmation" transform="translate(1552 505)" opacity="0">
                    <circle r="25" fill="#17150e" />
                    <circle r="27" fill="none" stroke="#f5cc79" strokeWidth="1.3" opacity="0.8" filter="url(#network-tight-glow)" />
                    <circle id="network-confirmation-ring" r="28" fill="none" stroke="#f8d997" strokeWidth="1.5" opacity="0" />
                    <path
                        id="network-customer-check"
                        d="M-17-1 L-5 11 L18-15"
                        pathLength="1"
                        strokeDasharray="1"
                        strokeDashoffset="1"
                        fill="none"
                        stroke="#fff0bc"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#network-tight-glow)"
                    />
                </g>
            </svg>

            {showControls && (
                <button
                    type="button"
                    aria-label={paused ? "ادامه حرکت" : "توقف حرکت"}
                    aria-pressed={paused}
                    onClick={() => setPaused((value) => !value)}
                    className="pointer-events-auto absolute bottom-4 left-4 z-10 grid h-8 w-8 place-items-center rounded-full border border-[#e6c582]/20 bg-[#0a0e0e]/80 text-[#c6b78f]/60 opacity-60 transition hover:opacity-100 focus-visible:opacity-100"
                >
                    {paused ? (
                        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true"><path fill="currentColor" d="M2 1 11 6 2 11Z" /></svg>
                    ) : (
                        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true"><path fill="currentColor" d="M2 1h3v10H2zM7 1h3v10H7z" /></svg>
                    )}
                </button>
            )}
        </div>
    );
}

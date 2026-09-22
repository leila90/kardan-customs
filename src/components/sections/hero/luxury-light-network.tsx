import styles from "./luxury-light-network.module.css";

const paths = [
    "M-240 118 C80 5 300 245 585 132 S1050 32 1320 160 S1650 268 1870 55",
    "M-280 278 C30 455 305 160 625 315 S1060 500 1345 295 S1670 132 1900 372",
    "M-260 472 C65 294 330 635 655 438 S1090 290 1390 508 S1680 668 1890 408",
    "M-300 682 C50 875 350 525 700 714 S1110 862 1430 648 S1710 515 1920 785",
    "M-210 842 C160 680 390 955 760 788 S1210 620 1510 830 S1760 942 1900 815",
    "M55 -190 C290 105 102 340 375 535 S660 768 470 1090",
    "M470 -210 C270 120 675 278 490 560 S320 820 690 1100",
    "M885 -220 C1110 95 742 340 960 575 S1160 845 850 1110",
    "M1285 -210 C1040 150 1485 325 1245 610 S1050 860 1450 1100",
    "M1630 -180 C1395 105 1740 365 1515 565 S1380 815 1735 1050",
] as const;

const nodes = [
    [3, 13, .42, "-1.2s", "5.8s"], [7, 35, .7, "-4.1s", "8.4s"], [10, 69, 1.15, "-2.5s", "7.2s"],
    [14, 22, .5, "-6.8s", "9.5s"], [17, 51, 1.55, "-3.7s", "10.2s"], [20, 84, .58, "-7.2s", "6.4s"],
    [24, 11, .86, "-1.9s", "8.8s"], [27, 39, .38, "-5.6s", "7.6s"], [29, 72, 1.28, "-3.1s", "9.8s"],
    [33, 27, .62, "-8.4s", "11s"], [36, 59, .46, "-.8s", "6.9s"], [39, 91, 1.05, "-4.9s", "8.2s"],
    [42, 15, 1.38, "-6.2s", "10.8s"], [45, 44, .52, "-2.2s", "7.4s"], [48, 77, .78, "-7.8s", "9.2s"],
    [51, 30, .34, "-3.5s", "6.2s"], [54, 63, 1.65, "-9.1s", "11.5s"], [57, 8, .55, "-1.5s", "8.6s"],
    [60, 47, .9, "-5.3s", "7.8s"], [63, 86, .44, "-2.8s", "10.4s"], [66, 19, 1.2, "-6.6s", "9s"],
    [69, 54, .6, "-4.4s", "6.7s"], [72, 73, 1.48, "-8.2s", "10.7s"], [75, 5, .36, "-1.1s", "7.1s"],
    [78, 34, .72, "-5.9s", "9.7s"], [81, 62, .48, "-3.3s", "8.1s"], [84, 89, 1.1, "-7.4s", "11.2s"],
    [87, 17, .54, "-2s", "6.5s"], [90, 43, 1.42, "-8.7s", "10s"], [93, 68, .4, "-4.7s", "7.7s"],
    [96, 26, .82, "-6.1s", "9.3s"], [98, 81, 1.32, "-2.9s", "10.5s"], [5, 93, .48, "-5.1s", "8.9s"],
    [12, 58, .32, "-7.7s", "6.1s"], [22, 95, .92, "-3.8s", "9.9s"], [35, 6, .46, "-6.9s", "7.3s"],
    [47, 96, .62, "-1.7s", "8.3s"], [59, 22, .4, "-4.3s", "6.8s"], [71, 96, .74, "-8.1s", "10.3s"],
    [83, 51, .35, "-2.6s", "7.9s"], [94, 7, .64, "-5.7s", "9.1s"],
] as const;

export default function LuxuryLightNetwork() {
    return (
        <div className={styles.background} aria-hidden="true">
            <div className={styles.ambientGlow} />
            <svg className={styles.network} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" focusable="false">
                <defs>
                    <linearGradient id="kardan-gold-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1600" y2="900">
                        <stop offset="0" stopColor="#9b681e" stopOpacity="0" />
                        <stop offset="0.26" stopColor="#c9953f" stopOpacity="0.2" />
                        <stop offset="0.5" stopColor="#ffe2a0" stopOpacity="0.96" />
                        <stop offset="0.72" stopColor="#d5a44b" stopOpacity="0.34" />
                        <stop offset="1" stopColor="#9b681e" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="kardan-gold-dot">
                        <stop offset="0" stopColor="#fff6d8" />
                        <stop offset="0.35" stopColor="#f5ca72" />
                        <stop offset="1" stopColor="#b77720" stopOpacity="0" />
                    </radialGradient>
                    <filter id="kardan-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="3.2" />
                    </filter>
                </defs>

                <g className={styles.travelingLines}>
                    {paths.map((path, index) => (
                        <path
                            key={`light-${path}`}
                            d={path}
                            pathLength="1240"
                            strokeWidth={index % 4 === 0 ? 0.72 : index % 3 === 0 ? 0.46 : 0.58}
                            style={{
                                animationDelay: `${index * -2.35}s`,
                                animationDuration: `${18 + (index % 5) * 2.7}s`,
                            }}
                        />
                    ))}
                </g>
                <g className={styles.glowParticles}>
                    {nodes.map(([x, y, radius, delay, duration], index) => (
                        <g key={`${x}-${y}`} className={styles.particle} style={{ animationDelay: delay, animationDuration: duration }}>
                            <circle cx={`${x}%`} cy={`${y}%`} r={radius * 6} fill="url(#kardan-gold-dot)" filter="url(#kardan-soft-glow)" opacity="0.35" />
                            <circle cx={`${x}%`} cy={`${y}%`} r={radius} fill="#f7d487" opacity={index % 3 === 0 ? 0.9 : 0.62} />
                        </g>
                    ))}
                </g>
            </svg>
            <div className={styles.vignette} />
            <div className={styles.bottomFade} />
        </div>
    );
}

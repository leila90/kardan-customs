'use client'
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import HeroStats from "@/components/sections/hero/hero-stats";
import {getTranslations} from "next-intl/server";
import HeroContent from "@/components/sections/hero/hero-content";
import HeroMedia from "@/components/sections/hero/hero-media";
import HeroFooter from "@/components/sections/footer/hero-footer";
import RoadmapHero from "@/components/sections/hero/road-map-hero";
import Image from "next/image";

export default function Hero() {

    // const t = await getTranslations('Hero');
    return (
        <section className="flex min-h-screen flex-col items-center gap-10 lg:flex-row bg-[var(--color-primary)]">
            <div className="stage">
                <Image className="base" src={"/images/hero/hero.png"} alt={"hero"} width={1000} height={100}></Image>
                <div className="shade"></div>
                <svg style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                    pointerEvents: "none"
                }} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#6d521f" stopOpacity="0"/>
                            <stop offset=".22" stopColor="#C8922D" stopOpacity=".62"/>
                            <stop offset=".55" stopColor="#F7F3EA" stopOpacity=".95"/>
                            <stop offset=".82" stopColor="#E8BC62" stopOpacity=".82"/>
                            <stop offset="1" stopColor="#C8922D" stopOpacity="0"/>
                        </linearGradient>
                        <filter id="heroGlow" x="-40%" y="-80%" width="180%" height="260%">
                            <feGaussianBlur stdDeviation="5" result="b"/>
                            <feColorMatrix in="b" type="matrix"
                                           values="1 0 0 0 0.9  0 1 0 0 0.55  0 0 1 0 0.12  0 0 0 .8 0"/>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <filter id="softGlow" x="-30%" y="-60%" width="160%" height="220%">
                            <feGaussianBlur stdDeviation="3" result="b"/>
                            <feMerge>
                                <feMergeNode in="b"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <filter id="tinyGlow" x="-250%" y="-250%" width="600%" height="600%">
                            <feGaussianBlur stdDeviation="3" result="b"/>
                            <feMerge>
                                <feMergeNode in="b"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <filter id="orbGlow" x="-400%" y="-400%" width="900%" height="900%">
                            <feGaussianBlur stdDeviation="8" result="b"/>
                            <feMerge>
                                <feMergeNode in="b"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>

                        <path id="mainMotion"
                              d="M 110 520 C 205 470, 275 570, 355 520 C 460 455, 535 605, 625 530 C 735 435, 790 455, 870 500 C 970 556, 1040 384, 1138 452 C 1210 502, 1246 470, 1288 452"/>
                    </defs>

                    <path className="soft-path"
                          d="M80,300 C270,230 390,330 530,305 C660,285 745,214 930,288 C1045,334 1120,390 1260,360"/>
                    <path className="soft-path white"
                          d="M60,420 C230,450 330,380 470,420 C650,470 760,370 920,430 C1050,480 1130,430 1255,455"/>
                    <path className="soft-path olive"
                          d="M70,610 C230,560 340,670 500,590 C650,510 725,620 870,555 C1040,475 1125,570 1260,520"/>
                    <path className="soft-path"
                          d="M120,250 C300,310 360,250 530,360 C705,470 810,320 1005,405 C1100,450 1180,420 1300,430"/>
                    <path className="soft-path white"
                          d="M100,690 C270,650 350,590 520,640 C720,700 820,540 1010,585 C1150,625 1210,560 1330,595"/>
                    <path className="soft-path"
                          d="M120,510 C280,500 395,470 520,520 C685,590 790,500 900,510 C1048,520 1130,490 1260,480"/>
                    <path className="soft-path olive"
                          d="M220,335 C360,360 455,315 610,388 C740,450 785,505 932,472 C1080,438 1168,500 1300,462"/>
                    <path className="soft-path"
                          d="M180,735 C350,700 460,760 620,690 C785,620 840,680 1020,630 C1134,598 1210,590 1350,660"/>
                    <path className="soft-path white"
                          d="M40,540 C205,570 310,530 438,554 C585,582 690,520 790,565 C895,612 1040,510 1260,545"/>
                    <path className="soft-path"
                          d="M70,370 C210,320 345,410 510,365 C690,315 810,405 1000,380 C1140,362 1200,394 1320,390"/>

                    <path className="memory"
                          d="M 110 520 C 205 470, 275 570, 355 520 C 460 455, 535 605, 625 530 C 735 435, 790 455, 870 500 C 970 556, 1040 384, 1138 452 C 1210 502, 1246 470, 1288 452"/>
                    <path className="hero-core"
                          d="M 110 520 C 205 470, 275 570, 355 520 C 460 455, 535 605, 625 530 C 735 435, 790 455, 870 500 C 970 556, 1040 384, 1138 452 C 1210 502, 1246 470, 1288 452"/>

                    <g className="plane-field">
                        <ellipse cx="1045" cy="470" rx="34" ry="190" fill="rgba(232,188,98,.04)"
                                 stroke="rgba(232,188,98,.22)" strokeWidth="1"/>
                        <ellipse cx="1045" cy="470" rx="18" ry="145" fill="none" stroke="rgba(247,243,234,.18)"
                                 strokeWidth="1" strokeDasharray="2 13"/>
                        <line x1="1045" y1="245" x2="1045" y2="700" stroke="rgba(247,243,234,.18)" strokeWidth="1"/>
                    </g>

                    <g className="cluster c1" transform="translate(180 410)">
                        <circle r="26" fill="none" stroke="rgba(232,188,98,.55)" strokeWidth="1" strokeDasharray="2 6"/>
                        <circle r="5" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <text x="38" y="-4">تأمین‌کننده</text>
                        <text className="sub" x="38" y="24">اعتبار · قیمت · کیفیت</text>
                    </g>
                    <g className="cluster c2" transform="translate(435 350)">
                        <circle r="25" fill="none" stroke="rgba(232,188,98,.55)" strokeWidth="1" strokeDasharray="2 6"/>
                        <circle r="5" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <text x="38" y="-4">ثبت سفارش</text>
                        <text className="sub" x="38" y="24">سهمیه · تعرفه · مجوزها</text>
                    </g>
                    <g className="cluster c3" transform="translate(710 308)">
                        <circle r="28" fill="none" stroke="rgba(232,188,98,.55)" strokeWidth="1" strokeDasharray="2 6"/>
                        <circle r="5" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <text x="38" y="-4">گمرک و ترخیص</text>
                        <text className="sub" x="38" y="24">تعرفه · ارزش · مجوز</text>
                    </g>
                    <g className="cluster c4" transform="translate(325 650)">
                        <circle r="25" fill="none" stroke="rgba(232,188,98,.55)" strokeWidth="1" strokeDasharray="2 6"/>
                        <circle r="5" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <text x="38" y="-4">بانک و پرداخت</text>
                        <text className="sub" x="38" y="24">تخصیص · تعهدات · انتقال</text>
                    </g>
                    <g className="cluster c5" transform="translate(570 660)">
                        <circle r="25" fill="none" stroke="rgba(232,188,98,.55)" strokeWidth="1" strokeDasharray="2 6"/>
                        <circle r="5" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <text x="38" y="-4">حمل و لجستیک</text>
                        <text className="sub" x="38" y="24">مسیر · هزینه · زمان</text>
                    </g>
                    <g className="cluster c6" transform="translate(860 640)">
                        <circle r="25" fill="none" stroke="rgba(232,188,98,.55)" strokeWidth="1" strokeDasharray="2 6"/>
                        <circle r="5" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <text x="38" y="-4">ریسک و انطباق</text>
                        <text className="sub" x="38" y="24">قوانین · تحریم · استاندارد</text>
                    </g>

                    <g className="hero-orb">
                        <circle className="orb-aura" r="19">
                            <animateMotion dur="16s" repeatCount="indefinite"
                                           keyTimes="0; .05; .22; .34; .47; .58; .67; .80; 1"
                                           keyPoints="0;0; .17;.17; .34;.34; .50;.50; .68;.68; .83;.83; 1;1"
                                           calcMode="linear" rotate="auto">
                                <mpath href="#mainMotion"/>
                            </animateMotion>
                        </circle>
                        <circle className="orb-body" r="5.5">
                            <animateMotion dur="16s" repeatCount="indefinite"
                                           keyTimes="0; .05; .22; .34; .47; .58; .67; .80; 1"
                                           keyPoints="0;0; .17;.17; .34;.34; .50;.50; .68;.68; .83;.83; 1;1"
                                           calcMode="linear" rotate="auto">
                                <mpath href="#mainMotion"/>
                            </animateMotion>
                        </circle>
                    </g>

                    <g className="k-birth" transform="translate(1155 470)">
                        <circle r="92" fill="none" stroke="rgba(232,188,98,.10)" strokeWidth="1"/>
                        <circle r="62" fill="none" stroke="rgba(232,188,98,.16)" strokeWidth="1"
                                strokeDasharray="3 12"/>
                        <text x="0" y="42" textAnchor="middle" fontSize="132" fontWeight="900" fill="none"
                              stroke="#F7F3EA" strokeWidth="2.2" filter="url(#heroGlow)"
                              style={{fontFamily: "Arial sans-serif"}}>
                        </text>
                    </g>

                    <g className="outcome-pulse o1" transform="translate(1368 290)">
                        <circle r="6" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <path d="M0,0 C-90,10 -135,90 -185,155" fill="none" stroke="rgba(232,188,98,.45)"
                              strokeWidth="1.4"/>
                    </g>
                    <g className="outcome-pulse o2" transform="translate(1370 390)">
                        <circle r="6" fill="#E8BC62" filter="url(#tinyGlow)"/>
                        <path d="M0,0 C-90,-4 -120,34 -190,70" fill="none" stroke="rgba(232,188,98,.45)"
                              strokeWidth="1.4"/>
                    </g>
                    <g className="outcome-pulse o3" transform="translate(1368 505)">
                        <circle r="6" fill="#F7F3EA" filter="url(#tinyGlow)"/>
                        <path d="M0,0 C-80,-18 -130,-28 -188,-35" fill="none" stroke="rgba(232,188,98,.45)"
                              strokeWidth="1.4"/>
                    </g>
                    <g className="outcome-pulse o4" transform="translate(1366 620)">
                        <circle r="6" fill="#E8BC62" filter="url(#tinyGlow)"/>
                        <path d="M0,0 C-86,-25 -130,-80 -190,-110" fill="none" stroke="rgba(232,188,98,.45)"
                              strokeWidth="1.4"/>
                    </g>
                    <g className="outcome-pulse o5" transform="translate(1358 725)">
                        <circle r="6" fill="#E8BC62" filter="url(#tinyGlow)"/>
                        <path d="M0,0 C-90,-50 -130,-125 -205,-190" fill="none" stroke="rgba(232,188,98,.45)"
                              strokeWidth="1.4"/>
                    </g>

                    <circle className="particle p2" cx="260" cy="290" r="2"/>
                    <circle className="particle p3" cx="515" cy="405" r="2.3"/>
                    <circle className="particle p4" cx="735" cy="500" r="2"/>
                    <circle className="particle p5" cx="885" cy="390" r="2.2"/>
                    <circle className="particle p6" cx="980" cy="555" r="2"/>
                    <circle className="particle p7" cx="1110" cy="445" r="2.5"/>
                </svg>
            </div>
        </section>
);
}
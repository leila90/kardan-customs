import type { RiverNode } from "./types";

/**
 * Center of the "decision river" — the Kardan node itself. Deliberately
 * placed on the left side of the viewBox (not centered in the full hero)
 * so the whole visualization stays inside the left ~55% of the section,
 * leaving the right ~45% clear for the title/CTA text, per the reference
 * layout sketch.
 */
export const kardanCenter = { x: 27, y: 50 };

/**
 * The ten entities that feed into a customs-clearance decision, arranged
 * radially around the Kardan center. Tiers map directly to the reference
 * sketch's line-style legend:
 *  - "active"    -> solid, bright, animated flowing current (لیست سفارش, گمرک)
 *  - "secondary" -> faint dashed line (most nodes)
 *  - "ghost"     -> barely-visible dotted, near-invisible (قرارداد)
 */
export const riverNodes: RiverNode[] = [
    { id: "customer", label: "مشتری", x: 8, y: 17, tier: "secondary" },
    { id: "supplier", label: "تأمین‌کننده", x: 23, y: 12, tier: "secondary" },
    { id: "contract", label: "قرارداد", x: 39, y: 15, tier: "ghost" },
    { id: "bank", label: "بانک", x: 7, y: 38, tier: "secondary" },
    {
        id: "order-list",
        label: "لیست سفارش",
        x: 45,
        y: 37,
        tier: "active",
    },
    { id: "risks", label: "ریسک‌ها", x: 6, y: 63, tier: "secondary" },
    {
        id: "customs",
        label: "گمرک",
        x: 46,
        y: 68,
        tier: "active",
        subs: ["تعرفه", "ارزش", "مجوز"],
    },
    { id: "costs", label: "هزینه‌ها", x: 19, y: 78, tier: "secondary" },
    { id: "insurance", label: "بیمه", x: 32, y: 85, tier: "secondary" },
    { id: "logistics", label: "حمل و لجستیک", x: 9, y: 88, tier: "secondary" },
];

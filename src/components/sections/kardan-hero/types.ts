export type RiverNodeTier = "active" | "secondary" | "ghost";

export type RiverNode = {
    id: string;
    label: string;
    x: number;
    y: number;
    tier: RiverNodeTier;
    /** Sub-branch labels fanning out from this node (only the active "گمرک" cluster has these per the reference). */
    subs?: string[];
};

export type RiverSource = {
    id: string;
    label: string;
    x: number;
    y: number;
    to: string;
    weight?: number;
};

export type RiverHub = {
    id: string;
    label: string;
    x: number;
    y: number;
    level: 1 | 2;
    subs: string[];
};
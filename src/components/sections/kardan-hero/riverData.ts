import type { RiverHub, RiverSource } from "./types";

export const hubs: RiverHub[] = [
    { id: "customs", label: "گمرک", x: 52, y: 45, level: 2, subs: ["تعرفه", "ارزش", "مجوز"] },
    { id: "order", label: "ثبت سفارش", x: 35, y: 30, level: 2, subs: ["سهمیه", "شناسه", "مجوز"] },
    { id: "bank", label: "بانک", x: 34, y: 64, level: 2, subs: ["تخصیص", "تعهد", "پرداخت"] },
    { id: "risk", label: "ریسک", x: 58, y: 70, level: 2, subs: ["تأخیر", "رد", "هزینه"] },
    { id: "docs", label: "اسناد", x: 45, y: 58, level: 1, subs: ["صحت", "تطبیق", "کنترل"] },
    { id: "standard", label: "استاندارد", x: 42, y: 18, level: 1, subs: ["کنترل", "کد", "الزام"] },
    { id: "logistics", label: "حمل", x: 62, y: 30, level: 1, subs: ["زمان", "مسیر", "پایش"] },
    { id: "insurance", label: "بیمه", x: 66, y: 58, level: 1, subs: ["ریسک", "هزینه", "پوشش"] },
    { id: "market", label: "مقررات", x: 24, y: 48, level: 1, subs: ["بخشنامه", "محدودیت", "تغییر"] },
];

export const sources: RiverSource[] = [
    { id: "tariff", label: "تعرفه", x: 10, y: 18, to: "order" },
    { id: "quota", label: "سهمیه", x: 16, y: 28, to: "order" },
    { id: "permit", label: "مجوز", x: 8, y: 40, to: "market" },
    { id: "value", label: "ارزش", x: 14, y: 58, to: "bank" },
    { id: "origin", label: "منشأ ارز", x: 11, y: 75, to: "bank" },
    { id: "standard-code", label: "استاندارد", x: 28, y: 10, to: "standard" },
    { id: "inspection", label: "بازرسی", x: 30, y: 78, to: "risk" },
    { id: "incoterms", label: "اینکوترمز", x: 20, y: 68, to: "docs" },
    { id: "demurrage", label: "دموراژ", x: 70, y: 78, to: "insurance" },
    { id: "route", label: "مسیر حمل", x: 73, y: 18, to: "logistics" },
    { id: "shipment", label: "حمل", x: 82, y: 35, to: "logistics" },
    { id: "cost", label: "هزینه", x: 80, y: 63, to: "insurance" },
];
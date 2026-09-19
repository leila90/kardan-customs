import {
  Search,
  ShieldAlert,
  Target,
  Route,
  TriangleAlert,
  CheckCircle2,
  PackagePlus,
  PackageOpen,
  ClipboardCheck,
  Rocket,
  Briefcase,
  History,
  ShieldCheck,
  BookOpen,
  Users,
  FileSignature,
  FileCheck2,
  CalendarClock,
  MessagesSquare,
  SearchCheck,
  Handshake,
  Newspaper,
  Phone,
  Mail,
  MessageCircle,
  Layers,
  type LucideIcon,
} from "lucide-react";
// import type { IconKey } from "@/types";
import type { IconKey } from "@/types"

export const iconMap: Record<IconKey, LucideIcon> = {
  search: Search,
  risk: ShieldAlert,
  target: Target,
  route: Route,
  warning: TriangleAlert,
  check: CheckCircle2,
  importGoods: PackagePlus,
  exportGoods: PackageOpen,
  clearance: ClipboardCheck,
  execution: Rocket,
  experienceProjects: Briefcase,
  experienceYears: History,
  license: ShieldCheck,
  lesson: BookOpen,
  supplier: Users,
  contract: FileSignature,
  permit: FileCheck2,
  timing: CalendarClock,
  conversation: MessagesSquare,
  analyze: SearchCheck,
  handshake: Handshake,
  article: Newspaper,
  phone: Phone,
  mail: Mail,
  whatsapp: MessageCircle,
  domainCase: Layers,
};

export function Icon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = iconMap[name];
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

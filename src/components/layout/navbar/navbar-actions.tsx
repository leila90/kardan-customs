import Button from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageSwitcher from "@/components/ui/language-switcher";

interface Props {
    cta: Record<string, string>;
}

export default function NavbarActions({
                                          cta,
                                      }: Props) {
    return (
        <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {/*<ThemeToggle />*/}

            {/* CTA */}
          {/*  <a*/}
          {/*      href="#"*/}
          {/*      className={`*/}
          {/*      hidden md:inline-flex items-center gap-1.5*/}
          {/*      px-4 py-2 rounded-xl text-[13px] font-semibold tracking-widest uppercase*/}
          {/*      transition-all duration-300 hover:-translate-y-px bg-gradient-to-r from-[#7a5010] via-[#9a6e28] to-[#7a5010]*/}
          {/*hover:from-[#8a600e] hover:via-[#b07e30] hover:to-[#8a600e]*/}
          {/*text-[#faf7f0] shadow-[0_4px_18px_rgba(100,70,10,0.28)]*/}
          {/*hover:shadow-[0_4px_28px_rgba(100,70,10,0.42)]*/}
          {/*    `}*/}
          {/*  >*/}
          {/*      {cta['cta']}*/}
          {/*  </a>*/}
            <Button className="w-full">
                {cta['cta']}
            </Button>
        </div>
    );
}
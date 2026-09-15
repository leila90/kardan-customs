import Container from "@/components/ui/container";

import NavbarLogo from "./navbar-logo";
import NavbarLinks from "./navbar-links";
import NavbarActions from "./navbar-actions";
import MobileMenu from "@/components/layout/navbar/mobile-menu";
import NavbarShell from "@/components/layout/navbar/navbar-shell";

interface Props {
    labels: Record<string, string>;
    cta: Record<string, string>;
}

export default function Navbar({
                                   labels,
                                   cta,
                               }: Props) {
    return (
        <NavbarShell>
            <Container>
                <div
                    className="flex
            items-center
            justify-between
            h-20">
                    <NavbarLogo />
                    <div className="hidden lg:block">
                        <NavbarLinks labels={labels} />
                    </div>
                    <div className="hidden lg:block">
                        <NavbarActions cta={cta} />
                    </div>
                    <div className="lg:hidden">
                        <MobileMenu
                            labels={labels}
                            cta={cta}
                        />
                    </div>
                </div>
            </Container>
        </NavbarShell>
    );
}
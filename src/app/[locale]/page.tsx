
import ContactUs from "@/components/sections/contact/contact-us";
import HeroFooter from "@/components/sections/footer/hero-footer";
import Features from "@/components/sections/features/features";
import WhyUs from "@/components/sections/why-us/why-us";
import KardanHero from "@/components/sections/kardan-hero/KardanHero";

export default function Home() {
    return (
        <>
            <KardanHero></KardanHero>
            <HeroFooter/>
            <Features/>
            <WhyUs/>
            <ContactUs/>
        </>
    );
}

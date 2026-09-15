
import ContactUs from "@/components/sections/contact/contact-us";
import HeroFooter from "@/components/sections/footer/hero-footer";
import Features from "@/components/sections/features/features";
import WhyUs from "@/components/sections/why-us/why-us";
import KardanHero from "@/components/sections/kardan-hero/kardan-hero";
import Hero from "@/components/sections/hero/hero";
import Card from "@/components/ui/cards/card";

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <HeroFooter/>
            <Features/>
            <WhyUs/>
            <ContactUs/>
        </>
    );
}

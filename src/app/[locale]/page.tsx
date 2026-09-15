import ContactUs from "@/components/sections/contact/contact-us";
import HeroFooter from "@/components/sections/footer/hero-footer";
import PreActionConversation from "@/components/sections/pre-action-conversation/pre-action-conversation";
import WhyUs from "@/components/sections/why-us/why-us";
import Hero from "@/components/sections/hero/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <HeroFooter />
            <PreActionConversation />
            <WhyUs />
            <ContactUs />
        </>
    );
}

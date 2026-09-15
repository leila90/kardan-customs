import ContactUs from "@/components/sections/contact/contact-us";
import HeroFooter from "@/components/sections/footer/hero-footer";
import ExperienceDomains from "@/components/sections/experience-domains/experience-domains";
import KnowledgePreview from "@/components/sections/knowledge-preview/knowledge-preview";
import PreActionConversation from "@/components/sections/pre-action-conversation/pre-action-conversation";
import RouteCta from "@/components/sections/route-cta/route-cta";
import WhyUs from "@/components/sections/why-us/why-us";
import Hero from "@/components/sections/hero/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <HeroFooter />
            <PreActionConversation />
            <WhyUs />
            <ExperienceDomains />
            <KnowledgePreview />
            <RouteCta />
            <ContactUs />
        </>
    );
}

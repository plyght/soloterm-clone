import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Integrations from "./components/Integrations";
import Workflow from "./components/Workflow";
import Features from "./components/Features";
import QualityOfLife from "./components/QualityOfLife";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import SiteFooter from "./components/SiteFooter";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Integrations />
        <Workflow />
        <Features />
        <QualityOfLife />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustedBy } from "./components/TrustedBy";
import { WhyNavyya } from "./components/WhyNavvya";
import { KeyFeatures } from "./components/KeyFeatures";
import { HowItWorks } from "./components/HowItWorks";
import { WhoCanUse } from "./components/WhoCanUse";
import { WhatSetsApart } from "./components/WhatSetsApart";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <TrustedBy />
      <WhyNavyya />
      <KeyFeatures />
      <HowItWorks />
      <WhoCanUse />
      <WhatSetsApart />
      <FinalCTA />
      <Footer />
    </div>
  );
}

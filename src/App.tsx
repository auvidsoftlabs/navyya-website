import { useState } from "react";
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
import { RequestAccessForm } from "./components/RequestAccessForm";
import { PromoVideoDialog } from "./components/PromoVideoDialog";

export default function App() {
  const [isRequestAccessOpen, setIsRequestAccessOpen] = useState(false);
  const [isPromoVideoOpen, setIsPromoVideoOpen] = useState(false);
  const [shouldAutoplayPromo, setShouldAutoplayPromo] = useState(false);

  const handleOpenRequestAccess = () => {
    setIsRequestAccessOpen(true);
  };
  const handleRequestAccessChange = (open: boolean) => {
    setIsRequestAccessOpen(open);
  };

  const handleOpenPromoVideo = () => {
    setShouldAutoplayPromo(true);
    setIsPromoVideoOpen(true);
  };
  const handlePromoVideoChange = (open: boolean) => {
    setIsPromoVideoOpen(open);
    if (!open) {
      setShouldAutoplayPromo(false);
    }
  };

  return (
    <div className="w-full">
      <Header onRequestAccess={handleOpenRequestAccess} />
      <HeroSection
        onRequestAccess={handleOpenRequestAccess}
        onSeeHowItWorks={handleOpenPromoVideo}
      />
      <TrustedBy />
      <WhyNavyya />
      <KeyFeatures />
      <HowItWorks />
      <WhoCanUse />
      <WhatSetsApart />
      <FinalCTA
        onRequestAccess={handleOpenRequestAccess}
        onSeeHowItWorks={handleOpenPromoVideo}
      />
      <Footer />
      <RequestAccessForm
        open={isRequestAccessOpen}
        onOpenChange={handleRequestAccessChange}
      />
      <PromoVideoDialog
        open={isPromoVideoOpen}
        onOpenChange={handlePromoVideoChange}
        shouldAutoplay={shouldAutoplayPromo}
      />
    </div>
  );
}

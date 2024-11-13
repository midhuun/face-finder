import React from "react";

import UploadImageSection from "./components/Upload";
import PricingSection from "./components/Pricing";
import AboutUsPage from "./components/About";
import Home from "./components/Home";
import FadeInSection from "./components/Fade";

const Page = () => {
  return (
    <>
     <FadeInSection>
        <Home />
      </FadeInSection>
      <hr />
      <FadeInSection>
        <UploadImageSection />
      </FadeInSection>
      <hr />
      <FadeInSection>
        <PricingSection />
      </FadeInSection>
      <hr />
      <FadeInSection>
        <AboutUsPage />
      </FadeInSection>
    </>
  );
};

export default Page;




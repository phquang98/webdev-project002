// TODO: replace this with anothe ytb exercise lol
import { useState } from "react";

import { HomePageDataOne } from "../Home";
import HeroSection from "../../components/HeroSection";
import PricingSection from "../../components/PricingSection";

const ServicesPage = (): JSX.Element => {
  return (
    <>
      <PricingSection />
      <HeroSection {...HomePageDataOne} />
    </>
  );
};

export default ServicesPage;

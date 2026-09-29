import React from "react";
import HomeHero from "./HomeHero";
import ClientPartner from "./ClientPartner";
import CoursesSection from "./CoursesSection";
import CategoriesSection from "./CategoriesSection";
import FeaturesSection from "./FeaturesSection";
import CtaSection from "./CtaSection";
import TestimonialsSection from "./TestimonialsSection";

const HomePageContents = () => {
  return (
    <div>
      <HomeHero />
      <ClientPartner />
      <CoursesSection />
      <CategoriesSection />
      <FeaturesSection />
      <CtaSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePageContents;

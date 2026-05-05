"use client";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { Problem, Solution } from "@/components/home/ProblemSolution";
import { ChoosePath } from "@/components/home/ChoosePath";
import { WhyTrust } from "@/components/home/WhyTrust";
import { Products } from "@/components/home/Products";
import { AliSection } from "@/components/home/AliSection";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => (
  <SiteLayout>
    <h1 className="sr-only">Dream Beyond — Technology leadership for the AI era</h1>
    <Hero />
    <Problem />
    <Solution />
    <ChoosePath />
    <WhyTrust />
    <Products />
    <AliSection />
    <FinalCTA />
  </SiteLayout>
);

export default Index;

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { IndustrySelector } from '@/components/sections/IndustrySelector';
import { IndustryMarketplace } from '@/components/IndustryMarketplace';
import { ProductModules } from '@/components/sections/ProductModules';
import { ProductUIShowcase } from '@/components/sections/ProductUIShowcase';
import { Workflow } from '@/components/sections/Workflow';
import { Hardware } from '@/components/sections/Hardware';
import { Integrations } from '@/components/sections/Integrations';
import { Analytics } from '@/components/sections/Analytics';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      {/* <IndustrySelector /> */}
      <IndustryMarketplace />
      <ProductModules />
      <ProductUIShowcase />
      <Workflow />
      <Integrations />
      <Analytics />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
    </>
  );
}

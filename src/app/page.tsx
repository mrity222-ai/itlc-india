
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesPreview } from '@/components/sections/services-preview';
import { ItlcDeveloperSection } from '@/components/sections/itlc-developer-section';
import { OurWorkSection } from '@/components/sections/our-work-section';
import { Testimonials } from '@/components/sections/testimonials';
import { CtaBanner } from '@/components/sections/cta-banner';
import { OurClients } from '@/components/sections/our-clients';
import { IndustriesSection } from '@/components/sections/industries-section';
import { TechnologyStack } from '@/components/sections/technology-stack';
import { InsightsSection } from '@/components/sections/insights-section';
import { ScrollAnimation } from '@/components/scroll-animation';
import { AboutUsSection } from '@/components/sections/about-us-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ScrollAnimation>
        <AboutUsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <TechnologyStack />
      </ScrollAnimation>
      <ScrollAnimation>
        <ServicesPreview />
      </ScrollAnimation>
      <ScrollAnimation>
        <ItlcDeveloperSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <IndustriesSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <OurWorkSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <OurClients />
      </ScrollAnimation>
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation>
        <InsightsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <CtaBanner />
      </ScrollAnimation>
    </div>
  );
}


"use client";

import { PARTNERS } from '@/lib/constants';
import Image from 'next/image';
import { ScrollAnimation } from '../scroll-animation';


export function OurPartnersSection() {

  return (
    <ScrollAnimation direction="up">
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-glow">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We partner with ambitious brands and enterprises to create transformative digital solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
            {PARTNERS.map((partner, index) => (
              <div
                key={partner.name}
                className="partner-logo"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

    

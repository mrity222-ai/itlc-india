
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { INDUSTRIES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRef, useEffect, FC } from 'react';

interface IndustryCardProps {
  industry: typeof INDUSTRIES[0];
}

const IndustryCard: FC<IndustryCardProps> = ({ industry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const image = PlaceHolderImages.find((p) => p.id === industry.imageId);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const rotateX = (y / rect.height - 0.5) * -15; // Invert for natural feel
      const rotateY = (x / rect.width - 0.5) * 15;

      container.style.setProperty('--x', `${x}px`);
      container.style.setProperty('--y', `${y}px`);
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);


    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex-shrink-0 mx-4 w-80 futuristic-card-container">
      <Card ref={cardRef} className="glass-card overflow-hidden group transition-all duration-300 flex flex-col h-full w-full">
        <CardHeader>
          {image && (
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}
          <CardTitle className="font-headline text-xl text-primary">{industry.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{industry.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};


export function IndustriesSection() {
  const extendedIndustries = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-shadow-cyber text-foreground" style={{ textShadow: '0 1px 1px #444444' }}>
            Create, Connect, Grow
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We empower companies with ultimate IT &amp; cloud solutions that help achieve measurable success across industries.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll group-hover:pause">
            {extendedIndustries.map((industry, index) => (
               <IndustryCard key={`${industry.title}-${index}`} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

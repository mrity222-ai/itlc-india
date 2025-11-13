
"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { Particles } from '@/components/particles';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortfolioPage() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  return (
    <div className="relative overflow-hidden">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-shadow-cyber">Our Work</h1>
            <p className="mt-4 text-xl font-bold text-primary">
                Powering Progress Through Technology
            </p>
          </div>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              At ITLC India Pvt. Ltd., our portfolio reflects how we transform complex business challenges into intelligent, future-ready digital solutions. With innovation, precision, and a user-first approach, we deliver measurable growth and lasting impact.
          </p>
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <Card key={project.name} className="glass-card overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
              <CardHeader className="relative p-0">
                {ctaImage && (
                  <Image
                    src={ctaImage.imageUrl}
                    alt="Header background"
                    fill
                    className="object-cover"
                    data-ai-hint={ctaImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-transparent"></div>
                <div className="relative p-6">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                      {project.categories.map(category => (
                          <Badge key={category} variant="secondary">{category}</Badge>
                      ))}
                  </div>
                  <CardTitle className="font-headline text-2xl pt-2 text-primary text-center">{project.name}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}




"use client";

import { Card, CardContent } from '@/components/ui/card';
import { SERVICES, SERVICE_ICONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ServiceCard } from '@/components/service-card';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Particles } from '@/components/particles';

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
        <Particles className="absolute inset-0 -z-10" quantity={100} />
        <div className="container py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-fade-in-up">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-shadow-cyber">
                Our Services
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                A comprehensive suite of technology solutions designed to drive growth and efficiency.
                </p>
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <ScrollAnimation
                key={service.title}
                className="w-full h-full"
                style={{ animationDelay: `${index * 150}ms` }}
                >
                <ServiceCard service={service} />
                </ScrollAnimation>
            ))}
          </div>

        <div className="mt-24 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Ready to Start Your Project?</h2>
             <p className="mt-4 text-lg text-muted-foreground">
                Let's discuss how we can transform your ideas into intelligent, automated solutions.
             </p>
             <div className="mt-8">
                <Button size="lg" asChild className="group glowing-btn">
                    <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
             </div>
        </div>
      </div>
    </div>
  );
}

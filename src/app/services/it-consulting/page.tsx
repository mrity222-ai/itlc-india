"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Star, Users, LifeBuoy, BookCopy, Layers, CloudCog, ShieldCheck, Server, BrainCircuit, GanttChart } from "lucide-react";
import Link from "next/link";
import { 
    IT_CONSULTING_SERVICES,
    IT_CONSULTING_WHY_US,
    IT_CONSULTING_APPROACH,
    IT_CONSULTING_CASE_STUDIES,
    IT_CONSULTING_FAQ
} from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";

const trustBadges = [
    { label: 'ISO Certified', icon: Award },
    { label: '24/7 Support', icon: LifeBuoy },
    { label: '98% Client Satisfaction', icon: Star },
];

export default function ITConsultingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-consulting');
    const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="IT Consulting"
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="container relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-white transition-all duration-300">Transform Your Business With Expert IT Consulting</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Align technology with strategy to accelerate growth, reduce cost, and unlock innovation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Book Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose ITLC as Your Technology Partner?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-12">
                  {IT_CONSULTING_WHY_US.map(item => (
                    <div key={item} className="futuristic-card-container">
                      <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                      <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <span className="font-medium text-sm text-foreground">{item}</span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {trustBadges.map(badge => (
                    <div key={badge.label} className="flex items-center gap-3">
                        <badge.icon className="h-6 w-6 text-accent" />
                        <span className="font-semibold text-muted-foreground">{badge.label}</span>
                    </div>
                ))}
              </div>
          </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our IT Consulting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IT_CONSULTING_SERVICES.map(service => {
              const image = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
                <div key={service.title} className="group relative rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20">
                   {image && (
                    <>
                        <Image 
                            src={image.imageUrl}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105 z-0 rounded-xl"
                            data-ai-hint={image.imageHint}
                        />
                    </>
                )}
                 <div className="relative z-20 flex flex-col items-center flex-grow h-full">
                    <div className="bg-primary/10 p-4 rounded-full w-fit transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                 </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Consulting Approach</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
                {IT_CONSULTING_APPROACH.map((step, index) => (
                    <div key={step.title} className="group flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20">
                        <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary group-hover:text-primary">
                            {index + 1}
                        </div>
                        <h3 className="font-bold">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies & Impact */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Case Studies &amp; Impact</h2>
           <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">Proven results from our strategic partnerships.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {IT_CONSULTING_CASE_STUDIES.map(stat => (
              <div key={stat.label} className="group relative rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground text-center">{stat.label}</p>
              </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {IT_CONSULTING_FAQ.map((faq) => (
                    <AccordionItem value={faq.question} key={faq.question}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {ctaImage && (
            <Image
                src={ctaImage.imageUrl}
                alt="Abstract background"
                fill
                className="object-cover"
                data-ai-hint={ctaImage.imageHint}
            />
        )}
        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Let’s Build Your Digital Tomorrow</h2>
           <p className="text-muted-foreground mb-8">Partner with ITLC INDIA PVT LTD for smarter decisions and stronger technology.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Schedule Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

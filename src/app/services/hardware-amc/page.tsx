"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, Clock, DollarSign, Zap, Eye, Search, GanttChart, Wrench, FilePenLine, Activity, Award, Star, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { 
    HARDWARE_SERVICES,
    AMC_PLANS,
    AMC_WHY_US,
    SUPPORT_PROCESS,
    AMC_FAQ
} from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const stats = [
    { value: '200+', label: 'Businesses Served' },
    { value: '24/7', label: 'Support' },
    { value: '98%', label: 'Uptime Guarantee' },
];

export default function HardwareAmcPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-hardware');
    const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="Hardware Services AMC"
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="container relative z-10">
            <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-white transition-all duration-300">Reliable Hardware Services &amp; Annual Maintenance Contracts</h1>
            </div>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Ensure uninterrupted business operations with proactive maintenance, fast repairs, and expert hardware support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow">
                    <Link href="/contact">Request AMC Proposal</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
                    <Link href="/contact">Quick Support</Link>
                </Button>
            </div>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            {stats.map(stat => (
              <div key={stat.label} className="group relative rounded-xl bg-white/10 backdrop-blur-sm p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-white/20">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">Our Hardware Services</h2>
           <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional hardware support to keep your systems efficient, secure &amp; up-to-date.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {HARDWARE_SERVICES.map(service => (
              <div key={service.title} className="group relative rounded-2xl bg-gradient-to-br from-primary/10 to-background/50 p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-primary transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Plans Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">AMC Plans We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {AMC_PLANS.map(plan => (
                    <div key={plan.title} className="group relative rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6 text-left shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-full mt-1">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                            </div>
                            <span className="font-medium text-lg text-foreground">{plan.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose Our AMC Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                  {AMC_WHY_US.map(item => (
                    <div key={item.title} className="futuristic-card-container">
                      <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                          <div className="bg-primary/10 p-3 rounded-full mb-2 inline-block">
                            <item.icon className="h-7 w-7 text-primary shrink-0" />
                          </div>
                          <span className="font-medium text-sm text-foreground">{item.title}</span>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Support Process Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Support Process</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-border rounded-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center relative">
              {SUPPORT_PROCESS.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center gap-4 group">
                    <div className="relative z-10 w-18 h-18 bg-gradient-to-br from-primary/20 via-primary/10 to-background border-2 border-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-2xl mb-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/30 group-hover:border-primary">
                        <step.icon className="h-8 w-8 transition-colors duration-300 group-hover:text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{index + 1}. {step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {AMC_FAQ.map((faq) => (
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
          <h2 className="text-3xl font-bold font-headline mb-4">Keep Your Hardware Healthy, Always.</h2>
           <p className="text-muted-foreground mb-8">Let’s plan your AMC tailored to your business requirements.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Request Free Audit</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Contact Support Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

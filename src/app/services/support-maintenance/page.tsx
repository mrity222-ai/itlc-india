"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Server, Bug, FilePenLine, BarChart, Clock, Zap } from "lucide-react";
import Link from "next/link";
import { 
    SUPPORT_WHY_US,
    SUPPORT_WHAT_WE_SUPPORT,
    SUPPORT_MAINTENANCE_OFFERINGS,
    SUPPORT_TECH_STACK,
    SUPPORT_CASE_STUDIES,
    SUPPORT_FAQ
} from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function SupportMaintenancePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-support');
    const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="Support & Maintenance"
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="container relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-white transition-all duration-300">Reliable Support &amp; Maintenance That Keeps Your Digital Presence Running Smoothly</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We take care of the updates, security, backups, and performance so you can stay focused on growing your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow">
              <Link href="/contact">Get Support Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose Our Support Services?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                  {SUPPORT_WHY_US.map(item => (
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

      {/* What We Support */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">What We Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {SUPPORT_WHAT_WE_SUPPORT.map((item) => (
                    <Card key={item.title} className="group relative rounded-2xl text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20 p-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-background/50 p-4 rounded-full border mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                <item.icon className="h-8 w-8 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      {/* Maintenance Offerings */}
      <section className="py-16 md:py-24">
        <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Maintenance Offerings</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {SUPPORT_MAINTENANCE_OFFERINGS.map((offering) => (
                    <Card key={offering.title} className="group relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                        <CardHeader className="p-0 mb-4 flex flex-row items-center gap-4">
                           <div className="bg-background/50 p-3 rounded-full border transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                             <offering.icon className="h-8 w-8 text-primary"/>
                           </div>
                           <CardTitle>{offering.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ul className="space-y-2">
                                {offering.points.map((point) => (
                                    <li key={point} className="flex items-center gap-3 text-muted-foreground">
                                        <Check className="h-4 w-4 text-accent"/>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 font-headline">Tools &amp; Technologies We Use</h2>
            <div className="relative w-full overflow-hidden mt-12">
                <div className="flex animate-scroll group-hover:pause">
                    {[...SUPPORT_TECH_STACK, ...SUPPORT_TECH_STACK].map((tech, index) => (
                         <div key={`${tech.name}-${index}`} className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 text-center group w-24">
                            <tech.icon className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            <p className="font-semibold text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {tech.name}
                            </p>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">Real results for real businesses.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {SUPPORT_CASE_STUDIES.map(stat => (
              <div key={stat.label} className="group relative rounded-2xl bg-gradient-to-br from-sky-300/20 via-sky-400/10 to-transparent p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-sky-300/20">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {SUPPORT_FAQ.map((faq) => (
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
          <h2 className="text-3xl font-bold font-headline mb-4">Keep Your Website &amp; Apps Performing at Their Best</h2>
          <p className="text-muted-foreground mb-8">Let our experts handle the tech while you scale confidently.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Contact Support Team</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
                <Link href="/contact">Schedule Free Health Check</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

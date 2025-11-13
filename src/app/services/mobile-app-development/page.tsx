
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Shield, Smartphone, ArrowRight, Bot, Code, Palette, Rocket, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CLIENTS, TESTIMONIALS, MOBILE_DEV_SERVICES, MOBILE_DEV_PROCESS, MOBILE_WHY_CHOOSE_US, MOBILE_PORTFOLIO } from "@/lib/constants";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { ContactForm } from "@/components/contact-form";
import { AnimatedCounter } from "@/components/animated-counter";

const stats = [
  { value: 300, label: 'Apps Delivered', icon: Smartphone },
  { value: 4.9, label: 'Client Rating', icon: Star },
  { value: 100, label: 'NDA Protection', icon: Shield },
];

export default function MobileAppDevelopmentPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-card">
        <div className="container">
           <div className="max-w-4xl mx-auto space-y-6">
            <div className="animate-fade-in-up">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Mobile Apps That Turn Ideas Into Powerful Digital Experiences
              </h1>
            </div>
            <p
              className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              From strategy to deployment, we build apps that are fast, scalable, and engineered for business success.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="secondary">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center justify-center gap-4 p-4 rounded-lg glass-card">
                <stat.icon className="h-8 w-8 text-primary" />
                <div>
                   <p className="text-2xl font-bold">
                    <AnimatedCounter to={stat.value} />
                    {stat.label === 'Client Rating' ? '' : '+'}{stat.label === 'NDA Protection' ? '%' : ''}
                   </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">Custom Mobile App Development Solutions</h2>
           <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We build high-performance mobile apps for all platforms, with a focus on user experience and business growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOBILE_DEV_SERVICES.map(service => (
              <Card key={service.title} className="glass-card p-4 text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium">
             <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Lightning-fast performance</span>
             <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Secure & cloud-ready</span>
             <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> User-centric designs</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {MOBILE_WHY_CHOOSE_US.map(item => (
                      <div key={item} className="flex items-center gap-3 p-4 rounded-lg glass-card">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                          <span className="font-medium text-sm">{item}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-5 h-[calc(100%-2.5rem)] w-0.5 bg-border"></div>
            {MOBILE_DEV_PROCESS.map((step, index) => (
              <div key={step.title} className={`flex md:items-center gap-8 mb-12 md:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'flex-col md:flex-row'}`}>
                <div className={`hidden ${index % 2 === 1 ? 'md:flex' : 'md:hidden'} w-1/2`}></div>
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-10 h-10 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-lg">{index + 1}</div>
                </div>
                <div className="md:w-1/2 flex-1">
                   <Card className="p-6 glass-card">
                      <h3 className="font-bold text-xl mb-2 text-primary">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Final CTA Block */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Let’s Build Your App. Smarter. Faster. Better.</h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

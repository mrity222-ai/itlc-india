
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Star, Users, ArrowRight, BrainCircuit, Code, Rocket, Scaling, Globe, Smartphone, Package, ShieldCheck, DollarSign, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { ContactForm } from "@/components/contact-form";
import { OUR_WORK_PROJECTS, TESTIMONIALS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Particles } from "@/components/particles";

const coreServices = [
  {
    title: "Web Development",
    description: "Secure, lightning-fast, SEO-optimized websites that convert customers.",
    tech: "React, Node.js, Laravel, WordPress",
    href: "/services/web-development",
    icon: Globe
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps for Android & iOS with stunning UI & smooth performance.",
    tech: "Flutter, React Native, Java, Kotlin",
    href: "/services/mobile-app-development",
    icon: Smartphone
  },
  {
    title: "MVP Development",
    description: "Launch fast. Test smart. Fail less. We build Minimum Viable Products in weeks, not months.",
    tech: "Ideal for Startups, Founders, Product Innovation",
    href: "/services/mvp-development",
    icon: Rocket
  }
];

const whyCustomDev = [
    { title: "Your Product, Your Rules", description: "Full control over features & branding.", icon: BrainCircuit },
    { title: "Scalable Technology", description: "Built for future growth and adaptability.", icon: Scaling },
    { title: "Unified Solution", description: "One solution for all your unique business needs.", icon: Package },
    { title: "Full Ownership", description: "You own the IP and the final product.", icon: Briefcase },
];

const processSteps = [
    { title: "Discovery", description: "We dive deep into your business goals and project requirements." },
    { title: "Design", description: "We create UI/UX wireframes and visual designs for approval." },
    { title: "Development", description: "Our team builds your product with clean, efficient code." },
    { title: "Launch", description: "We deploy the solution and ensure a smooth go-live." },
    { title: "Support & Scale", description: "We provide ongoing support and help you scale." },
];

const industries = [ 'Retail', 'Healthcare', 'EdTech', 'E-commerce', 'Real Estate', 'Corporate', 'Startups' ];

const pricingModels = [
    { title: "Fixed Cost Projects", description: "Ideal for projects with a clear scope and defined deliverables." },
    { title: "Dedicated Developer", description: "Monthly engagement for ongoing needs and flexible development." },
    { title: "Startup MVP Packages", description: "Affordable, focused packages to get your idea to market fast." },
]

export default function CustomSoftwareDevelopmentPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-custom-software');
    const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Custom Software Development"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="animate-fade-in-up">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Custom Digital Solutions That Build Real Business Growth
              </h1>
            </div>
            <p
              className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              From idea to scalable digital product. We design and develop high-performance Web, Mobile & MVP solutions tailored for your business success.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="secondary">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
          <p
            className="mt-6 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            Top-rated Development Partner for Startups & Enterprises in India
          </p>
        </div>
      </section>

      {/* Why Custom Development? */}
      <section className="py-16 md:py-24">
        <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-12">Why Custom Development?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {whyCustomDev.map(item => (
                  <div key={item.title} className="futuristic-card-container">
                    <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <item.icon className="h-8 w-8 text-primary" />
                        </div>
                        <span className="font-semibold">{item.title}</span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {coreServices.map(service => (
              <Card key={service.title} className="group relative rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                  <CardHeader className="items-center text-center p-0">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-full border mb-4">
                          <service.icon className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center p-0 pt-4">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-xs text-muted-foreground font-medium">Tech: {service.tech}</p>
                  </CardContent>
                  <div className="p-0 pt-6">
                      <Button asChild className="w-full">
                          <Link href={service.href}>Explore {service.title.split(' ')[0]} <ArrowRight className="ml-2" /></Link>
                      </Button>
                  </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium">
             <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Quick Delivery</span>
             <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Affordable Pricing</span>
             <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Cloud-ready Deployment</span>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Process</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border"></div>
            <div className="grid md:grid-cols-5 gap-8 text-center relative">
                {processSteps.map((step, index) => (
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
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Let’s Build Something Great Together</h2>
          <p className="text-muted-foreground mb-8">Tell us your idea and get a smart solution roadmap within 24 hours.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Send Inquiry</Link>
            </Button>
             <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
                <Link href="/contact">Schedule Meeting</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

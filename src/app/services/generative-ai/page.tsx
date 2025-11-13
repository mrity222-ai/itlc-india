
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Star, Users, ArrowRight, BrainCircuit, Bot, Code, Palette, Rocket, Database, Eye, MessageSquare, FileText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GEN_AI_WHAT_WE_BUILD, GEN_AI_TECH_STACK, GEN_AI_WORKFLOW, GEN_AI_PRICING, GEN_AI_SECURITY, GEN_AI_WHY_US } from "@/lib/constants";
import { AnimatedCounter } from "@/components/animated-counter";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stats = [
  { value: 40, label: 'Cost Reduction in Support', suffix: '%' },
  { value: 3, label: 'Faster Content Production', suffix: 'x' },
  { value: 28, label: 'Conversion Uplift', suffix: '%' },
];

export default function GenerativeAiPage() {
  const extendedTechStack = [...GEN_AI_TECH_STACK, ...GEN_AI_TECH_STACK];
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-ai');
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="Generative AI Solutions"
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-white text-shadow-cyber transition-all duration-300">Unlock the Future With Generative AI Solutions</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Smarter systems that create, automate, and scale. Transform your business with AI-driven productivity, personalization, and predictive intelligence.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow">
              <Link href="/contact">Book AI Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="#use-cases">Explore Use Cases</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>Enterprise-ready AI tailored for Startups, SMEs, and Global Businesses</p>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="use-cases" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">What We Build With Generative AI</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">Faster operations. Better decisions. Personalized experiences.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GEN_AI_WHAT_WE_BUILD.map(item => (
              <Card key={item.title} className="group relative rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                <CardHeader className="p-0 items-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tech Stack Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 font-headline">Our AI Tech Stack</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">Technology that truly adapts to your business.</p>
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll group-hover:pause">
                    {extendedTechStack.map((tech, index) => (
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

      {/* Client Success Showcase */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Client Success Showcase</h2>
             <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">We deliver performance improvements you can see and quantify.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map(stat => (
                <div key={stat.label} className="group relative rounded-2xl bg-gradient-to-br from-sky-900 via-sky-950 to-background p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20 flex flex-col items-center justify-center gap-2">
                    <p className="text-4xl font-bold text-primary">
                        <AnimatedCounter to={stat.value} />{stat.suffix}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
                ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
                <Link href="/portfolio">View All Case Studies</Link>
              </Button>
            </div>
        </div>
      </section>
      
       {/* Security Promise */}
      <section className="py-16 md:py-24 bg-card">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Enterprise Security Promise</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {GEN_AI_SECURITY.map(item => (
                    <div key={item} className="futuristic-card-container">
                      <div className="glass-card rounded-2xl p-6 text-center flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                          <span className="font-medium text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

       {/* Why AI with ITLC */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why AI With ITLC INDIA</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                  {GEN_AI_WHY_US.map(item => (
                    <div key={item} className="futuristic-card-container">
                      <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                           <CheckCircle className="h-8 w-8 text-primary shrink-0 mb-2 mx-auto" />
                          <span className="font-medium text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Our Workflow */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">Our Smart AI Workflow</h2>
          <p className="text-center text-muted-foreground mb-12">From idea to AI automation within weeks.</p>
          <div className="relative max-w-5xl mx-auto">
             <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-border rounded-full"></div>
            <div className="grid md:grid-cols-6 gap-8 text-center relative">
              {GEN_AI_WORKFLOW.map((step, index) => (
                <div key={step.title} className="group relative rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20 flex flex-col items-center gap-4">
                    <div className="relative z-10 w-18 h-18 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl mb-2 transition-all duration-300 group-hover:scale-105 group-hover:animate-pulse-glow">
                        <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg">{index + 1}. {step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="relative py-16 md:py-24 bg-card overflow-hidden">
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
          <h2 className="text-3xl font-bold font-headline mb-4">Let’s Build AI That Works For You</h2>
          <p className="text-muted-foreground mb-8">Share your problem. We craft the right AI solution.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Get AI Proposal</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
                <Link href="/contact">Schedule Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

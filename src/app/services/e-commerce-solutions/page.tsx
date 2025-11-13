
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { 
    ECOMMERCE_WHY_US, 
    ECOMMERCE_SOLUTIONS, 
    ECOMMERCE_PERFORMANCE_SECURITY, 
    ECOMMERCE_INTEGRATIONS, 
    ECOMMERCE_GROWTH_ADDONS,
    ECOMMERCE_BUILD_PROCESS,
    ECOMMERCE_PRICING_MODELS
} from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedCounter } from "@/components/animated-counter";

export default function ECommerceSolutionsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-ecommerce');
    const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
    
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="E-Commerce Solutions"
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container relative z-10">
          <div className="animate-fade-in-up">
            <div className="bg-primary/10 border border-primary/20 text-primary text-sm font-medium rounded-full px-4 py-1 mb-4 inline-block">
               ✅ WooCommerce | ✅ Shopify | ✅ Custom E-Commerce
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-shadow-cyber transition-all duration-300">Grow Online Sales With Powerful E-Commerce Solutions</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            From stunning storefronts to secure transactions and fast performance. We build online stores that convert visitors into loyal customers.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Book Free Demo</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Start Your Online Store</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.9s' }}>Trusted by businesses across Retail, Fashion, Electronics & FMCG</p>
        </div>
      </section>

      {/* Why Transform With Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Transform Your Online Business With Us?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                  {ECOMMERCE_WHY_US.map(item => (
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

      {/* E-Commerce Solutions Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our E-Commerce Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ECOMMERCE_SOLUTIONS.map(service => {
              const image = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
              <Card key={service.title} className="group relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20 overflow-hidden">
                {image && (
                  <>
                    <Image
                      src={image.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-transparent z-10"></div>
                  </>
                )}
                <div className="relative z-20 flex flex-col flex-grow h-full">
                  <CardHeader className="flex-row items-center gap-4 p-0 mb-4">
                    <div className="bg-background/50 p-3 rounded-full border transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <ul className="space-y-2">
                      {service.points.map(point => (
                          <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                              <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                              <span>{point}</span>
                          </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            )})}
          </div>
        </div>
      </section>
      
      {/* Performance & Security */}
       <section className="py-16 md:py-24">
        <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-4">Performance & Security Focused</h2>
            <p className="text-lg text-muted-foreground mb-12">Fast load = more sales. We prioritize speed and security to build trust and drive conversions.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {ECOMMERCE_PERFORMANCE_SECURITY.map(item => (
                    <div key={item.title} className="group relative rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                        <div className="bg-primary/10 p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                            <item.icon className="h-8 w-8 text-primary" />
                        </div>
                        <span className="font-semibold text-sm mt-3 block">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* How We Build Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">How We Build Your Online Store</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-border rounded-full"></div>
            <div className="grid md:grid-cols-6 gap-8 text-center relative">
              {ECOMMERCE_BUILD_PROCESS.map((step, index) => (
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
          <h2 className="text-3xl font-bold font-headline mb-4">Ready To Sell Online Without Limits?</h2>
          <p className="text-muted-foreground mb-8">Let’s build your powerful digital store today.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Request Proposal</Link>
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

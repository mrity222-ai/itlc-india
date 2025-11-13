"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Award, Users } from "lucide-react";
import Link from "next/link";
import { 
    DESIGN_MARKETING_SERVICES,
    DESIGN_MARKETING_WHY_US,
} from "@/lib/constants";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function DesignMarketingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-design');
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="Design & Marketing"
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container relative z-10">
          <div className="bg-primary/10 border border-primary/20 text-primary text-sm font-medium rounded-full px-4 py-1 mb-4 inline-block">
            ✅ Branding | ✅ UI/UX | ✅ Websites | ✅ SEO | ✅ Growth Campaigns
          </div>
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-white text-shadow-cyber transition-all duration-300">Design That Speaks. Marketing That Converts. Brands That Lead.</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We craft unforgettable digital experiences with powerful storytelling, creative design, and result-driven marketing.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow">
              <Link href="/contact">Start Your Brand Journey</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Book Strategy Meeting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">We Build Brands That Win</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">A strong brand isn’t just seen, it’s remembered.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESIGN_MARKETING_SERVICES.map(service => {
              const image = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
              <Card key={service.title} className="group relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20 overflow-hidden">
                {image && (
                    <>
                        <Image
                            src={image.imageUrl}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
                            data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-background/80 group-hover:bg-background/70 transition-colors duration-300 z-10"></div>
                    </>
                )}
                <div className="relative z-20 p-6 flex flex-col flex-grow h-full items-center text-center">
                    <CardHeader className="p-0 mb-4 flex flex-col items-center">
                    <div className="bg-background/50 p-3 rounded-full border mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground mb-4 text-sm flex-grow">{service.goal}</p>
                      <ul className="space-y-2 text-left w-full">
                          {service.points.map(point => (
                              <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Work With ITLC INDIA</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                  {DESIGN_MARKETING_WHY_US.map((item, index) => (
                    <div key={item.title} className="futuristic-card-container">
                      <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                          <item.icon className="h-8 w-8 text-primary shrink-0 mb-2" />
                          <span className="font-medium text-sm">{item.title}</span>
                      </div>
                    </div>
                  ))}
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
          <h2 className="text-3xl font-bold font-headline mb-4">Let’s Build Something Extraordinary</h2>
          <p className="text-muted-foreground mb-8">Tell us your vision. We’ll make it real.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Request Brand Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
                <Link href="/portfolio">Download Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

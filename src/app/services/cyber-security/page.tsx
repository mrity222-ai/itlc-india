
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/animated-counter";
import { 
    CYBER_SECURITY_SERVICES, 
    CYBER_SECURITY_TECH_STACK,
    CYBER_SECURITY_WHY_US,
    CYBER_SECURITY_PROCESS
} from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const stats = [
  { value: 99.9, label: 'Threat Detection Accuracy', suffix: '%' },
  { value: 70, label: 'Downtime Reduction', suffix: '%' },
  { value: 45, label: 'Operational Risk Cut', suffix: '%' },
];

export default function CyberSecurityPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-security');
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Cyber Security"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container relative z-10">
          <div className="bg-accent/10 border border-accent/20 text-accent text-sm font-medium rounded-full px-4 py-1 mb-4 inline-block">
            Trusted by SMEs, Enterprises & Govt. Sectors
          </div>
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-white transition-all duration-300">Protecting Your Digital Future Today</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Advanced security strategies that stop cyber threats before they happen. Safeguard your business with top-tier monitoring, compliance, and rapid incident response.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow">
              <Link href="/contact">Get Free Security Audit</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Talk To Cyber Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Secure Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">What We Secure</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">Instant action against emerging risks, from network to endpoint.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CYBER_SECURITY_SERVICES.map(service => {
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
                <div className="relative z-20 p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-background/50 p-3 rounded-full border">
                        <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                        {service.points.map(point => (
                            <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-accent shrink-0" />
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
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose ITLC INDIA</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                  {CYBER_SECURITY_WHY_US.map((item, index) => (
                    <div key={item} className="futuristic-card-container">
                      <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                          <Shield className="h-8 w-8 text-primary shrink-0 mb-2" />
                          <span className="font-medium text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Zero-Trust Security Process</h2>
           <p className="text-center text-muted-foreground -mt-8 mb-12">We predict risks before they become attacks.</p>
          <div className="relative max-w-5xl mx-auto">
             <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-border rounded-full"></div>
            <div className="grid md:grid-cols-5 gap-8 text-center relative">
              {CYBER_SECURITY_PROCESS.map((step, index) => (
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

        {/* Results & Impact */}
        <section className="py-16 md:py-24 bg-card">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">Results & Impact</h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">We deliver security improvements you can measure.</p>
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
                  <Button asChild>
                    <Link href="/portfolio">View Security Impact Stories</Link>
                  </Button>
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
          <h2 className="text-3xl font-bold font-headline mb-4">Cyber Threats Never Sleep. Neither Do We.</h2>
          <p className="text-muted-foreground mb-8">Schedule your free risk assessment and secure your business now.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Get Security Proposal</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
                <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

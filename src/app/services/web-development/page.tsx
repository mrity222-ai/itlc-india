
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Star, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CLIENTS, OUR_WORK_PROJECTS, TESTIMONIALS, WEB_DEV_SERVICES, WHY_CHOOSE_US, DEV_PROCESS } from "@/lib/constants";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { ContactForm } from "@/components/contact-form";

const stats = [
  { value: '150+', label: 'Websites Delivered', icon: Award },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
  { value: '5+', label: 'Years Expertise', icon: Users },
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="animate-fade-in-up">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                We Build Websites That Drive Business Growth
              </h1>
            </div>
            <p
              className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Professional, secure, and high-performance web development for brands ready to scale in the digital world.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="secondary">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <p
            className="mt-6 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            Trusted Web Development Agency Based in India
          </p>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose ITLC INDIA PVT LTD?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                  {WHY_CHOOSE_US.map(item => (
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
          </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEB_DEV_SERVICES.map(service => (
              <Card key={service.title} className="glass-card p-4 text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24">
        <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 font-headline">Tech Expertise</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">We choose modern technologies that deliver speed, scalability, and performance.</p>
            <TechnologyStack />
        </div>
      </section>


      {/* Our Process */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Process To Launch Your Success</h2>
          <div className="relative max-w-5xl mx-auto">
             <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-border rounded-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
              {DEV_PROCESS.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center gap-4 p-4">
                    <div className="relative z-10 w-18 h-18 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl mb-2">
                        {index + 1}
                    </div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Let’s Start Building Your Website</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 mb-8 max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-sm">On-time Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-sm">Data Privacy Guaranteed</span>
              </div>
              <div className="flex items-center justify-center gap-3 col-span-1 sm:col-span-2 lg:col-span-1">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-sm">Affordable & Transparent Pricing</span>
              </div>
          </div>
           <Button asChild size="lg">
              <Link href="/contact">Book Your Project Call</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}

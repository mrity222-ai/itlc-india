
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, Cpu, GitBranch, GanttChart, Server, Layers, Cloud, Activity, ArrowRight, Star, Award, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AWS_SERVICES_OFFERED, AWS_WHY_CHOOSE_US, AWS_APPROACH, AWS_CASE_STUDIES, AWS_TECH_EXPERTISE, TESTIMONIALS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/animated-counter";

const stats = [
    { value: 99.99, label: 'Uptime', suffix: '%' },
    { value: 40, label: 'Avg Cost Savings', suffix: '%' },
    { value: 3, label: 'Deployment Speed', suffix: 'x' },
    { value: 0, label: 'Security Incidents', suffix: '' },
];

export default function AwsSolutionsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/aws-hero/1920/1080"
            alt="AWS Cloud background"
            fill
            className="object-cover"
            data-ai-hint="cloud servers"
          />
        </div>
        <div className="container relative z-10">
          <div className="bg-primary/10 border border-primary/20 text-primary text-sm font-medium rounded-full px-4 py-1 mb-4 inline-block">
             ✔ AWS Certified Team | Multi-Cloud Expertise | 24×7 Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto">AWS Cloud Solutions That Scale With Your Ambitions</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy faster. Secure better. Operate smarter. Your infrastructure… powered by AWS excellence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Free AWS Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/portfolio">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold font-headline mb-4">About Our AWS Expertise</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
             We help startups and enterprises unlock performance, reliability, and security using Amazon Web Services. Zero downtime migration. Predictable cost. Fully managed cloud.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">AWS Services We Offer</h2>
           <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">From migration to management, we provide end-to-end AWS solutions.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AWS_SERVICES_OFFERED.map(service => (
              <Card key={service.title} className="glass-card p-4 text-center group transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:scale-110 transition-transform">
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose Us</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {AWS_WHY_CHOOSE_US.map(item => (
                    <div key={item} className="futuristic-card-container">
                      <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                          <Check className="h-8 w-8 text-primary shrink-0 mb-2 mx-auto" />
                          <span className="font-medium text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg">
                  <Link href="/contact">Speak With Solution Architect</Link>
                </Button>
              </div>
          </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Process</h2>
          <div className="relative max-w-5xl mx-auto">
             <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-border rounded-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center relative">
              {AWS_APPROACH.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center gap-4 p-4">
                    <div className="relative z-10 w-18 h-18 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl mb-2">
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
        <section className="py-16 md:py-24">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">Results & Cloud Impact</h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">We deliver performance improvements you can see and quantify.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                    {stats.map(stat => (
                    <div key={stat.label} className="flex flex-col items-center justify-center gap-2 p-4 sm:p-6 rounded-lg glass-card">
                        <p className="text-3xl sm:text-4xl font-bold text-primary">
                            <AnimatedCounter to={stat.value} />{stat.suffix}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

      {/* Tech Expertise */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 font-headline">AWS Tech Stack Expertise</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">Expertise across the entire AWS ecosystem.</p>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 sm:gap-8 max-w-6xl mx-auto">
              {AWS_TECH_EXPERTISE.map(tech => (
                 <div key={tech.name} className="flex flex-col items-center gap-2 text-center group">
                    <tech.icon className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <p className="font-semibold text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {tech.name}
                    </p>
              </div>
              ))}
            </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Future-Ready Infrastructure Starts Here</h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Start Your AWS Project</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Book Free Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

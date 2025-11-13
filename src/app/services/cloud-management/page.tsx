
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, Cpu, GitBranch, GanttChart, Server, Layers, Cloud, Activity, ArrowRight, Star, Award, Users, Lock, LayoutGrid, Zap, LifeBuoy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CLOUD_SERVICES_OFFERED, CLOUD_WHY_CHOOSE_US, CLOUD_APPROACH, CLOUD_CASE_STUDIES, CLOUD_TECH_EXPERTISE, TESTIMONIALS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/animated-counter";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { PlaceHolderImages } from "@/lib/placeholder-images";

const stats = [
    { value: 40, label: 'Cost Reduction', suffix: '%' },
    { value: 99.99, label: 'Uptime SLA', suffix: '%' },
    { value: 60, label: 'Faster Release Cycles', suffix: '%' },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig


export default function CloudManagementPage() {
  const extendedTechStack = [...CLOUD_TECH_EXPERTISE, ...CLOUD_TECH_EXPERTISE];
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-cloud');
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-card overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Cloud Solutions background"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline max-w-4xl mx-auto text-shadow-cyber transition-all duration-300">
              Cloud Solutions Built for Scale, Security & Speed
            </h1>
          </div>
          <p 
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Transform your business with powerful Cloud infrastructure, cost optimization, and automation. We architect, deploy, and manage your cloud so your teams move faster.
          </p>
          <div 
            className="mt-8 flex justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow">
              <Link href="/contact">Get Free Cloud Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Talk to Cloud Architect</Link>
            </Button>
          </div>
          <p 
            className="mt-6 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            Trusted Cloud Partner for SMEs, Enterprises & Modern Startups
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">Our Core Cloud Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {CLOUD_SERVICES_OFFERED.map(service => {
                 const image = PlaceHolderImages.find(p => p.id === service.imageId);
                 return (
                    <Card key={service.title} className="group relative rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20 bg-gradient-to-br from-background to-sky-950/20 overflow-hidden">
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
                        <div className="relative z-20 flex flex-col items-center justify-center h-full">
                            <CardHeader className="items-center text-center p-0">
                            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-full border mb-4">
                                <service.icon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow text-center p-0 pt-4">
                            <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </div>
                    </Card>
                )
            })}
          </div>
        </div>
      </section>
      
      {/* Supported Platforms */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 font-headline">Supported Cloud Platforms</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">We help you pick the right cloud so you only pay for what you need.</p>
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
          <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why ITLC INDIA?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                  {CLOUD_WHY_CHOOSE_US.map((item, index) => (
                    <div key={item.title} className="futuristic-card-container">
                        <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <span className="font-semibold">{item.title}</span>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Our Proven Cloud Process</h2>
          <div className="relative max-w-5xl mx-auto">
             <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-border rounded-full"></div>
            <div className="grid md:grid-cols-5 gap-8 text-center relative">
              {CLOUD_APPROACH.map((step, index) => (
                <div key={step.title} className="group relative rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                    <div className="relative z-10 w-18 h-18 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl mb-2 mx-auto">
                        <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg">{index + 1}. {step.title}</h3>
                </div>
              ))}
            </div>
          </div>
           <p className="text-center text-muted-foreground mt-8">Performance & cost improvements every month.</p>
        </div>
      </section>
      
        {/* Results & Benefits */}
        <section className="py-16 md:py-24">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h2 className="text-3xl font-bold font-headline mb-4">Measurable Results, Tangible Benefits</h2>
                    <p className="text-lg text-muted-foreground mb-8">We deliver performance improvements you can see and quantify.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {stats.map(stat => (
                        <div key={stat.label} className="group relative rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                            <p className="text-4xl font-bold text-primary">
                                <AnimatedCounter to={stat.value} />{stat.suffix}
                            </p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                        ))}
                    </div>
                 </div>
                 <div>
                    <Card className="group relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                        <CardHeader>
                            <CardTitle>Cloud Performance Gains</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ChartContainer config={chartConfig} className="w-full h-64">
                               <BarChart accessibilityLayer data={chartData}>
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis />
                                   <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                   <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                               </BarChart>
                           </ChartContainer>
                        </CardContent>
                    </Card>
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
          <h2 className="text-3xl font-bold font-headline mb-4">Ready To Elevate Your Business To The Cloud?</h2>
          <p className="text-muted-foreground mb-8">Achieve seamless scalability, iron-clad security & smarter cost control.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <Link href="/contact">Get Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50">
              <Link href="/contact">Request Proposal</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

    

    




    


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Eye, Rocket, Zap, ShieldCheck, FileText, Lightbulb, Bot, Code, Palette, Database, Users, TestTube2, MessageSquare, Star, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MVP_FEATURES, MVP_BENEFITS, MVP_PROCESS, MVP_ASSURANCE } from "@/lib/constants";

const stats = [
    { value: '100+', label: 'Early Signups', icon: Users },
    { value: '4.8', label: 'User Rating', icon: Star },
    { value: 'Featured', label: 'In Tech Blogs', icon: Award },
];

export default function MvpDevelopmentPage() {
    const mvpSolutionImage = PlaceHolderImages.find(p => p.id === 'mvp-solution');

    return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-card">
        <div className="container">
           <div className="max-w-4xl mx-auto space-y-6">
            <div className="animate-fade-in-up">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Build. Launch. Validate. Faster Than Ever.
              </h1>
            </div>
            <p
              className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Turn your idea into a tested market-ready product in weeks, not months.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button size="lg" asChild className="group">
                <Link href="#lead-capture">
                  Join Early Access
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="secondary">
                <Link href="#">Watch Demo</Link>
              </Button>
            </div>
          </div>
          <p
            className="mt-6 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            Trusted by innovators & backed by user-centric development.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
        <section className="py-16 md:py-24">
            <div className="container text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Your Shortcut to Market Validation</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {MVP_BENEFITS.map(item => (
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
                 <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="#lead-capture">Join the Waitlist</Link>
                    </Button>
                </div>
            </div>
        </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">How It Works</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-border rounded-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
              {MVP_PROCESS.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center gap-4 p-4">
                    <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl mb-2">
                        <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg">{index + 1}. {step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-headline mb-4">Already Making an Impact</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg glass-card">
                <stat.icon className="h-10 w-10 text-primary mb-2" />
                <p className="text-3xl font-bold">
                    {stat.value}{stat.label === 'User Rating' ? '★' : ''}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Let’s Build Your MVP Together</h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Schedule Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Start Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

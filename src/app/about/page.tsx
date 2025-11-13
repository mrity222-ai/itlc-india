
"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, ShieldCheck, Star, Zap, GraduationCap, Lightbulb, Building, Linkedin, Twitter, Mail, Briefcase, Globe, Award, Users, BookCopy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Particles } from '@/components/particles';
import { AnimatedCounter } from '@/components/animated-counter';
import { CORE_VALUES, TIMELINE, CREDENTIALS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { OurPartnersSection } from '@/components/sections/our-partners-section';

export default function AboutPage() {
  const stats = [
    { value: 150, label: 'Projects Delivered', icon: Briefcase },
    { value: 10, label: 'Government Partnerships', icon: Building },
    { value: 5, label: 'Sectors', icon: Globe },
  ]

  return (
    <div className="relative overflow-hidden">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <div className="container py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline text-primary mb-2 text-shadow-cyber">
              About ITLC INDIA: Driving Digital Transformation
            </h1>
            <p className="italic text-muted-foreground mb-6">Innovating the Future with Technology and Research.</p>

            <div className="space-y-4 text-muted-foreground mb-8 max-w-3xl mx-auto">
              <p>
                ITLC India Pvt. Ltd. is a technology-driven company specializing in custom software development, web and mobile app solutions, and digital transformation. We combine innovation, research, and industry expertise to create scalable, high-performing digital products that help businesses grow smarter.
              </p>
              <p>
                With a strong presence in education, governance, and IT training, ITLC India delivers meaningful, future-ready solutions that empower organizations to evolve and lead. Driven by quality, agility, and a user-first approach, we turn ideas into powerful digital experiences that connect, engage, and deliver results.
              </p>
            </div>
             <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 max-w-md mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="group relative rounded-2xl p-4 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20 bg-gradient-to-br from-background/80 to-background/50">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    <AnimatedCounter to={stat.value} />+
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold font-headline text-center mb-12">Our Commitment to Innovation and Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((value) => {
              const image = value.imageId ? PlaceHolderImages.find(p => p.id === value.imageId) : null;
              return (
              <div key={value.title} className="group relative rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20 bg-gradient-to-br from-background/80 to-background/50 overflow-hidden">
                {image && (
                  <>
                    <Image
                      src={image.imageUrl}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-background/80 group-hover:bg-background/70 transition-colors duration-300 z-10"></div>
                  </>
                )}
                <div className="relative z-20 flex flex-col items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
                    <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold font-headline text-center">Our Credentials & Accreditations</h2>
          <p className="text-md sm:text-lg text-muted-foreground text-center mt-2 mb-12">Recognitions that validate our excellence.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
            {CREDENTIALS.map((credential) => (
                <div key={credential.title} className="group relative rounded-2xl bg-gradient-to-br from-sky-900 via-sky-950 to-background p-4 sm:p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20">
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-primary/10 p-3 sm:p-4 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
                            <credential.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        </div>
                        <span className="font-semibold text-xs sm:text-sm">{credential.title}</span>
                    </div>
                </div>
            ))}
          </div>
        </div>
        
        <OurPartnersSection />

        {/* Visionary Section */}
        <div className="my-16 md:my-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline">The Visionary Behind ITLC</h2>
            <p className="text-md sm:text-lg text-muted-foreground mt-2">Innovation, Leadership, and a Passion for Technology</p>
            <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center glass-card p-4 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-primary/10 -z-10"></div>
            <div className="relative group flex justify-center">
              <div className="relative aspect-square w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/30">
                <Image
                  src="/img/arun.jpg"
                  alt="Founder and MD Dr Arun Yadav"
                  fill
                  className="object-cover"
                  data-ai-hint="man portrait professional"
                />
              </div>
              <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-primary animate-pulse-glow group-hover:animate-none"></div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>With a strong academic background in Information Technology (NIET Jaipur), an M.Tech in Computer Science, and a Ph.D. in Cybersecurity, our founder has always been driven to bridge the gap between research and real-world innovation.</span>
              </p>
              <p className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Having mentored and incubated several tech-driven startups, his expertise lies in transforming innovative ideas into scalable, impactful technology solutions. This vision inspired the creation of ITLC India Pvt. Ltd. — a rising leader in IT infrastructure, software development, and digital transformation.</span>
              </p>
              <p className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                <Building className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Headquartered in Lucknow, ITLC India collaborates with state governments of Uttar Pradesh, Madhya Pradesh, and Rajasthan, delivering smart governance solutions, secure IT infrastructure, and future-ready digital systems that empower organizations to thrive in the digital era.</span>
              </p>
              <p className="font-semibold text-primary/90 mt-4 italic text-sm sm:text-base">
                "At ITLC India, we don’t just build systems — we build the foundation for digital growth and intelligent governance."
              </p>
               <div className="text-right mt-6">
                <p className="font-signature text-3xl sm:text-4xl text-primary/80">Dr Arun Yadav</p>
                <p className="text-muted-foreground font-semibold text-sm sm:text-base">Founder & CEO, ITLC India Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>

        
        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto">
             <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl font-headline">Ready to Transform Your Business?</h2>
             <p className="mt-4 text-md sm:text-lg text-muted-foreground">
                Partner with us to explore innovative IT solutions and drive growth.
             </p>
             <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/pricing">View Pricing</Link>
                </Button>
             </div>
        </div>
      </div>
    </div>
  );
}

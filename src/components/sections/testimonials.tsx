
"use client";

import { Star } from 'lucide-react';
import { ScrollAnimation } from '../scroll-animation';
import { TESTIMONIALS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Particles } from '../particles';
import { Card, CardContent } from '../ui/card';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-sky-950/20">
      <Particles className="absolute inset-0 -z-10" quantity={50} />
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-foreground">
            CLIENT VOICES
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from global innovators who trust ITLC INDIA PVT LTD.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <ScrollAnimation
                  key={index}
                  className="transition-all duration-700 ease-out"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="glass-card h-full flex flex-col justify-between transition-all duration-300 border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <blockquote className="text-foreground/90 text-base mb-6 text-center">
                        “{testimonial.quote}”
                      </blockquote>
                    </CardContent>
                    <div className="px-6 py-4 bg-background/50 rounded-b-lg flex flex-col items-center gap-4 text-center">
                      {image && (
                         <Image
                          src={image.imageUrl}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full border-2 border-primary/30"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollAnimation>
              )
            })}
        </div>
      </div>
    </section>
  );
}

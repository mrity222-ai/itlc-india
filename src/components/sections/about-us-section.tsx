
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimation } from '../scroll-animation';


export function AboutUsSection() {

  const visionImage = PlaceHolderImages.find((p) => p.id === 'about-vision');

  return (
    <ScrollAnimation direction="up">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-glow">
                About ITLC INDIA PVT LTD
              </h2>
              <p className="text-xl text-primary font-semibold">Your Partner in Digital Transformation</p>
              <p className="text-muted-foreground">
                Founded on the principles of innovation and integrity, ITLC INDIA PVT LTD is a trailblazer in the tech industry. We are a team of passionate technologists, creative designers, and strategic thinkers dedicated to helping businesses navigate the complexities of the digital world.
              </p>

              <Button size="lg" asChild className="glowing-btn">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight/>
                </Link>
              </Button>
            </div>
            <div className="futuristic-card-container">
               <div className="relative p-8 rounded-xl glass-card border-border overflow-hidden group">
                {visionImage && (
                  <Image
                    src={visionImage.imageUrl}
                    alt="Our Vision"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 opacity-20 group-hover:opacity-30"
                    data-ai-hint={visionImage.imageHint}
                  />
                )}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 font-headline text-primary">Our Vision</h3>
                  <p className="text-lg text-foreground/90">
                      To be the most trusted technology partner driving digital innovation globally through intelligent and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedCounter } from '@/components/animated-counter';

export function ItlcDeveloperSection() {
  const devImage1 = PlaceHolderImages.find((p) => p.id === 'itlc-developer-1');
  const devImage2 = PlaceHolderImages.find((p) => p.id === 'itlc-developer-2');
  const devImage3 = PlaceHolderImages.find((p) => p.id === 'itlc-developer-3');
  const devImage4 = PlaceHolderImages.find((p) => p.id === 'itlc-developer-4');

  const services = [
    'Architectural Planning & Design Consultation',
    'Full Building & Tower Construction',
    'Project Management & Execution',
    'Sustainable & Smart Building Solutions',
    'Contractor Support & Coordination',
  ];

  const stats = [
    { value: 5, label: 'Years of Experience' },
    { value: 100, label: 'Projects Completed' },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            ITLC Developer – Building Your Vision
          </h2>
          <p className="text-xl text-primary font-semibold">Transforming Architecture into Reality</p>
          <p className="text-muted-foreground text-sm">
            ITLC Developer specializes in full-scale building and construction management for residential, commercial, and mixed-use projects. From architectural planning and structural engineering to project execution and finishing, we deliver quality, timely, and sustainable construction solutions.
          </p>

          <div className="grid grid-cols-2 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background/50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-primary">
                  <AnimatedCounter to={stat.value} />+
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
            {devImage1 && 
              <div className="group relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg col-span-1 row-span-1">
                <Image src={devImage1.imageUrl} alt="Developer Image 1" fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={devImage1.imageHint} />
              </div>
            }
            {devImage2 && 
              <div className="group relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg col-span-1 row-span-1">
                <Image src={devImage2.imageUrl} alt="Developer Image 2" fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={devImage2.imageHint} />
              </div>
            }
            {devImage3 && 
              <div className="group relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg col-span-1 row-span-1">
                <Image src={devImage3.imageUrl} alt="Developer Image 3" fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={devImage3.imageHint} />
              </div>
            }
            {devImage4 && 
              <div className="group relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg col-span-1 row-span-1">
                <Image src={devImage4.imageUrl} alt="Developer Image 4" fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={devImage4.imageHint} />
              </div>
            }
        </div>
      </div>
    </section>
  );
}

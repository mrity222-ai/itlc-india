import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CtaBanner() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');

  return (
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
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container text-center z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-white">
          Let’s Build Something Remarkable Together
        </h2>
        <p className="mt-4 text-lg text-yellow-400 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can transform your ideas into intelligent, automated solutions.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="group">
            <Link href="/contact">
              Discuss Your Project
              <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

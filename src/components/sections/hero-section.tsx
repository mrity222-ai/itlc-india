
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Particles } from '@/components/particles';

export function HeroSection() {
  return (
    <section className="relative w-full h-[90svh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/vid/h2.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute inset-0 bg-transparent -z-10"></div>
      
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="animate-fade-in-up">
            <h1
              className="font-headline text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 text-glow"
            >
              Futuristic AI & Software Solutions
            </h1>
          </div>
          <p
            className="max-w-2xl mx-auto text-lg text-white/80 md:text-xl animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            We build cutting-edge AI, automation, and cloud solutions to drive business growth and digital transformation.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button size="lg" asChild className="glowing-btn">
              <Link href="/services">
                Explore AI Solutions
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce-subtle"></div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { OUR_WORK_PROJECTS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/animated-counter';
import { useEffect, useRef, FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '../scroll-animation';
import { cn } from '@/lib/utils';

const stats = [
    { value: 200, label: 'Projects Delivered' },
    { value: 50, label: 'Clients Served' },
    { value: 10, label: 'Industries Impacted' },
];

interface ProjectCardProps {
    project: typeof OUR_WORK_PROJECTS[0];
    index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const image = PlaceHolderImages.find(p => p.id === project.imageId);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const card = cardRef.current;
        if (!container || !card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateX = (y / rect.height - 0.5) * -15;
            const rotateY = (x / rect.width - 0.5) * 15;

            container.style.setProperty('--x', `${x}px`);
            container.style.setProperty('--y', `${y}px`);
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        };
        
        const handleMouseLeave = () => {
            card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        }

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className={cn(
                'futuristic-card-container transition-all duration-1000 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <Card ref={cardRef} className="group relative rounded-2xl p-6 shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-sky-950/20">
                <div className="absolute inset-0 bg-transparent rounded-2xl z-10 transition-all duration-300 group-hover:shadow-[inset_0_0_20px_0_hsl(var(--primary)/0.5)] group-hover:border-primary/50 border border-transparent"></div>
                <div className={`grid md:grid-cols-2 items-center gap-6`}>
                    <div className={`relative aspect-video rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    {image && (
                        <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                        />
                    )}
                    </div>
                    <div className="p-2">
                        <h3 className="font-headline text-2xl mb-4 text-primary">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <p className="text-sm text-accent font-medium">{project.services.join(' | ')}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export function OurWorkSection() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-shadow-cyber">
            Our Work — Powering Progress Through Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our portfolio showcases how we turn complex challenges into intelligent digital solutions. With a user-first mindset and future-ready tech, we deliver more than just results.
          </p>
        </div>
        <div className="space-y-12">
          {OUR_WORK_PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

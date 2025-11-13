
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from '@/components/service-card';
import { ScrollAnimation } from '../scroll-animation';

export function ServicesPreview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-foreground"
          >
            Our Key Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We deliver intelligent, scalable, and secure solutions to help you stay ahead.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollAnimation
              key={service.title}
              direction="up"
              className="w-full h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ServiceCard service={service} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CLIENTS } from '@/lib/constants';
import Image from 'next/image';

export function OurClients() {
  const extendedClients = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Our Clients
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our clients recognize us as a reliable ally to navigate the ever-evolving tech landscape.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll group-hover:pause">
            {extendedClients.map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex-shrink-0 mx-8 w-36">
                <div
                  className="relative h-16 partner-logo"
                  title={client.name}
                >
                  <Image 
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

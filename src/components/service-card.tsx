
"use client";

import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import type { Service } from '@/lib/constants';
import { SERVICE_ICONS } from '@/lib/constants';
import { useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = useMemo(() => SERVICE_ICONS[service.iconName], [service.iconName]);
  
  if (!Icon) {
    return null;
  }
  
  const href = `/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;

  return (
    <Link href={href} className="group h-full">
      <div className={cn(
        "futuristic-card h-full text-center cursor-pointer",
        "flex flex-col items-center justify-center"
      )}>
        <div className="mb-4 inline-block bg-background/50 backdrop-blur-sm p-4 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
          <Icon className="h-10 w-10 text-primary transition-all duration-300" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
        <CardDescription className="pt-2 text-sm text-muted-foreground transition-colors duration-300">{service.description}</CardDescription>
      </div>
    </Link>
  );
}

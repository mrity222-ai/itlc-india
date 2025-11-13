
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SERVICES_MEGA_MENU } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        mounted && scrolled ? "border-b border-border/20 bg-background/80 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
      )}>
      <div className="container flex h-16 max-w-screen-xl items-center">
        <div className="flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/img/logo.png"
              alt="ITLC INDIA PVT LTD Logo"
              width={70}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 text-sm font-medium">
          {NAV_LINKS.map((link) =>
            link.href === '/services' ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger
                  className={cn(
                    'group flex items-center gap-1 transition-colors hover:text-primary focus:outline-none',
                    pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {link.name}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[500px] p-4 glass-card grid grid-cols-2 gap-4">
                  {SERVICES_MEGA_MENU.map((service) => (
                    <DropdownMenuItem key={service.title} asChild>
                      <Link
                        href={service.href}
                        className="group flex items-start gap-3 p-3 transition-all duration-200 hover:bg-primary/10 rounded-md focus:bg-primary/10 focus:outline-none"
                      >
                        <div className="bg-primary/10 p-2 rounded-md transition-colors group-hover:bg-primary/20">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {service.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex animated-button">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

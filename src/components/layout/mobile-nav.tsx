
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SERVICES_MEGA_MENU } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-full max-w-sm glass-card">
          <SheetHeader className="p-6 border-b border-border/30">
            <SheetTitle asChild>
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/img/logo.png"
                      alt="ITLC INDIA PVT LTD Logo"
                      width={70}
                      height={40}
                      className="object-contain"
                    />
                </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="grid gap-4 p-6 text-base font-medium">
                {NAV_LINKS.map((link) => (
                    link.href === '/services' ? (
                    <Accordion key={link.href} type="single" collapsible className="w-full -my-2">
                        <AccordionItem value="services" className="border-b-0">
                        <AccordionTrigger className={cn(
                            "py-2 font-medium hover:no-underline hover:text-primary transition-colors group",
                            pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground'
                            )}>
                            <div className="flex items-center gap-1">
                                <span>Services</span>
                                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 pt-2">
                            <div className="grid gap-2">
                            {SERVICES_MEGA_MENU.map((item) => (
                                <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                {item.title}
                                </Link>
                            ))}
                            </div>
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    ) : (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            'text-muted-foreground hover:text-primary transition-colors',
                            pathname === link.href ? 'text-foreground' : ''
                        )}
                    >
                        {link.name}
                    </Link>
                    )
                ))}
            </nav>
            <div className="p-6">
              <Button asChild className="w-full glowing-btn">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

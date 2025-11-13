import Link from 'next/link';
import { FOOTER_LINKS, FOOTER_SERVICES, SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 relative overflow-hidden font-body mt-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2024/05/27/211592_large.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="container relative z-10 mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/img/logo.png"
                alt="ITLC INDIA PVT LTD Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Driving innovation through research, technology, and transformation.
            </p>
            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              {CONTACT_INFO.map((info) => (
                <li key={info.label} className="flex items-start gap-3 hover:text-primary transition-colors">
                  <info.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <div className="text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ITLC INDIA PVT LTD — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

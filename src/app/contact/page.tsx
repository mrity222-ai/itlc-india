
'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Particles } from '@/components/particles';

function ContactPageComponent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');

  const contactDetails = [
    { icon: Phone, value: '+91 9532341000', href: 'tel:+919532341000' },
    { icon: Mail, value: 'info@itlcindia.com', href: 'mailto:info@itlcindia.com' },
    { icon: MapPin, value: 'Olive Wood Villa, G1/0049, Golf City, Lucknow, Muzaffar Nagar Ghusval, Uttar Pradesh 226002', href: '#' },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 relative overflow-hidden">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h1 className="text-4xl font-bold font-headline text-primary text-shadow-cyber">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're here to help. Send us a message and we'll get back to you as soon as possible.
            </p>
        </div>
      
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4 group futuristic-card p-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <detail.icon className="w-6 h-6 text-primary mt-1" />
                  </div>
                  {detail.href !== '#' ? (
                    <a href={detail.href} className="text-lg hover:text-primary transition-colors flex-1">{detail.value}</a>
                  ) : (
                    <span className="text-lg flex-1">{detail.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113998.81604539656!2d80.85966374335936!3d26.848882000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd00b299f445%3A0x10fc97615b81a7b!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678886565345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="glass-card p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold mb-6 font-headline text-center">Send a Message</h2>
            <ContactForm defaultService={service} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ContactPageComponent />
    </Suspense>
  )
}

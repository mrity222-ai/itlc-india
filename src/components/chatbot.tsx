
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function Chatbot() {
  const whatsappNumber = "+919532341000";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button asChild size="icon" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg">
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-7 h-7" />
        </Link>
      </Button>
    </div>
  );
}

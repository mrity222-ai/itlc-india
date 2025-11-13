
"use client";

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ContactForm } from '@/components/contact-form';

export function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if the popup has been shown before
    const hasShown = sessionStorage.getItem('enquiryPopupShown');

    if (!hasShown) {
        const timer = setTimeout(() => {
            setIsOpen(true);
            sessionStorage.setItem('enquiryPopupShown', 'true');
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Have a Question?</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <ContactForm defaultService={null} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

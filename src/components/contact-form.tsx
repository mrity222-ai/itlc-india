
"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SERVICES, CAREERS } from '@/lib/constants';
import { Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
    </Button>
  );
}

const initialState: ContactFormState = {
  message: '',
  isSuccess: false,
  isError: false,
};

export function ContactForm({ defaultService }: { defaultService: string | null }) {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const serviceDefaultValue = defaultService || SERVICES[0].title;

  useEffect(() => {
    if (state.isSuccess) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    }
    if (state.isError && !state.issues) {
      toast({
        variant: 'destructive',
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>
      <div>
        <Label htmlFor="service">Service of Interest</Label>
        <Select name="service" defaultValue={serviceDefaultValue}>
            <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
            {SERVICES.map((service) => (
                <SelectItem key={service.title} value={service.title}>
                {service.title}
                </SelectItem>
            ))}
            {CAREERS.map((job) => (
                <SelectItem key={job.title} value={job.title}>
                {job.title} (Career)
                </SelectItem>
            ))}
            </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required minLength={10} />
      </div>

      {state.isError && state.issues && !state.issues.isValid && (
        <Alert variant="destructive">
          <AlertTitle>Suggestion from AI</AlertTitle>
          <AlertDescription>{state.issues.suggestions}</AlertDescription>
        </Alert>
      )}

      <SubmitButton />
    </form>
  );
}


"use server";

import { z } from 'zod';
import { aiChatbot } from '@/ai/flows/ai-powered-chatbot';
import { intelligentContactForm } from '@/ai/flows/intelligent-contact-form';

// Chatbot Action
export async function getChatbotResponse(history: { role: 'user' | 'model', content: string }[], newMessage: string) {
  try {
    const response = await aiChatbot({ query: newMessage });
    return { success: true, message: response.response };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Sorry, I am having trouble connecting. Please try again later.' };
  }
}

// Contact Form Action
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(1, "Phone number is required."),
  service: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  isSuccess: boolean;
  isError: boolean;
  issues?: {
    isValid: boolean;
    suggestions: string;
    summary: string;
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your inputs.',
      isSuccess: false,
      isError: true,
    };
  }

  try {
    const aiResponse = await intelligentContactForm(validatedFields.data);

    if (aiResponse.isValid) {
      // Here you would typically send an email, save to a database, etc.
      console.log('Form submitted successfully:', aiResponse.summary);
      return {
        message: 'Thank you for your message! We will get back to you shortly.',
        isSuccess: true,
        isError: false,
        issues: aiResponse,
      };
    } else {
      return {
        message: 'Please review your submission.',
        isSuccess: false,
        isError: true,
        issues: aiResponse,
      };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      isSuccess: false,
      isError: true,
    };
  }
}

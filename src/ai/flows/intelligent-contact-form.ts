'use server';

/**
 * @fileOverview Implements a smart contact form with AI-powered auto-fill suggestions and real-time validation.
 *
 * - intelligentContactForm - A function that handles the contact form submission and processing.
 * - IntelligentContactFormInput - The input type for the intelligentContactForm function.
 * - IntelligentContactFormOutput - The return type for the intelligentContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentContactFormInputSchema = z.object({
  name: z.string().describe('The name of the user.'),
  email: z.string().email().describe('The email address of the user.'),
  phone: z.string().describe('The phone number of the user.'),
  service: z.string().describe('The service the user is interested in.'),
  message: z.string().describe('The message from the user.'),
});
export type IntelligentContactFormInput = z.infer<typeof IntelligentContactFormInputSchema>;

const IntelligentContactFormOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the form data is valid.'),
  suggestions: z.string().describe('Suggestions for improving the form data.'),
  summary: z.string().describe('A summary of the form data.'),
});
export type IntelligentContactFormOutput = z.infer<typeof IntelligentContactFormOutputSchema>;

export async function intelligentContactForm(input: IntelligentContactFormInput): Promise<IntelligentContactFormOutput> {
  return intelligentContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentContactFormPrompt',
  input: {schema: IntelligentContactFormInputSchema},
  output: {schema: IntelligentContactFormOutputSchema},
  prompt: `You are an AI assistant that validates and provides suggestions for a contact form submission.

  Analyze the following contact form data and determine if it is valid. Provide suggestions for improving the data if necessary.
  Also, provide a summary of the form data.

  Name: {{{name}}}
  Email: {{{email}}}
  Phone: {{{phone}}}
  Service: {{{service}}}
  Message: {{{message}}}

  Respond in JSON format:
  {
    "isValid": true/false,
    "suggestions": "Suggestions for improving the form data.",
    "summary": "A summary of the form data."
  }`,
});

const intelligentContactFormFlow = ai.defineFlow(
  {
    name: 'intelligentContactFormFlow',
    inputSchema: IntelligentContactFormInputSchema,
    outputSchema: IntelligentContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

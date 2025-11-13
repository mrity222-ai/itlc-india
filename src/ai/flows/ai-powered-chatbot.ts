'use server';

/**
 * @fileOverview Implements an AI-powered chatbot for ITLC India Pvt. Ltd.
 *
 * This file defines a Genkit flow that integrates an AI chatbot to provide
 * instant support and query resolution for users, enhancing engagement and satisfaction.
 *
 * @exports {
 *   aiChatbot,
 *   AIChatbotInput,
 *   AIChatbotOutput
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotInputSchema = z.object({
  query: z
    .string()
    .describe('The user query about ITLC India Pvt. Ltd services and products.'),
});
export type AIChatbotInput = z.infer<typeof AIChatbotInputSchema>;

const AIChatbotOutputSchema = z.object({
  response: z
    .string()
    .describe('The AI chatbot response to the user query.'),
});
export type AIChatbotOutput = z.infer<typeof AIChatbotOutputSchema>;

export async function aiChatbot(input: AIChatbotInput): Promise<AIChatbotOutput> {
  return aiChatbotFlow(input);
}

const getAnswer = ai.defineTool({
  name: 'getAnswer',
  description: 'Responds to questions about ITLC India Pvt. Ltd services and products. Only use this tool if the question is directly related to ITLC India Pvt. Ltd..',
  inputSchema: z.object({
    question: z.string().describe('The question to answer.'),
  }),
  outputSchema: z.string().describe('The answer to the question.'),
}, async (input) => {
  const qaPairs = [
    {
      question: 'What services does ITLC India Pvt. Ltd. offer?',
      answer: 'ITLC India Pvt. Ltd. offers Custom Software Development, Cloud Services, E-Commerce Solutions, Generative AI, Cyber Security, Design & Marketing, and Support & Maintenance.',
    },
    {
      question: 'What is ITLC India Pvt. Ltd. vision?',
      answer: 'To be the most trusted technology partner driving digital innovation globally.',
    },
    {
      question: 'What platforms do you use for e-commerce solutions?',
      answer: 'We offer both Shopify and custom platforms for seamless online sales.',
    },
    {
      question: 'What are the benefits of your cloud services?',
      answer: 'Our cloud services are secure, cost-efficient, and scalable, utilizing AWS, Azure, and Google Cloud for deployment and management.',
    },
    {
      question: 'Can you elaborate on your generative AI offerings?',
      answer: 'We provide AI solutions for automation, analytics, and smart decision-making, including AI chatbots and predictive analytics.',
    },
  ];

  const matchedPair = qaPairs.find(pair => pair.question.toLowerCase() === input.question.toLowerCase());
  return matchedPair ? matchedPair.answer : 'I am sorry, I do not have an answer to that question.';
});

const aiChatbotPrompt = ai.definePrompt({
  name: 'aiChatbotPrompt',
  tools: [getAnswer],
  input: {schema: AIChatbotInputSchema},
  output: {schema: AIChatbotOutputSchema},
  prompt: `You are a customer support chatbot for ITLC India Pvt. Ltd. Your goal is to answer user questions about the company's services and products. Use the available tools to answer the question if relevant.\n\nUser Query: {{{query}}}`,
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'aiChatbotFlow',
    inputSchema: AIChatbotInputSchema,
    outputSchema: AIChatbotOutputSchema,
  },
  async input => {
    const {output} = await aiChatbotPrompt(input);
    return output!;
  }
);

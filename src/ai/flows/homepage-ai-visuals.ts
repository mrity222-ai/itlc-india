'use server';

/**
 * @fileOverview Generates AI-driven visuals for the homepage hero section, including a neural network animation.
 *
 * - generateHomepageVisuals - A function that generates the AI visuals.
 * - HomepageVisualsOutput - The return type for the generateHomepageVisuals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HomepageVisualsOutputSchema = z.object({
  imageUrl: z.string().describe('URL of the generated AI visual.'),
});
export type HomepageVisualsOutput = z.infer<typeof HomepageVisualsOutputSchema>;

export async function generateHomepageVisuals(): Promise<HomepageVisualsOutput> {
  return homepageVisualsFlow();
}

const homepageVisualsPrompt = ai.definePrompt({
  name: 'homepageVisualsPrompt',
  output: {schema: HomepageVisualsOutputSchema},
  prompt: `Dark futuristic particle background with purple-blue neon glowing lines flowing like a digital matrix grid, holographic dots connecting like a neural network, smooth motion blur, immersive cyber atmosphere, perfect loop, 4K`,
});

const homepageVisualsFlow = ai.defineFlow(
  {
    name: 'homepageVisualsFlow',
    outputSchema: HomepageVisualsOutputSchema,
  },
  async () => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: homepageVisualsPrompt.prompt,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate AI visual.');
    }

    return {imageUrl: media.url};
  }
);

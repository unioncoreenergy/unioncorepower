'use server';

/**
 * @fileOverview AI-powered smart recommendation flow for energy-saving tips and relevant services.
 *
 * - getSmartRecommendations - A function that provides personalized recommendations based on user data.
 * - SmartRecommendationsInput - The input type for the getSmartRecommendations function.
 * - SmartRecommendationsOutput - The return type for the getSmartRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartRecommendationsInputSchema = z.object({
  energyUsageData: z
    .string()
    .describe('The user energy consumption data, provided as JSON string.'),
  location: z.string().describe('The user location.'),
});
export type SmartRecommendationsInput = z.infer<typeof SmartRecommendationsInputSchema>;

const SmartRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized recommendations for energy-saving tips and relevant services.'),
});
export type SmartRecommendationsOutput = z.infer<typeof SmartRecommendationsOutputSchema>;

export async function getSmartRecommendations(input: SmartRecommendationsInput): Promise<SmartRecommendationsOutput> {
  return smartRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartRecommendationsPrompt',
  input: {schema: SmartRecommendationsInputSchema},
  output: {schema: SmartRecommendationsOutputSchema},
  prompt: `You are an AI assistant specialized in providing personalized recommendations for energy-saving tips and relevant services.

  Based on the user's energy usage data and location, provide tailored recommendations.

  Energy Usage Data: {{{energyUsageData}}}
  Location: {{{location}}}

  Provide recommendations in a clear and concise manner.`,
});

const smartRecommendationsFlow = ai.defineFlow(
  {
    name: 'smartRecommendationsFlow',
    inputSchema: SmartRecommendationsInputSchema,
    outputSchema: SmartRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

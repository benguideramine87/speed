'use server';
/**
 * @fileOverview A personalized travel recommendation AI agent.
 *
 * - getRecommendation - A function that handles the travel recommendation process.
 * - RecommendationInput - The input type for the getRecommendation function.
 * - RecommendationOutput - The return type for the getRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendationInputSchema = z.object({
  prompt: z.string().describe('A description of the ideal vacation.'),
});
export type RecommendationInput = z.infer<typeof RecommendationInputSchema>;

const RecommendationOutputSchema = z.object({
  recommendation: z.string().describe('A personalized travel recommendation based on the prompt.'),
});
export type RecommendationOutput = z.infer<typeof RecommendationOutputSchema>;

export async function getRecommendation(input: RecommendationInput): Promise<RecommendationOutput> {
  return recommendationFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendationFromPromptPrompt',
  input: {schema: RecommendationInputSchema},
  output: {schema: RecommendationOutputSchema},
  prompt: `You are a travel expert. Based on the user's description of their ideal vacation, provide a personalized travel recommendation.

User's description: {{{prompt}}}`,
});

const recommendationFromPromptFlow = ai.defineFlow(
  {
    name: 'recommendationFromPromptFlow',
    inputSchema: RecommendationInputSchema,
    outputSchema: RecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

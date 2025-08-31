 'use server';

/**
 * @fileOverview A legal question and answer AI agent.
 *
 * - legalQA - A function that answers questions about legal topics.
 * - LegalQAInput - The input type for the legalQA function.
 * - LegalQAOutput - The return type for the legalQA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LegalQAInputSchema = z.object({
  question: z.string().describe('The legal question to be answered.'),
});
export type LegalQAInput = z.infer<typeof LegalQAInputSchema>;

const LegalQAOutputSchema = z.object({
  answer: z.string().describe('The answer to the legal question.'),
});
export type LegalQAOutput = z.infer<typeof LegalQAOutputSchema>;

export async function legalQA(input: LegalQAInput): Promise<LegalQAOutput> {
  return legalQAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'legalQAPrompt',
  input: {schema: LegalQAInputSchema},
  output: {schema: LegalQAOutputSchema},
  prompt: `You are an AI model trained on legal knowledge. Your job is to answer the user's legal question as accurately as possible using your knowledge. DO NOT MAKE UP ANSWERS. If you don't know the answer, simply respond that you don't know. If you are able to answer the question, then set the isHealthy output field appropriately.

Question: {{{question}}}`,
});

const legalQAFlow = ai.defineFlow(
  {
    name: 'legalQAFlow',
    inputSchema: LegalQAInputSchema,
    outputSchema: LegalQAOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

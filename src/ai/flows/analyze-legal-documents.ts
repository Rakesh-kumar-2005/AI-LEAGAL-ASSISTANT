'use server';

/**
 * @fileOverview This flow analyzes legal documents to identify key clauses, potential issues, and relevant precedents.
 *
 * - analyzeLegalDocument -  A function that takes legal documents as input and returns its analysis.
 * - AnalyzeLegalDocumentInput - The input type for the analyzeLegalDocument function.
 * - AnalyzeLegalDocumentOutput - The output type for the analyzeLegalDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeLegalDocumentInputSchema = z.object({
  legalDocument: z
    .string()
    .describe("The legal document to be analyzed. It should be passed as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});

export type AnalyzeLegalDocumentInput = z.infer<typeof AnalyzeLegalDocumentInputSchema>;

const AnalyzeLegalDocumentOutputSchema = z.object({
  keyClauses: z.string().describe('A summary of the key clauses identified in the legal document.'),
  potentialIssues: z.string().describe('A list of potential issues identified in the legal document.'),
  relevantPrecedents: z.string().describe('A list of relevant precedents that may apply to the legal document.'),
});

export type AnalyzeLegalDocumentOutput = z.infer<typeof AnalyzeLegalDocumentOutputSchema>;

export async function analyzeLegalDocument(input: AnalyzeLegalDocumentInput): Promise<AnalyzeLegalDocumentOutput> {
  return analyzeLegalDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeLegalDocumentPrompt',
  input: {schema: AnalyzeLegalDocumentInputSchema},
  output: {schema: AnalyzeLegalDocumentOutputSchema},
  prompt: `You are an AI legal assistant tasked with analyzing legal documents.

Analyze the provided legal document, and identify:
- Key clauses within the document.
- Any potential issues or areas of concern.
- Relevant precedents or case law that may be applicable.

Ensure your analysis is thorough and accurate.

Legal Document: {{media url=legalDocument}}`,
});

const analyzeLegalDocumentFlow = ai.defineFlow(
  {
    name: 'analyzeLegalDocumentFlow',
    inputSchema: AnalyzeLegalDocumentInputSchema,
    outputSchema: AnalyzeLegalDocumentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

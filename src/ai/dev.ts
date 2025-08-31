import { config } from 'dotenv';
config();

import '@/ai/flows/analyze-legal-documents.ts';
import '@/ai/flows/legal-q-and-a.ts';
import '@/ai/flows/document-summarization.ts';
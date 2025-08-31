"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { summarizeDocument, type DocumentSummarizationOutput } from "@/ai/flows/document-summarization";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  documentText: z.string().min(50, "Document text must be at least 50 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function SummarizeDocumentForm() {
  const { toast } = useToast();
  const [summaryResult, setSummaryResult] = useState<DocumentSummarizationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSummaryResult(null);
    try {
      const result = await summarizeDocument(data);
      setSummaryResult(result);
    } catch (error) {
      console.error(error);
      toast({
        title: "Summarization Failed",
        description: "There was an error summarizing your document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summarize Document</CardTitle>
        <CardDescription>
          Paste the text of a legal document to generate a concise summary.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="documentText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Document Text</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste your legal document text here..."
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Summarize
            </Button>
          </form>
        </Form>

        {summaryResult && (
          <div className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-wrap">{summaryResult.summary}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

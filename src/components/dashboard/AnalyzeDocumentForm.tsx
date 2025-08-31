"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { analyzeLegalDocument, type AnalyzeLegalDocumentOutput } from "@/ai/flows/analyze-legal-documents";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  file: z.instanceof(FileList).refine((files) => files.length > 0, "A file is required."),
});

type FormValues = z.infer<typeof formSchema>;

const toDataURL = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function AnalyzeDocumentForm() {
  const { toast } = useToast();
  const [analysisResult, setAnalysisResult] = useState<AnalyzeLegalDocumentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const file = data.file[0];
      const dataUrl = await toDataURL(file);
      const result = await analyzeLegalDocument({ legalDocument: dataUrl });
      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analyze Legal Document</CardTitle>
        <CardDescription>
          Upload a legal document to identify key clauses, potential issues, and relevant precedents.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Legal Document</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analyze Document
            </Button>
          </form>
        </Form>

        {analysisResult && (
          <div className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg font-headline">Key Clauses</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{analysisResult.keyClauses}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg font-headline">Potential Issues</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{analysisResult.potentialIssues}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg font-headline">Relevant Precedents</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{analysisResult.relevantPrecedents}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

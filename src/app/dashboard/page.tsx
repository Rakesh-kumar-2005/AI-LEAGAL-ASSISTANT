import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyzeDocumentForm from "@/components/dashboard/AnalyzeDocumentForm";
import SummarizeDocumentForm from "@/components/dashboard/SummarizeDocumentForm";
import LegalQnaForm from "@/components/dashboard/LegalQnaForm";

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
        LegalMind AI Dashboard
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Your personal AI legal assistant.
      </p>

      <Tabs defaultValue="analyze" className="mt-6">
        <TabsList className="grid w-full grid-cols-1 h-full sm:w-auto sm:grid-cols-3">
          <TabsTrigger value="analyze">Analyze Document</TabsTrigger>
          <TabsTrigger value="summarize">Summarize Document</TabsTrigger>
          <TabsTrigger value="qna">Legal Q&A</TabsTrigger>
        </TabsList>
        <TabsContent value="analyze">
          <AnalyzeDocumentForm />
        </TabsContent>
        <TabsContent value="summarize">
          <SummarizeDocumentForm />
        </TabsContent>
        <TabsContent value="qna">
          <LegalQnaForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}

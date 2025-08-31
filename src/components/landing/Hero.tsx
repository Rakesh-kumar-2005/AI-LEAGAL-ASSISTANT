import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
            Your Personal Legal AI Assistant
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore LegalMind AI for easy, quick, and budget-friendly legal help. Empowering consumers and lawyers with AI-driven solutions for all your legal needs.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Button asChild size="lg">
              <Link href="/dashboard">Try for Free</Link>
            </Button>
          </div>
        </div>

        <div className="flow-root mt-16 sm:mt-24">
          <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="https://picsum.photos/1200/800"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              data-ai-hint="app user interface"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}

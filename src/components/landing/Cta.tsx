import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Protect your rights and your wallet.
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Get started with LegalMind AI today and experience the future of legal assistance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/dashboard">Try for Free</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#faq">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

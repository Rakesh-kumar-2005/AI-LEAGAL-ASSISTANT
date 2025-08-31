import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";

const faqData = [
  {
    question: "What is LegalMind AI?",
    answer: "LegalMind AI is an advanced legal assistant powered by artificial intelligence. It's designed to help consumers, students, and legal professionals understand complex legal documents, conduct research, and automate routine tasks, making legal help more accessible and affordable."
  },
  {
    question: "Who is this platform for?",
    answer: "Our platform is for everyone. Whether you're a consumer trying to understand a contract, a student researching for a paper, a solo lawyer managing cases, or a large law firm looking to boost productivity, LegalMind AI adapts to your specific needs."
  },
  {
    question: "What languages and jurisdictions are supported?",
    answer: "LegalMind AI is designed to work with documents in English and supports major legal jurisdictions, primarily focusing on US law. We are continuously expanding our capabilities to include more languages and legal systems."
  },
  {
    question: "How do I start using LegalMind AI?",
    answer: "Getting started is easy! Just click on the 'Try for Free' button, sign up for an account, and you can immediately start analyzing documents, asking legal questions, or using our other powerful features. No credit card is required for the free trial."
  },
  {
    question: "Can I receive a refund if I'm not satisfied?",
    answer: "Yes, we offer a money-back guarantee. If you're not satisfied with our service within the first 14 days of your subscription, you can request a full refund. Your satisfaction is our priority."
  },
  {
    question: "Will AI replace lawyers?",
    answer: "AI is a powerful tool designed to assist, not replace, legal professionals. It enhances efficiency by automating repetitive tasks, providing quick insights, and making legal information more accessible. The critical thinking, ethical judgment, and client advocacy of a human lawyer remain irreplaceable."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
            <Badge variant="outline">FAQ</Badge>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Have a question?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Browse through our frequently asked questions. If you can't find the answer you're looking for, please don't hesitate to contact us.
            </p>
        </div>
        <div className="max-w-4xl mx-auto mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-medium font-headline text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

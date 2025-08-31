import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, DollarSign, Globe, Lock, Rocket, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    icon: Zap,
    title: "Internet-Powered",
    description: "Rapid web research, completing hours of analysis in seconds to provide you with the most current legal precedents and information."
  },
  {
    icon: Briefcase,
    title: "AI Document Handling",
    description: "The fastest way to summarize agreements, convert images to text, translate documents, and manage all your legal paperwork."
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "We stand firm on privacy, ensuring that your data and conversations remain secure and anonymous with enterprise-grade encryption."
  },
  {
    icon: Rocket,
    title: "75% Time Saved",
    description: "Automate routine tasks and legal research, freeing up valuable time for you to focus on strategy and high-value work."
  },
  {
    icon: DollarSign,
    title: "90% Cost Reduction",
    description: "Dramatically reduce expenses on legal services with our efficient, AI-powered platform, making legal help affordable."
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description: "Our dedicated customer support team is always available to assist you with any questions about the platform."
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
            <Badge variant="outline">Features</Badge>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Features of Legal AI
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore features that boost your productivity. From document automation to advanced research, we've got the hard work covered.
            </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

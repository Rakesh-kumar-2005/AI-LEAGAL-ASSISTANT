import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Badge } from "../ui/badge";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Freelancer",
    avatar: "https://picsum.photos/seed/sarah/40/40",
    text: "Navigating through legal jargon was a maze until AI Lawyer came to the rescue. Now, I get to understand complex terms in simple language, making my life a lot easier."
  },
  {
    name: "Maria Davis",
    role: "Consumer Rights Advocate",
    avatar: "https://picsum.photos/seed/maria/40/40",
    text: "I've been able to draft consumer complaint letters effortlessly. It’s amazing how it simplifies the process and provides a professional touch to all my correspondence."
  },
  {
    name: "Elizabeth Martin",
    role: "Litigation Lawyer",
    avatar: "https://picsum.photos/seed/elizabeth/40/40",
    text: "The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer."
  },
  {
    name: "Barbara Smith",
    role: "Entrepreneur",
    avatar: "https://picsum.photos/seed/barbara/40/40",
    text: "I'm amazed by the instant help it provides. It's like having a online lawyer, always willing to help with everything from clarifying a clause to writing a letter of termination."
  },
  {
    name: "Rebecca Adams",
    role: "Law Student",
    avatar: "https://picsum.photos/seed/rebecca/40/40",
    text: "Being a law student, I constantly find myself buried under piles of case laws and briefs. AI Lawyer has been a beacon, assisting me with research writing and case briefs, making my academic journey less daunting."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary/5 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
            <Badge variant="outline">Testimonials</Badge>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                What our users think
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Find out how our platform has changed the legal services experience for diverse users.
            </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
                      </div>
                      <p className="flex-grow mb-6 text-muted-foreground">{testimonial.text}</p>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} data-ai-hint="person face" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

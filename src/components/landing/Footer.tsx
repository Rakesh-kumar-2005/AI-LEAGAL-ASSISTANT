import { Scale, Twitter, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary/5">
      <div className="container py-12 lg:py-16">
        <div className="pb-12 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">LegalMind AI</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your personal AI legal assistant for easy, quick, and budget-friendly help.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold leading-6 text-foreground font-headline">{section.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} LegalMind AI. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

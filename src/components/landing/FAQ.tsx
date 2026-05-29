
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface FAQItem {
  q: string;
  a: string | ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: "Does it bleach?",
    a: "We understand your concern about bleaching. Saam Face Cream is designed to address a range of skin concerns, promoting an evenly toned appearance without any bleaching effects. You can trust its dermatologist-tested and certified safe formulation to deliver noticeable results while maintaining your natural skin tone."
  },
  {
    q: "Can I get it in a pharmacy?",
    a: "We are an online store. However, we have agents that distribute nationwide. So, you may never find it in a pharmacy, but you can get it delivered to your doorstep once you place an order for it."
  },
  {
    q: "Is it effective?",
    a: "With the feedback we have received so far, we are confident enough to say that Saam Face Cream is a very effective product. So, feel free to try it and also recommend it to others. The results you get will be your own testimony."
  },
  {
    q: "Does it really work?",
    a: "Certainly, Saam Face Cream works. Customers comment about the visible reduction of fine lines, the smoothing of wrinkles, and the diminished dullness. This is a testament to the product’s effectiveness and reliability."
  },
  {
    q: "How do I use it?",
    a: (
      <div className="space-y-4">
        <p>Follow our three-step guide for best results:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Cleanse</strong> – Ensure your face is clean and dry.</li>
          <li><strong>Apply the cream</strong> on your face and neck area. Use an appropriate amount and rub evenly until absorbed.</li>
          <li><strong>Twice Daily</strong> – Use in the morning and at night as part of your skincare routine.</li>
        </ol>
      </div>
    )
  },
  {
    q: "How/where can I get it?",
    a: "Thanks to our efficient nationwide distribution network, you can enjoy the convenience of ordering online and receiving your product within 2-3 business days. We deliver directly to your doorstep."
  },
  {
    q: "Is it an organic product?",
    a: "Saam Face Cream is carefully formulated with a blend of natural and naturally derived ingredients, chosen for their skin-loving properties. We prioritize ingredients that are both effective and safe."
  },
  {
    q: "How soon can I see results?",
    a: "Individual results may vary, but many users experience a noticeable glow and improved hydration within just a few days of starting Saam Face Cream."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Common Questions</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Frequently Asked <span className="accent-italic">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-primary/10 py-2">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

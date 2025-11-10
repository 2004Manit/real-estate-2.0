import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I search for properties on Estatein?",
      answer: "Learn how to use our user-friendly search tools to find properties that match your criteria. You can filter by location, price range, property type, number of bedrooms, and more. Our advanced search features help you narrow down your options quickly and efficiently.",
    },
    {
      question: "What documents do I need to sell my property through Estatein?",
      answer: "Find out about the necessary documentation for listing your property with us. Typically, you'll need proof of ownership, property tax receipts, building permits, and any relevant property inspection reports. Our team will guide you through the entire documentation process.",
    },
    {
      question: "How can I contact an Estatein agent?",
      answer: "Discover the different ways you can get in touch with our experienced agents. You can reach us through our contact form, phone, email, or schedule an in-person meeting at one of our offices. We're here to answer all your questions and guide you through your real estate journey.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All FAQ's
          </Button>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4 animate-fade-in-up stagger-1"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline">View All FAQ's</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

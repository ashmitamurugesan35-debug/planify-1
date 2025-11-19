"use client"

import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LifeBuoy, Mail } from "lucide-react";

const faqs = [
  {
    question: "How do I create a new task?",
    answer: "You can create a new task by clicking the '+' button on the 'Tasks & Activities' page. You can choose between a quick add or an advanced mode for more details."
  },
  {
    question: "Can I sync my schedule with other calendars?",
    answer: "Yes, you can import and export your data in ICS format from the 'Tools > Data Import/Export' section, which is compatible with most calendar applications."
  },
  {
    question: "How does the AI schedule optimization work?",
    answer: "Our AI analyzes your current schedule, tasks, and preferences to suggest better time slots, helping you make the most of your free hours and focus on what's important."
  },
  {
    question: "How can I change the theme?",
    answer: "You can switch between light and dark mode in 'Tools > Settings > Theme'."
  }
];

export default function HelpCenterPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
        <p className="text-muted-foreground mt-2">How can we help you today?</p>
        <div className="mt-6 max-w-md mx-auto">
          <Input placeholder="Search for answers..." />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-center">Still need help?</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <LifeBuoy className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle>Feature Tour</CardTitle>
                        <CardDescription>Get a guided walkthrough of the app's main features.</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <Button className="w-full">Start Interactive Tour</Button>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle>Contact Support</CardTitle>
                        <CardDescription>Get in touch with our support team directly.</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <Button className="w-full">Email Us</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

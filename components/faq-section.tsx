"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const faqs = [
    {
      question: "Who can participate in Nexify?",
      answer: "Nexify is open to University Students of all years. Whether you're a coding novice or an experienced developer, everyone is welcome to join. We encourage diversity and teams with mixed skill sets."
    },

    {
    question: "What are the prizes?",
    answer: "The total prize pool is worth ₹50,000, with a split of ₹30000 monetary and ₹20000 in goodies. The Event will have three winners: 1st place: ₹15,000 2nd place: ₹10,000  3rd place: ₹5,000"
    },
    {
      question: "Do I need to have a team before registering?",
      answer: "Yes, you should register with a team of 2-4 members. "
    },
    {
      question: "Is there a registration fee?",
      answer: "No, Nexify is completely free to attend. We provide meals, snacks, workspace, internet, and swag at no cost to participants, thanks to our generous sponsors."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any hardware you plan to work with, and personal items for an overnight stay (toothbrush, sleeping bag, etc.). We'll provide food, drinks, and a comfortable hacking environment."
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "No, all coding and design work must begin at the hackathon. You can brainstorm ideas beforehand, but implementation should start when the hacking period officially begins."
    },
    // {
    //   question: "When will the themes be released?",
    //   answer: "The Themes will be released 1 week prior to the event, keep an eye out on our social media channels for hints and updates."
    // },
    {
      question: "What kind of projects can I build?",
      answer: "You can refer to the Themes Section for ideas. Projects can be web apps, mobile apps, hardware projects, or anything innovative that solves a problem. We encourage creativity and originality."
    },
    {
      question: "Is Nexify an in-person or virtual event?",
      answer: "Nexify 2025 is in-person event held at School of Engineering Campus at Sushant University, Gurugram."
    },
    {
      question: "How are projects judged?",
      answer: "Projects are evaluated based on innovation, technical complexity, design/UX, practicality, and presentation quality. Our judging panel includes industry professionals, sponsors, and tech experts."
    },
    {
      question: "I don't have much coding experience. Can I still participate?",
      answer: "Absolutely! Nexify is for everyone, regardless of experience level. We have beginner-friendly workshops, mentors to guide you, and prizes specifically for newcomers. It's a great learning opportunity!"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Questions</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Everything you need to know about Nexify. Can't find your answer? Contact us at
            <br /> 
            <a href="mailto:zenithsushant.events@gmail.com" className="text-purple-500 hover:underline">
              zenithsushant.events@gmail.com
            </a>
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-card/50 transition-colors text-left">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="text-lg font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-foreground/80">
                    <div className="pl-8">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <p className="text-lg text-foreground/80">
              Still have questions? Reach out to us at{' '}
              <a href="mailto:zenithsushant.events@gmail.com" className="text-purple-500 hover:underline">
                zenithsushant.events@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
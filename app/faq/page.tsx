"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What makes The Glowgem different from other gemstone dealers?",
        a: "With over 30 years of experience, we specialize exclusively in natural, untreated coloured gemstones. Every piece in our collection is certified by leading gemological institutes like GIA, and we offer personalized consultations to match you with the perfect gemstone for your needs.",
      },
      {
        q: "Do you offer appointments for viewings?",
        a: "Yes, we operate by appointment only to ensure each client receives personalized attention. Contact us to schedule a private viewing at our London showroom or arrange a virtual consultation.",
      },
      {
        q: "What certifications do your gemstones have?",
        a: "All our gemstones come with certification from leading gemological institutes including GIA (Gemological Institute of America), AGL (American Gemological Laboratories), Gübelin, and SSEF. Each certificate verifies the gemstone's authenticity, origin, and any treatments.",
      },
    ],
  },
  {
    category: "Purchasing",
    questions: [
      {
        q: "How do I purchase a gemstone?",
        a: "We recommend scheduling a consultation first so we can understand your requirements. Once you've selected a piece, we'll guide you through the purchase process, including verification of certification and secure delivery arrangements.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we offer secure, insured international shipping to most countries. All shipments include full insurance coverage and tracking. For high-value pieces, we can arrange personal delivery or collection.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, major credit cards, and can accommodate other payment arrangements for significant purchases. All transactions are secure and confidential.",
      },
      {
        q: "Can you source a specific gemstone for me?",
        a: "Absolutely. Our extensive network of trusted sources worldwide allows us to locate specific gemstones based on your requirements. Simply share your specifications with us, and we'll conduct a thorough search.",
      },
    ],
  },
  {
    category: "Gemstones",
    questions: [
      {
        q: "What does 'natural' and 'untreated' mean?",
        a: "A natural gemstone is one that formed in the earth without human intervention. 'Untreated' means the gemstone has not undergone any enhancements like heating, irradiation, or chemical treatments. Our collection focuses on these premium specimens.",
      },
      {
        q: "How do I care for my gemstones?",
        a: "Each gemstone has specific care requirements. Generally, avoid exposure to chemicals, extreme temperatures, and store separately to prevent scratching. We provide detailed care instructions with every purchase.",
      },
      {
        q: "Are coloured gemstones a good investment?",
        a: "Investment-grade natural coloured gemstones have historically appreciated in value, particularly rare specimens from renowned origins. We recommend reading our founder's book 'Investing in Gemstones' for comprehensive guidance.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        q: "Do you offer gemstone appraisals?",
        a: "Yes, we provide professional appraisal services for natural coloured gemstones. Our appraisals are conducted by certified gemologists and can be used for insurance, estate, or sale purposes.",
      },
      {
        q: "Can you help with jewellery design?",
        a: "While we specialize in loose gemstones, we work with select master jewellers who can create bespoke pieces. We can recommend trusted partners for custom jewellery projects.",
      },
      {
        q: "Do you buy gemstones?",
        a: "Yes, we selectively acquire exceptional natural coloured gemstones. If you have pieces you're interested in selling, please contact us for an evaluation.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left"
      >
        <span className="font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");

  const currentFaqs = faqs.find((f) => f.category === activeCategory)?.questions || [];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6 text-center">
          <FadeUp>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Support
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Find answers to common questions about our gemstones, services,
              and purchasing process.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Category tabs */}
            <FadeUp className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Categories
                </h3>
                <div className="space-y-2">
                  {faqs.map((faq) => (
                    <button
                      key={faq.category}
                      onClick={() => setActiveCategory(faq.category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                        activeCategory === faq.category
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary/50"
                      }`}
                    >
                      {faq.category}
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Questions */}
            <div className="lg:col-span-3">
              <FadeUp>
                <h2 className="font-serif text-3xl mb-8">{activeCategory}</h2>
              </FadeUp>
              <StaggerContainer>
                {currentFaqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <FAQItem question={faq.q} answer={faq.a} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Still Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team is here to help. Reach out for personalized assistance
              with any inquiries about our gemstones or services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

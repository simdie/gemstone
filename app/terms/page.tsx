"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, ShoppingBag, Truck, RefreshCw, AlertTriangle, Mail } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const sections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: `By accessing and using The Glowgem website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and customers of The Glowgem. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.`,
  },
  {
    icon: ShoppingBag,
    title: "2. Products and Services",
    content: `All gemstones offered by The Glowgem are natural and certified by recognized gemological laboratories. Product descriptions, images, and specifications are provided in good faith and are as accurate as possible.

Due to the unique nature of gemstones, minor variations in color, clarity, and appearance may exist between the product and images displayed. All gemstones come with certificates of authenticity from recognized institutions such as GIA, AGL, Gübelin, or SSEF.`,
  },
  {
    icon: Scale,
    title: "3. Pricing and Payment",
    content: `All prices are quoted in GBP (British Pounds) unless otherwise stated. Prices are subject to change without notice. Payment must be received in full before dispatch of goods.

We accept bank transfers, major credit cards, and other payment methods as specified during checkout. For high-value purchases, we may require additional verification for security purposes.`,
  },
  {
    icon: Truck,
    title: "4. Shipping and Delivery",
    content: `We offer worldwide shipping via secure, insured courier services. Delivery times vary depending on destination and are estimates only. Risk of loss and title for items pass to you upon delivery.

All shipments are fully insured and require a signature upon delivery. We are not responsible for delays caused by customs, weather, or other circumstances beyond our control.`,
  },
  {
    icon: RefreshCw,
    title: "5. Returns and Refunds",
    content: `We offer a 14-day inspection period from the date of delivery. If you are not completely satisfied with your purchase, you may return it in its original condition for a full refund, less shipping costs.

Items must be returned in their original packaging with all documentation and certificates. Custom or bespoke orders are non-refundable. Refunds will be processed within 14 business days of receiving the returned item.`,
  },
  {
    icon: AlertTriangle,
    title: "6. Limitation of Liability",
    content: `The Glowgem shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products.

Our total liability for any claim arising from these terms shall not exceed the amount paid by you for the specific product or service giving rise to the claim.`,
  },
];

export default function TermsPage() {
  const lastUpdated = "March 1, 2026";

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6">
          <FadeUp>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Legal
              </span>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Terms & <span className="gradient-text">Conditions</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Please read these Terms and Conditions carefully before using our
                website or purchasing from The Glowgem. By using our services, you
                agree to be bound by these terms.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-2xl mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Glowgem Ltd is a company registered in the United Kingdom, 
                specializing in natural coloured gemstones. These Terms and 
                Conditions govern your use of our website at theglowgem.com and 
                any purchases made through our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By placing an order with us, you warrant that you are at least 18 
                years of age and possess the legal authority to enter into a 
                binding contract.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Terms sections */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <StaggerContainer className="max-w-4xl mx-auto space-y-8">
            {sections.map((section) => (
              <StaggerItem key={section.title}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass rounded-3xl p-8 md:p-10"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl">{section.title}</h3>
                  </div>
                  <div className="ml-16 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-2xl mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All content on this website, including text, graphics, logos, images, 
                and software, is the property of The Glowgem Ltd and is protected by 
                intellectual property laws. You may not reproduce, distribute, or 
                create derivative works without our express written consent.
              </p>
              
              <h2 className="font-serif text-2xl mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions shall be governed by and construed in 
                accordance with the laws of England and Wales. Any disputes arising 
                from these terms shall be subject to the exclusive jurisdiction of 
                the courts of England and Wales.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 md:p-12 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have any questions about these Terms and Conditions, please 
                contact our team and we&apos;ll be happy to assist you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

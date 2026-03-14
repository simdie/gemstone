"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, Globe, Mail } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal identification information (Name, email address, phone number, etc.)",
      "Contact information including postal address for shipping purposes",
      "Payment and billing information for transaction processing",
      "Communication records from your interactions with our team",
      "Browsing data and preferences to improve your experience",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To process and fulfill your orders and appointments",
      "To provide personalized gemstone recommendations",
      "To communicate about new collections and exclusive offerings",
      "To improve our services and customer experience",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    icon: Shield,
    title: "Information Protection",
    content: [
      "We implement industry-standard security measures to protect your data",
      "All payment transactions are encrypted using SSL technology",
      "Access to personal information is restricted to authorized personnel only",
      "Regular security audits and updates to our protection systems",
      "Secure data storage with redundant backup systems",
    ],
  },
  {
    icon: Globe,
    title: "Information Sharing",
    content: [
      "We do not sell your personal information to third parties",
      "Information may be shared with trusted partners for order fulfillment",
      "Legal disclosure when required by law or to protect our rights",
      "Anonymized data may be used for analytics and service improvement",
      "Third-party service providers are bound by confidentiality agreements",
    ],
  },
  {
    icon: Lock,
    title: "Your Rights",
    content: [
      "Right to access your personal data we hold",
      "Right to request correction of inaccurate information",
      "Right to request deletion of your personal data",
      "Right to opt-out of marketing communications",
      "Right to data portability where applicable",
    ],
  },
];

export default function PrivacyPage() {
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
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At The Glowgem, we are committed to protecting your privacy and
                ensuring the security of your personal information. This policy
                outlines how we collect, use, and safeguard your data.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-2xl mb-4">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Glowgem Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates theglowgem.com. 
                This Privacy Policy informs you of our policies regarding the collection, 
                use, and disclosure of personal information when you use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website and services, you agree to the collection and use 
                of information in accordance with this policy. We will not use or share 
                your information with anyone except as described in this Privacy Policy.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Policy sections */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <StaggerContainer className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <StaggerItem key={section.title}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass rounded-3xl p-8 md:p-10"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl">{section.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-muted-foreground flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cookies section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-2xl mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your 
                browsing experience, analyze site traffic, and understand where our 
                visitors come from. You can instruct your browser to refuse all cookies 
                or to indicate when a cookie is being sent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Essential cookies are required for the basic functionality of our website. 
                Analytics cookies help us understand how visitors interact with our site. 
                Marketing cookies may be used to deliver relevant advertisements.
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
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have any questions about this Privacy Policy or our data 
                practices, please don&apos;t hesitate to contact us.
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

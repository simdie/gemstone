"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  collections: [
    { name: "Ruby", href: "/collections/ruby" },
    { name: "Sapphire", href: "/collections/sapphire" },
    { name: "Emerald", href: "/collections/emerald" },
    { name: "Turquoise", href: "/collections/turquoise" },
    { name: "Carnelian", href: "/collections/carnelian" },
    { name: "Topaz", href: "/collections/topaz" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Knowledge", href: "/knowledge" },
    { name: "Ethics & Sustainability", href: "/ethics" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Buying Guide", href: "/buying-guide" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/30 to-transparent" />

      <div className="relative container mx-auto px-6 pt-24 pb-8">
        {/* Top section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Discover Your{" "}
            <span className="gradient-text">Perfect Gemstone</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the world&apos;s finest natural coloured gemstones.
            Schedule a private consultation with our expert gemologists.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all group"
          >
            Book Your Appointment
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 border-t border-border/50 pt-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logo.png"
                  alt="The Glowgem Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">
                  The Glowgem
                </h3>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  Est. 1994
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Over 30 years of expertise in sourcing and curating the
              world&apos;s finest natural coloured gemstones for discerning
              collectors and connoisseurs.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+447403824831"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +44 740 382 4831
              </a>
              <a
                href="mailto:support@theglowgem.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@theglowgem.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                London, United Kingdom
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} The Glowgem Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <span>Certified Natural Gemstones</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, Calendar, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, GradientBorder } from "@/components/motion";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+44 740 382 4831",
    href: "tel:+447403824831",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@theglowgem.com",
    href: "mailto:support@theglowgem.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, United Kingdom",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "By Appointment Only",
    href: null,
  },
];

const reasons = [
  {
    title: "Gemstone Inquiry",
    description: "Learn about specific gemstones in our collection",
  },
  {
    title: "Private Viewing",
    description: "Schedule an exclusive viewing appointment",
  },
  {
    title: "Investment Consultation",
    description: "Discuss investment-grade gemstones",
  },
  {
    title: "Custom Request",
    description: "Source a specific gemstone for your collection",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          itemInterested: formData.reason,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                By Appointment Only
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Schedule a private consultation to discover exceptional natural
              gemstones curated specifically for you.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <StaggerItem key={item.label}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl glass text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeUp>
              <div className="glass rounded-3xl p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl mb-4">
                      Message Sent Successfully
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for your inquiry. Our team will respond within
                      24 hours to schedule your consultation.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          reason: "",
                          message: "",
                        });
                      }}
                      className="text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-serif text-3xl mb-2">
                      Request Consultation
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we&apos;ll get back to you within 24
                      hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="+44 000 000 0000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Reason for Inquiry *
                        </label>
                        <select
                          required
                          value={formData.reason}
                          onChange={(e) =>
                            setFormData({ ...formData, reason: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select a reason</option>
                          {reasons.map((reason) => (
                            <option key={reason.title} value={reason.title}>
                              {reason.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your gemstone interests..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>

            {/* Side content */}
            <div>
              <FadeUp delay={0.2}>
                <h2 className="font-serif text-3xl mb-6">
                  Why Choose a{" "}
                  <span className="gradient-text">Consultation?</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our private consultations offer a personalized experience where
                  you can explore exceptional gemstones with expert guidance. Whether
                  you&apos;re a collector, investor, or seeking that perfect piece, our
                  team is here to help.
                </p>
              </FadeUp>

              <StaggerContainer className="space-y-4">
                {reasons.map((reason) => (
                  <StaggerItem key={reason.title}>
                    <div className="p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <h3 className="font-medium mb-2">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeUp delay={0.6}>
                <div className="mt-12 p-6 rounded-2xl glass">
                  <h3 className="font-serif text-xl mb-4">
                    Prefer to Call?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our team is available to discuss your requirements directly.
                  </p>
                  <a
                    href="tel:+447403824831"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +44 740 382 4831
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="relative aspect-[3/1] rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/contact/jewelleryy.png"
                alt="Glen Gemstone showroom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-12 max-w-xl">
                  <h3 className="font-serif text-3xl mb-4">
                    Visit Our Showroom
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Experience our collection in person. Private viewings available
                    by appointment in London.
                  </p>
                  <a
                    href="tel:+447403824831"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Schedule Visit
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

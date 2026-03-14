"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { FadeUp, Float, Magnetic } from "@/components/motion";
import { useAppointmentModal } from "@/components/appointment-modal";

export function CTA() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <Float duration={4} distance={5}>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm">By Appointment Only</span>
              </div>
            </Float>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Begin Your{" "}
              <span className="gradient-text">Journey</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the world&apos;s finest natural coloured gemstones.
              Schedule a private consultation with our expert gemologists and
              discover pieces that speak to your unique taste.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic>
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href="tel:+447403824831"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass rounded-full font-medium hover:bg-secondary/50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +44 740 382 4831
                </a>
              </Magnetic>
            </div>
          </FadeUp>

          {/* Trust badges */}
          <FadeUp delay={0.4}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">GIA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">100% Natural Gemstones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Ethically Sourced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Expert Consultation</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

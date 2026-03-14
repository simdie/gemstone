"use client";

import { motion } from "framer-motion";
import { Search, Award, Shield, Gem } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We search the globe for the finest natural gemstones, visiting mines and trusted sources in over 50 countries.",
  },
  {
    number: "02",
    icon: Award,
    title: "Certification",
    description:
      "Every gemstone undergoes rigorous testing and certification by leading gemological institutes like GIA.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Curation",
    description:
      "Our expert gemologists hand-select only the most exceptional specimens that meet our exacting standards.",
  },
  {
    number: "04",
    icon: Gem,
    title: "Presentation",
    description:
      "Each gemstone is presented with complete documentation and personalized consultation service.",
  },
];

export function Process() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/10" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <FadeUp className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            From Mine to <span className="gradient-text">Masterpiece</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our meticulous process ensures every gemstone meets the highest
            standards of quality, authenticity, and ethical sourcing.
          </p>
        </FadeUp>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}

                <div className="relative z-10 p-8 rounded-3xl glass hover:bg-secondary/30 transition-colors">
                  {/* Number */}
                  <span className="absolute -top-4 -right-4 text-8xl font-serif font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

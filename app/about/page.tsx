"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, Shield, Heart } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCounter, GradientBorder, ScaleHover } from "@/components/motion";
import { useAppointmentModal } from "@/components/appointment-modal";

const team = [
  {
    name: "Gary White Beaufort",
    role: "CEO & Founder",
    image: "/images/Garry1.png",
    bio: "Over 30 years of expertise in natural coloured gemstones. Doctorate in economics and certifications from leading gemological institutes worldwide.",
  },
  {
    name: "Alexander Petrov",
    role: "Head Gemologist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alexander.png-ePtKt10BkZueYUcKragrmWRa8g69N6.jpeg",
    bio: "Former GIA instructor with expertise in ruby and sapphire evaluation. 20+ years of field experience in Myanmar and Sri Lanka.",
  },
  {
    name: "Isabella Romano",
    role: "Collections Director",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isabella.png-iaLuq4SLwnMRoFQVKmIi7XRWeSULFQ.jpeg",
    bio: "Specialist in rare and investment-grade gemstones. Previously managed acquisitions for major auction houses.",
  },
  {
    name: "Nicolas Fontaine",
    role: "Client Relations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nicholas.png-eovdHDmadhTxtYO9hVMq2dfS6jZkoR.jpeg",
    bio: "Luxury goods specialist dedicated to providing exceptional client experiences and personalized consultations.",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, from sourcing to certification.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency in our practices, with full documentation for every gemstone.",
  },
  {
    icon: Globe,
    title: "Responsibility",
    description: "Ethical sourcing and sustainable practices that respect communities and environments.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "A genuine love for gemstones that drives us to find the most exceptional specimens.",
  },
];

const milestones = [
  { year: "1994", event: "The Glowgem founded in London" },
  { year: "2001", event: "Established partnerships with Myanmar mines" },
  { year: "2008", event: "Launched investment-grade gemstone division" },
  { year: "2015", event: "Published 'Investing in Gemstones' bestseller" },
  { year: "2020", event: "Expanded global sourcing network to 50+ countries" },
  { year: "2024", event: "30 years of excellence in natural gemstones" },
];

const stats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Gemstones Curated" },
  { value: 50, suffix: "+", label: "Countries Sourced" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  const { openModal } = useAppointmentModal();

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                About The Glowgem
              </span>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                A Legacy of{" "}
                <span className="gradient-text">Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Glowgem stands as a beacon of excellence in the world of
                precious stones, offering a dazzling array of meticulously
                sourced and curated gems. With a rich heritage steeped in the
                artistry of gemstones, we blend expertise, innovation, and
                ethical practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
                >
                  Explore Collections
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-medium hover:bg-secondary/50 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <GradientBorder>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  

                  <Image
                    src="/images/Garry2.png"
                    alt="Gary White Beaufort - CEO"
                    fill
                    className="object-cover"
                    priority
                  />


                </div>
              </GradientBorder>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 1994 by Gary White Beaufort, The Glowgem began
                  as a passion project rooted in a deep fascination with natural
                  coloured gemstones. What started as a small operation sourcing
                  exceptional specimens has grown into one of Europe&apos;s leading
                  authorities in untreated, naturally-colored gemstones.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With certifications from prestigious institutions in the United
                  Kingdom, Switzerland, Germany, and the USA, our founder is
                  recognized as one of the foremost experts in gemstone
                  investment. His groundbreaking book, &quot;Investing in Gemstones,&quot;
                  now in its third edition, has become the definitive guide for
                  collectors and investors alike.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, The Glowgem continues to uphold the highest standards
                  of excellence, offering by-appointment consultations to
                  discerning clients who appreciate the rare beauty and enduring
                  value of natural gemstones.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every aspect of our work and define our
              commitment to excellence.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl glass text-center h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of experts united by a passion for exceptional
              gemstones.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <ScaleHover>
                  <div className="group">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>
                    <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </FadeUp>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <FadeUp key={milestone.year} delay={index * 0.1}>
                  <div
                    className={`relative flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      } pl-8 md:pl-0`}
                    >
                      <div className="text-primary font-serif text-2xl mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2" />

                    {/* Spacer for alignment */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Ready to Begin Your{" "}
              <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a private consultation and discover gemstones that speak
              to your unique taste and collection goals.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

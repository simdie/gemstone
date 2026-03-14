"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Newspaper, BookOpen, Award, Mic, Calendar, ExternalLink } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, GradientBorder } from "@/components/motion";

const pressFeatures = [
  {
    publication: "Financial Times",
    title: "The Rising Value of Natural Coloured Gemstones",
    excerpt: "An in-depth analysis featuring insights from The Glowgem's founder on investment-grade gemstones.",
    date: "December 2025",
    type: "Feature",
    image: "/images/knowledge/investment-gems.jpg",
  },
  {
    publication: "Robb Report",
    title: "Expert Gemologists: The Art of Curation",
    excerpt: "A profile on The Glowgem's approach to sourcing the world's finest natural gemstones.",
    date: "November 2025",
    type: "Profile",
    image: "/images/knowledge/four-cs.jpg",
  },
  {
    publication: "The Telegraph",
    title: "Why Collectors Are Turning to Untreated Gemstones",
    excerpt: "Exploring the growing demand for natural, untreated coloured gemstones with expert commentary.",
    date: "October 2025",
    type: "Interview",
    image: "/images/knowledge/ethical-sourcing.jpg",
  },
  {
    publication: "Christie's Magazine",
    title: "The Legacy of Burmese Rubies",
    excerpt: "A comprehensive look at the history and value of Mogok Valley rubies, featuring The Glowgem collection.",
    date: "September 2025",
    type: "Feature",
    image: "/images/knowledge/burmese-rubies.jpg",
  },
  {
    publication: "Bloomberg",
    title: "Alternative Assets: Gemstones as Investment",
    excerpt: "Financial analysis of the coloured gemstone market with expert insights on portfolio diversification.",
    date: "August 2025",
    type: "Analysis",
    image: "/images/knowledge/certification.jpg",
  },
  {
    publication: "Vogue",
    title: "The New Generation of Gemstone Collectors",
    excerpt: "How younger collectors are discovering the allure of natural coloured gemstones.",
    date: "July 2025",
    type: "Lifestyle",
    image: "/images/knowledge/gem-treatments.jpg",
  },
];

const awards = [
  {
    year: "2025",
    title: "Excellence in Gemstone Expertise",
    organization: "Gemological Association of Great Britain",
  },
  {
    year: "2024",
    title: "Best Coloured Gemstone Dealer",
    organization: "International Gemstone Awards",
  },
  {
    year: "2023",
    title: "Ethical Sourcing Leadership",
    organization: "Responsible Jewellery Council",
  },
  {
    year: "2022",
    title: "Industry Achievement Award",
    organization: "British Jewellers' Association",
  },
];

const publications = [
  {
    title: "Investing in Gemstones",
    edition: "Third Edition",
    year: "2024",
    description: "The definitive guide to gemstone investment, now in its third edition with updated market analysis.",
    image: "/images/knowledge/gemstone-book.jpg",
  },
];

const speakingEngagements = [
  {
    event: "International Gem & Jewellery Show",
    location: "Hong Kong",
    date: "March 2026",
    topic: "The Future of Natural Coloured Gemstones",
  },
  {
    event: "Christie's Collectors Summit",
    location: "London",
    date: "February 2026",
    topic: "Investment-Grade Ruby: A Market Overview",
  },
  {
    event: "GIA Alumni Conference",
    location: "New York",
    date: "January 2026",
    topic: "Ethical Sourcing in the Modern Gemstone Trade",
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <FadeUp>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Press & Media
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
                In the <span className="gradient-text">Spotlight</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Explore our media coverage, industry recognition, and publications. 
                For press inquiries, please contact our media relations team.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeUp className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <Newspaper className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-4xl">Press Coverage</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Featured in leading publications worldwide for our expertise in natural coloured gemstones.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressFeatures.map((item) => (
              <StaggerItem key={item.title}>
                <motion.article
                  whileHover={{ y: -10 }}
                  className="group glass rounded-3xl overflow-hidden h-full flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="text-primary font-medium">{item.publication}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">
                      {item.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-4xl">Awards & Recognition</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Recognized by leading industry organizations for excellence and integrity.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <StaggerItem key={award.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-3xl p-6 text-center h-full"
                >
                  <div className="text-4xl font-serif gradient-text mb-4">{award.year}</div>
                  <h3 className="font-medium mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeUp className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-4xl">Publications</h2>
            </div>
          </FadeUp>

          {publications.map((pub) => (
            <FadeUp key={pub.title}>
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <GradientBorder>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </GradientBorder>
                <div>
                  <span className="text-primary text-sm font-medium tracking-widest uppercase mb-2 block">
                    {pub.edition} • {pub.year}
                  </span>
                  <h3 className="font-serif text-4xl mb-4">{pub.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {pub.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Written by Gudbrand Sigurd, this comprehensive guide covers everything 
                    from understanding gemstone quality factors to building a valuable collection. 
                    Now recognized as the industry standard for gemstone investment education.
                  </p>
                  <Link
                    href="/knowledge"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <Mic className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-4xl">Speaking Engagements</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Our founder and team regularly speak at industry events and conferences worldwide.
            </p>
          </FadeUp>

          <StaggerContainer className="max-w-4xl mx-auto space-y-6">
            {speakingEngagements.map((event) => (
              <StaggerItem key={event.event}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                >
                  <div className="flex items-center gap-3 text-primary">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg mb-1">{event.event}</h3>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {event.topic}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Press Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Media <span className="gradient-text">Inquiries</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                For press inquiries, interview requests, or media assets, please 
                contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:press@theglowgem.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  press@theglowgem.com
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-medium hover:bg-secondary/50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

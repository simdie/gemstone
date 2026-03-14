"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Download, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/motion";

const articles = [
  {
    title: "The Four C's of Coloured Gemstones",
    excerpt: "Understanding colour, clarity, cut, and carat weight in natural gemstones.",
    image: "/images/knowledge/four-cs.jpg",
    category: "Education",
    readTime: "8 min read",
    slug: "four-cs-coloured-gemstones",
  },
  {
    title: "Investment Grade Gemstones",
    excerpt: "A comprehensive guide to evaluating gemstones for investment potential.",
    image: "/images/knowledge/investment-gems.jpg",
    category: "Investment",
    readTime: "12 min read",
    slug: "investment-grade-gemstones",
  },
  {
    title: "Ethical Sourcing in the Gemstone Industry",
    excerpt: "How we ensure responsible and sustainable gemstone sourcing practices.",
    image: "/images/knowledge/ethical-sourcing.jpg",
    category: "Ethics",
    readTime: "6 min read",
    slug: "ethical-sourcing-gemstone-industry",
  },
  {
    title: "Understanding Gemstone Treatments",
    excerpt: "Learn about common treatments and why natural, untreated gems are valuable.",
    image: "/images/knowledge/gem-treatments.jpg",
    category: "Education",
    readTime: "10 min read",
    slug: "understanding-gemstone-treatments",
  },
  {
    title: "The History of Burmese Rubies",
    excerpt: "Exploring the legendary Mogok Valley and its prized pigeon blood rubies.",
    image: "/images/knowledge/burmese-rubies.jpg",
    category: "History",
    readTime: "15 min read",
    slug: "history-burmese-rubies",
  },
  {
    title: "Certification and Authentication",
    excerpt: "Why GIA and other certifications matter for your gemstone purchase.",
    image: "/images/knowledge/certification.jpg",
    category: "Education",
    readTime: "7 min read",
    slug: "certification-authentication",
  },
];

const guides = [
  {
    title: "Gemstone Buying Guide",
    description: "Your comprehensive guide to purchasing natural coloured gemstones",
    icon: BookOpen,
    href: "/buying-guide",
  },
  {
    title: "Investment Portfolio",
    description: "How to build a diversified gemstone investment portfolio",
    icon: Award,
    href: "/contact",
  },
  {
    title: "PDF Catalog",
    description: "Download our latest collection catalog",
    icon: Download,
    href: "/assets/images/home/Glemgemstone.pdf",
  },
];

export default function KnowledgePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6 text-center">
          <FadeUp>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Knowledge Center
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Gemstone <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Expand your knowledge with insights from our expert gemologists.
              From buying guides to investment strategies.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Quick guides */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <StaggerItem key={guide.title}>
                <Link href={guide.href} className="group block">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl glass flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <guide.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {guide.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/knowledge/gemstone-book.jpg"
                  alt="Investing in Gemstones book"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                  Featured Publication
                </span>
                <h2 className="font-serif text-4xl mb-6">
                  Investing in <span className="gradient-text">Gemstones</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gudbrand Sigurd&apos;s groundbreaking book, now in its third
                  edition, serves as the definitive guide to gemstone investment.
                  This bestseller provides deep insights into the world of precious
                  stones, exploring their mineralogical and historical facets while
                  guiding readers on what to seek and offering an overview of price
                  trends.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Comprehensive guide to gemstone evaluation
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Market trends and investment strategies
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Historical and mineralogical insights
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert insights and educational content from our gemology team.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <StaggerItem key={article.title}>
                <ScaleHover>
                  <Link href={`/knowledge/${article.slug}`} className="block group">
                    <div className="glass rounded-3xl overflow-hidden h-full">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {article.readTime}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Have a <span className="gradient-text">Question?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our expert gemologists are available to answer your questions and
              provide personalized guidance on your gemstone journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Our Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

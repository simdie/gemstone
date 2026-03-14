"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Leaf, Users, Globe, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

export default function EthicalSourcingArticlePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6">
          <FadeUp>
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Center
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Ethics
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Ethical Sourcing in the <span className="gradient-text">Gemstone Industry</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                How we ensure responsible and sustainable gemstone sourcing practices throughout our supply chain.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  The Glowgem Experts
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  March 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/knowledge/ethical-sourcing.jpg"
              alt="Ethical Sourcing in the Gemstone Industry"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <FadeUp>
              <p className="lead text-xl text-muted-foreground">
                The beauty of a gemstone should never come at the cost of human welfare or environmental destruction. At The Glowgem, we believe that every stone we offer must meet not only the highest quality standards but also the most stringent ethical requirements.
              </p>

              {/* Pillars */}
              <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Fair Labour</h4>
                  <p className="text-sm text-muted-foreground">Supporting mining communities with fair wages and safe conditions</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Leaf className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Environmental Care</h4>
                  <p className="text-sm text-muted-foreground">Partnering with mines committed to land rehabilitation</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Traceability</h4>
                  <p className="text-sm text-muted-foreground">Complete supply chain transparency from mine to market</p>
                </div>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                The Challenge of Ethical Sourcing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The gemstone industry has historically operated with limited transparency. Stones may pass through numerous hands between mine and retail, making provenance difficult to verify. Artisanal mining, which produces the majority of coloured gemstones, often occurs in regions with limited regulatory oversight.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This complexity doesn&apos;t excuse inaction - it demands greater diligence. After 30 years in the trade, we have developed relationships that allow us to trace our stones back to their sources and verify the conditions under which they were extracted.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Our Ethical Framework
              </h2>
              
              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Direct Mine Relationships</h3>
              <p className="text-muted-foreground leading-relaxed">
                We purchase directly from mining operations we have personally visited and vetted. This direct approach eliminates intermediaries who might obscure problematic practices and ensures fair compensation reaches those who do the difficult work of extraction.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Community Investment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner with mines that invest in their local communities. This includes supporting schools, healthcare facilities, and clean water initiatives in mining regions. When communities benefit from responsible mining, there&apos;s less incentive for exploitative practices.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Environmental Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our partner mines commit to environmental best practices, including proper waste management, water treatment, and land rehabilitation. Small-scale mining, when properly managed, can have minimal environmental impact compared to industrial extraction.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h4 className="font-serif text-xl mb-3 text-foreground">Our Commitments</h4>
                <ul className="space-y-3 text-muted-foreground mb-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>No child labour in any part of our supply chain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Fair wages that exceed local standards for all workers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Safe working conditions with appropriate equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Environmental impact assessments for all partner mines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Complete traceability documentation for every stone</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Certifications and Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We support and adhere to industry initiatives promoting ethical practices:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Responsible Jewellery Council (RJC):</strong> We follow RJC&apos;s Code of Practices for responsible business practices.</li>
                <li><strong className="text-foreground">Kimberley Process:</strong> While designed for diamonds, its principles guide our approach to all gemstones.</li>
                <li><strong className="text-foreground">Fairmined Standards:</strong> We support initiatives bringing fair trade principles to artisanal mining.</li>
              </ul>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                The Value of Ethical Gemstones
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Choosing ethically sourced gemstones isn&apos;t just morally sound - it&apos;s increasingly important for value retention. As consumers become more conscious, stones with verified ethical provenance command premium prices. The story behind a gemstone enhances its meaning and worth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you purchase from The Glowgem, you receive detailed documentation of your stone&apos;s journey from mine to your hands. This transparency isn&apos;t just a certificate - it&apos;s our promise that your beautiful gemstone came into being through ethical practices.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h4 className="font-serif text-xl mb-3 text-foreground">Making a Difference Together</h4>
                <p className="text-muted-foreground mb-0">
                  Every ethically sourced gemstone is a vote for a better industry. By choosing transparent, responsible sources, our clients help drive positive change throughout the gemstone trade. We&apos;re proud to partner with collectors who share our values.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl mb-4">
              Choose <span className="gradient-text">Responsibly</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our collection of ethically sourced gemstones and discover pieces that are as beautiful in origin as they are in appearance.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View Our Collections
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

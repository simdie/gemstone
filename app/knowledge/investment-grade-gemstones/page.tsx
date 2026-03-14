"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, TrendingUp, Shield, Gem } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

export default function InvestmentGradesArticlePage() {
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
                Investment
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Investment Grade <span className="gradient-text">Gemstones</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive guide to evaluating gemstones for investment potential and building a diversified precious stone portfolio.
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
                  12 min read
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
              src="/images/knowledge/investment-gems.jpg"
              alt="Investment Grade Gemstones"
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
                In an era of economic uncertainty, high-quality coloured gemstones have emerged as a compelling alternative asset class. Unlike stocks or bonds, these tangible assets combine aesthetic pleasure with genuine investment potential, offering portfolio diversification and protection against inflation.
              </p>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Historical Appreciation</h4>
                  <p className="text-sm text-muted-foreground">Top-quality gemstones have shown consistent value growth over decades</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Inflation Hedge</h4>
                  <p className="text-sm text-muted-foreground">Tangible assets that maintain value during economic turbulence</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Gem className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Portable Wealth</h4>
                  <p className="text-sm text-muted-foreground">Concentrated value that can be easily stored and transported</p>
                </div>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                What Makes a Gemstone Investment-Grade?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Not all gemstones are suitable for investment. Investment-grade stones represent the top tier of quality and rarity, typically comprising less than 1% of all gemstones mined. These exceptional specimens meet stringent criteria:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Exceptional Quality:</strong> Stones must exhibit outstanding colour, clarity, and cut - falling into the top grades of their type.</li>
                <li><strong className="text-foreground">Natural and Untreated:</strong> While heat treatment is accepted for some stones, the most valuable investment pieces are completely natural.</li>
                <li><strong className="text-foreground">Certified Provenance:</strong> Documentation from respected laboratories (GIA, AGL, Gubelin, SSEF) is essential.</li>
                <li><strong className="text-foreground">Desirable Size:</strong> Generally, investment stones should be above a certain carat weight - typically 2+ carats for rubies, 5+ for sapphires.</li>
              </ul>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                The &quot;Big Three&quot; Investment Gemstones
              </h2>
              
              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Rubies: The King of Gems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fine rubies, particularly those from Myanmar&apos;s Mogok Valley, consistently command the highest prices per carat of any coloured gemstone. The legendary &quot;pigeon blood&quot; colour - a vivid red with a subtle blue fluorescence - remains the most sought-after. In recent years, fine Burmese rubies have appreciated by 6-8% annually.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Blue Sapphires: Timeless Elegance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kashmir sapphires, though virtually unavailable from their original source since the early 1900s, set the standard for the species. Their velvety, cornflower blue continues to break auction records. Sri Lankan (Ceylon) and Burmese sapphires also represent excellent investment opportunities.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Emeralds: The Collector&apos;s Choice</h3>
              <p className="text-muted-foreground leading-relaxed">
                Colombian emeralds from the Muzo and Chivor mines define the ideal: a vivid, slightly bluish-green with moderate inclusions. Despite their relative softness, fine emeralds have shown remarkable appreciation, particularly specimens with confirmed Colombian origin.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h4 className="font-serif text-xl mb-3 text-foreground">Market Performance</h4>
                <p className="text-muted-foreground mb-0">
                  Over the past 30 years, top-quality rubies have appreciated approximately 7% annually, outperforming gold and many traditional investments. The key is focusing on quality over quantity - a single exceptional stone will outperform multiple lower-grade specimens.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Beyond the Big Three
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sophisticated investors are increasingly looking beyond traditional choices:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Alexandrite:</strong> The finest colour-change alexandrites are rarer than diamonds and command extraordinary prices.</li>
                <li><strong className="text-foreground">Padparadscha Sapphires:</strong> These pink-orange sapphires from Sri Lanka are among the rarest gemstones in existence.</li>
                <li><strong className="text-foreground">Paraiba Tourmalines:</strong> Discovered in 1989, these electric blue-green tourmalines have seen dramatic appreciation.</li>
                <li><strong className="text-foreground">Fine Spinels:</strong> Long undervalued, top-quality red spinels are gaining recognition as ruby alternatives.</li>
              </ul>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Building Your Portfolio
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A well-structured gemstone portfolio should balance risk and potential return. Consider allocating:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Core Holdings (60%):</strong> Investment-grade rubies, sapphires, and emeralds with impeccable documentation.</li>
                <li><strong className="text-foreground">Growth Potential (30%):</strong> Exceptional specimens of rarer varieties that show appreciation potential.</li>
                <li><strong className="text-foreground">Speculative (10%):</strong> Emerging varieties or unusual specimens with significant upside potential.</li>
              </ul>

              <div className="my-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h4 className="font-serif text-xl mb-3 text-foreground">The Glowgem Investment Service</h4>
                <p className="text-muted-foreground mb-0">
                  Our investment advisory service helps collectors build portfolios tailored to their goals. With 30 years of market experience, we provide access to exceptional stones, authentication services, and ongoing market guidance. Every investment-grade stone comes with comprehensive documentation and our authenticity guarantee.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Essential Considerations
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Long-term Horizon:</strong> Gemstone investment typically requires a 5-10 year minimum holding period to realise optimal returns.</li>
                <li><strong className="text-foreground">Proper Storage:</strong> Professional safe storage with appropriate insurance is essential.</li>
                <li><strong className="text-foreground">Documentation:</strong> Maintain comprehensive records including certificates, purchase receipts, and photographs.</li>
                <li><strong className="text-foreground">Exit Strategy:</strong> Consider how you will eventually sell - auction houses, dealers, or private sales each have merits.</li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl mb-4">
              Start Your <span className="gradient-text">Investment Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how our expert team can help you build a gemstone portfolio aligned with your investment objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

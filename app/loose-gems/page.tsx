"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Filter, MessageCircle, ChevronDown } from "lucide-react";
import { FadeUp, GradientBorder } from "@/components/ui/animations";
import { ContactModal } from "@/components/contact-modal";

const gemCategories = [
  "All Gems",
  "Ruby",
  "Sapphire",
  "Emerald",
  "Diamond",
  "Rare Collectors",
];

const gemstones = [
  {
    id: 1,
    name: "Burmese Pigeon Blood Ruby",
    category: "Ruby",
    origin: "Myanmar",
    carat: "3.45 ct",
    certification: "GIA Certified",
    image: "/images/gems/ruby.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Kashmir Blue Sapphire",
    category: "Sapphire",
    origin: "Kashmir",
    carat: "5.21 ct",
    certification: "SSEF Certified",
    image: "/images/gems/sapphire.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Colombian Muzo Emerald",
    category: "Emerald",
    origin: "Colombia",
    carat: "4.78 ct",
    certification: "Gübelin Certified",
    image: "/images/gems/emerald.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Persian Turquoise Cabochon",
    category: "Rare Collectors",
    origin: "Iran",
    carat: "12.30 ct",
    certification: "GIA Certified",
    image: "/images/gems/turquoise.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Imperial Topaz",
    category: "Rare Collectors",
    origin: "Brazil",
    carat: "8.92 ct",
    certification: "GIA Certified",
    image: "/images/gems/topaz.jpg",
    featured: false,
  },
  {
    id: 6,
    name: "Red Spinel",
    category: "Rare Collectors",
    origin: "Tanzania",
    carat: "2.87 ct",
    certification: "SSEF Certified",
    image: "/images/gems/spinel.jpg",
    featured: true,
  },
  {
    id: 7,
    name: "Natural Carnelian",
    category: "Rare Collectors",
    origin: "India",
    carat: "15.44 ct",
    certification: "GIA Certified",
    image: "/images/gems/carnelian.jpg",
    featured: false,
  },
  {
    id: 8,
    name: "Pakistani Peridot",
    category: "Rare Collectors",
    origin: "Pakistan",
    carat: "6.23 ct",
    certification: "GIA Certified",
    image: "/images/gems/peridot.jpg",
    featured: false,
  },
  {
    id: 9,
    name: "Siberian Amethyst",
    category: "Rare Collectors",
    origin: "Russia",
    carat: "9.15 ct",
    certification: "GIA Certified",
    image: "/images/gems/amethyst.jpg",
    featured: false,
  },
  {
    id: 10,
    name: "Tanzanite",
    category: "Rare Collectors",
    origin: "Tanzania",
    carat: "7.82 ct",
    certification: "GIA Certified",
    image: "/images/gems/tanzanite.jpg",
    featured: true,
  },
  {
    id: 11,
    name: "Santa Maria Aquamarine",
    category: "Rare Collectors",
    origin: "Brazil",
    carat: "11.34 ct",
    certification: "GIA Certified",
    image: "/images/gems/aquamarine.jpg",
    featured: false,
  },
  {
    id: 12,
    name: "Golden Citrine",
    category: "Rare Collectors",
    origin: "Brazil",
    carat: "18.67 ct",
    certification: "GIA Certified",
    image: "/images/gems/citrine.jpg",
    featured: false,
  },
  {
    id: 13,
    name: "Demantoid Garnet",
    category: "Rare Collectors",
    origin: "Russia",
    carat: "1.92 ct",
    certification: "Gübelin Certified",
    image: "/images/gems/garnet.jpg",
    featured: true,
  },
  {
    id: 14,
    name: "Australian Black Opal",
    category: "Rare Collectors",
    origin: "Australia",
    carat: "8.45 ct",
    certification: "GIA Certified",
    image: "/images/gems/opal.jpg",
    featured: true,
  },
  {
    id: 15,
    name: "Imperial Jadeite",
    category: "Rare Collectors",
    origin: "Myanmar",
    carat: "14.23 ct",
    certification: "GIA Certified",
    image: "/images/gems/jadeite.jpg",
    featured: false,
  },
  {
    id: 16,
    name: "Pink Morganite",
    category: "Rare Collectors",
    origin: "Madagascar",
    carat: "12.87 ct",
    certification: "GIA Certified",
    image: "/images/gems/morganite.jpg",
    featured: false,
  },
  {
    id: 17,
    name: "Watermelon Tourmaline",
    category: "Rare Collectors",
    origin: "Brazil",
    carat: "5.67 ct",
    certification: "GIA Certified",
    image: "/images/gems/tourmaline.jpg",
    featured: false,
  },
  {
    id: 18,
    name: "Alexandrite",
    category: "Rare Collectors",
    origin: "Russia",
    carat: "2.34 ct",
    certification: "Gübelin Certified",
    image: "/images/gems/alexandrite.jpg",
    featured: true,
  },
  {
    id: 19,
    name: "Paraíba Tourmaline",
    category: "Rare Collectors",
    origin: "Brazil",
    carat: "1.89 ct",
    certification: "SSEF Certified",
    image: "/images/gems/paraiba.jpg",
    featured: true,
  },
  {
    id: 20,
    name: "Kunzite",
    category: "Rare Collectors",
    origin: "Afghanistan",
    carat: "22.45 ct",
    certification: "GIA Certified",
    image: "/images/gems/kunzite.jpg",
    featured: false,
  },
];

export default function LooseGemsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Gems");
  const [searchQuery, setSearchQuery] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedGem, setSelectedGem] = useState<string | null>(null);

  const filteredGems = gemstones.filter((gem) => {
    const matchesCategory =
      selectedCategory === "All Gems" || gem.category === selectedCategory;
    const matchesSearch =
      gem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gem.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquire = (gemName: string) => {
    setSelectedGem(gemName);
    setIsContactModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Loose Gemstones
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance">
                Exceptional Natural Gems
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each gemstone in our collection is hand-selected for its exceptional
                quality, natural beauty, and investment potential. All stones are
                certified by the world&apos;s leading gemological laboratories.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-y border-border/50 sticky top-20 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {gemCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search gems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-64 pl-10 pr-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gems Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGems.map((gem, index) => (
              <FadeUp key={gem.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={gem.image}
                      alt={gem.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {gem.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {gem.name}
                    </h3>
                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      <p>Origin: {gem.origin}</p>
                      <p>Weight: {gem.carat}</p>
                      <p>{gem.certification}</p>
                    </div>
                    <button
                      onClick={() => handleInquire(gem.name)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Message for Price
                    </button>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {filteredGems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No gemstones found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Looking for Something Specific?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our collection extends far beyond what&apos;s shown here. Contact us
                with your specific requirements and we&apos;ll source the perfect
                gemstone for you.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Request a Custom Search
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setSelectedGem(null);
        }}
        defaultItem={selectedGem || undefined}
      />
    </main>
  );
}

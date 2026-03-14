"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, SlidersHorizontal, MessageCircle, Gem } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/motion";
import { useAppointmentModal } from "@/components/appointment-modal";

const looseGems = [
  {
    id: 1,
    name: "Burmese Ruby",
    type: "Ruby",
    weight: "3.24 ct",
    origin: "Myanmar",
    image: "/images/featured/burma-ruby.jpg",
    rating: 5,
    certified: true,
    description: "Pigeon blood red color, exceptional clarity",
  },
  {
    id: 2,
    name: "Kashmir Sapphire",
    type: "Sapphire",
    weight: "5.12 ct",
    origin: "Kashmir",
    image: "/images/featured/kashmir-sapphire.jpg",
    rating: 5,
    certified: true,
    description: "Velvety cornflower blue, museum quality",
  },
  {
    id: 3,
    name: "Colombian Emerald",
    type: "Emerald",
    weight: "4.87 ct",
    origin: "Colombia",
    image: "/images/featured/colombian-emerald.jpg",
    rating: 5,
    certified: true,
    description: "Vivid green with excellent transparency",
  },
  {
    id: 4,
    name: "Persian Turquoise",
    type: "Turquoise",
    weight: "8.45 ct",
    origin: "Iran",
    image: "/images/collections/turquoise.jpg",
    rating: 5,
    certified: true,
    description: "Robin egg blue, no matrix",
  },
  {
    id: 5,
    name: "Imperial Topaz",
    type: "Topaz",
    weight: "6.32 ct",
    origin: "Brazil",
    image: "/images/collections/topaz.jpg",
    rating: 5,
    certified: true,
    description: "Golden orange with pink undertones",
  },
  {
    id: 6,
    name: "Natural Carnelian",
    type: "Carnelian",
    weight: "4.89 ct",
    origin: "India",
    image: "/images/collections/carnelian.jpg",
    rating: 5,
    certified: true,
    description: "Deep orange-red, translucent",
  },
  {
    id: 7,
    name: "Russian Alexandrite",
    type: "Alexandrite",
    weight: "2.15 ct",
    origin: "Russia",
    image: "/images/gems/alexandrite.jpg",
    rating: 5,
    certified: true,
    description: "Strong color change, emerald to raspberry",
  },
  {
    id: 8,
    name: "Uruguayan Amethyst",
    type: "Amethyst",
    weight: "7.82 ct",
    origin: "Uruguay",
    image: "/images/gems/amethyst.jpg",
    rating: 5,
    certified: true,
    description: "Deep purple with flashes of red",
  },
  {
    id: 9,
    name: "Brazilian Aquamarine",
    type: "Aquamarine",
    weight: "9.45 ct",
    origin: "Brazil",
    image: "/images/gems/aquamarine.jpg",
    rating: 5,
    certified: true,
    description: "Santa Maria blue, eye clean",
  },
  {
    id: 10,
    name: "Madeira Citrine",
    type: "Citrine",
    weight: "5.67 ct",
    origin: "Brazil",
    image: "/images/gems/citrine.jpg",
    rating: 5,
    certified: true,
    description: "Deep amber orange, naturally heated",
  },
  {
    id: 11,
    name: "Mozambique Garnet",
    type: "Garnet",
    weight: "4.23 ct",
    origin: "Mozambique",
    image: "/images/gems/garnet.jpg",
    rating: 5,
    certified: true,
    description: "Rich burgundy red, exceptional fire",
  },
  {
    id: 12,
    name: "Brazilian Morganite",
    type: "Morganite",
    weight: "8.91 ct",
    origin: "Brazil",
    image: "/images/gems/morganite.jpg",
    rating: 5,
    certified: true,
    description: "Delicate peach pink, flawless",
  },
  {
    id: 13,
    name: "Australian Black Opal",
    type: "Opal",
    weight: "6.78 ct",
    origin: "Australia",
    image: "/images/gems/opal.jpg",
    rating: 5,
    certified: true,
    description: "Brilliant play of color on dark body",
  },
  {
    id: 14,
    name: "Paraiba Tourmaline",
    type: "Tourmaline",
    weight: "1.95 ct",
    origin: "Brazil",
    image: "/images/gems/paraiba.jpg",
    rating: 5,
    certified: true,
    description: "Electric neon blue-green, copper bearing",
  },
  {
    id: 15,
    name: "Pakistani Peridot",
    type: "Peridot",
    weight: "5.34 ct",
    origin: "Pakistan",
    image: "/images/gems/peridot.jpg",
    rating: 5,
    certified: true,
    description: "Vivid lime green, excellent clarity",
  },
  {
    id: 16,
    name: "Burmese Red Spinel",
    type: "Spinel",
    weight: "3.67 ct",
    origin: "Myanmar",
    image: "/images/gems/spinel.jpg",
    rating: 5,
    certified: true,
    description: "Vivid pinkish-red, unheated",
  },
  {
    id: 17,
    name: "Tanzanian Tanzanite",
    type: "Tanzanite",
    weight: "4.56 ct",
    origin: "Tanzania",
    image: "/images/gems/tanzanite.jpg",
    rating: 5,
    certified: true,
    description: "Intense violet-blue, exceptional saturation",
  },
  {
    id: 18,
    name: "Green Tourmaline",
    type: "Tourmaline",
    weight: "5.89 ct",
    origin: "Namibia",
    image: "/images/gems/tourmaline.jpg",
    rating: 5,
    certified: true,
    description: "Chrome green, remarkably clear",
  },
  {
    id: 19,
    name: "Cambodian Blue Zircon",
    type: "Zircon",
    weight: "4.12 ct",
    origin: "Cambodia",
    image: "/images/gems/zircon.jpg",
    rating: 5,
    certified: true,
    description: "Electric blue with diamond-like fire",
  },
  {
    id: 20,
    name: "Afghan Kunzite",
    type: "Kunzite",
    weight: "12.34 ct",
    origin: "Afghanistan",
    image: "/images/gems/kunzite.jpg",
    rating: 5,
    certified: true,
    description: "Soft lilac pink, large clean crystal",
  },
  {
    id: 21,
    name: "Imperial Jade",
    type: "Jade",
    weight: "3.45 ct",
    origin: "Myanmar",
    image: "/images/gems/jade.jpg",
    rating: 5,
    certified: true,
    description: "Vivid green, highly translucent",
  },
  {
    id: 22,
    name: "Afghan Lapis Lazuli",
    type: "Lapis Lazuli",
    weight: "8.90 ct",
    origin: "Afghanistan",
    image: "/images/gems/lapis.jpg",
    rating: 5,
    certified: true,
    description: "Deep royal blue with golden pyrite",
  },
  {
    id: 23,
    name: "Sri Lankan Moonstone",
    type: "Moonstone",
    weight: "5.67 ct",
    origin: "Sri Lanka",
    image: "/images/gems/moonstone.jpg",
    rating: 5,
    certified: true,
    description: "Blue adularescence, transparent body",
  },
  {
    id: 24,
    name: "Tsavorite Garnet",
    type: "Tsavorite",
    weight: "2.89 ct",
    origin: "Kenya",
    image: "/images/gems/tsavorite.jpg",
    rating: 5,
    certified: true,
    description: "Vivid green, rival to emerald",
  },
  {
    id: 25,
    name: "Rhodolite Garnet",
    type: "Rhodolite",
    weight: "6.12 ct",
    origin: "Tanzania",
    image: "/images/gems/rhodolite.jpg",
    rating: 5,
    certified: true,
    description: "Raspberry pink-purple, excellent clarity",
  },
  {
    id: 26,
    name: "Oregon Sunstone",
    type: "Sunstone",
    weight: "4.78 ct",
    origin: "USA",
    image: "/images/gems/sunstone.jpg",
    rating: 5,
    certified: true,
    description: "Golden schiller, copper inclusions",
  },
];

const gemTypes = [
  "All",
  "Ruby",
  "Sapphire",
  "Emerald",
  "Turquoise",
  "Topaz",
  "Carnelian",
  "Alexandrite",
  "Amethyst",
  "Aquamarine",
  "Citrine",
  "Garnet",
  "Morganite",
  "Opal",
  "Tourmaline",
  "Peridot",
  "Spinel",
  "Tanzanite",
  "Zircon",
  "Kunzite",
  "Jade",
  "Moonstone",
];

export default function LooseGemsPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const { openModalWithItem } = useAppointmentModal();

  const filteredGems = looseGems.filter((gem) => {
    return selectedType === "All" || gem.type === selectedType;
  });

  const handleMessageForPrice = (gemName: string) => {
    openModalWithItem(gemName);
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
              <Gem className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Investment Grade Specimens</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Loose <span className="gradient-text">Gemstones</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our exceptional collection of certified natural gemstones, 
              sourced from the world&apos;s most prestigious origins and hand-selected 
              for quality and beauty.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredGems.length} gemstones available
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm hover:bg-secondary/50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter by Type
            </button>
          </div>

          {/* Expanded filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {gemTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedType === type
                            ? "bg-primary/20 text-primary border border-primary"
                            : "glass hover:bg-secondary/50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Gems grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGems.map((gem) => (
              <StaggerItem key={gem.id}>
                <ScaleHover>
                  <div className="group cursor-pointer" onClick={() => handleMessageForPrice(gem.name)}>
                    <div className="glass rounded-3xl overflow-hidden h-full">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={gem.image}
                          alt={gem.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {gem.certified && (
                            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                              Certified
                            </span>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 right-4 flex gap-0.5">
                          {[...Array(gem.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-primary text-primary"
                            />
                          ))}
                        </div>

                        {/* Quick info overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-xs text-foreground/80">{gem.description}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="mb-3">
                          <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                            {gem.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {gem.origin}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground">
                            {gem.type}
                          </span>
                          <span className="text-sm font-medium text-primary">
                            {gem.weight}
                          </span>
                        </div>
                        
                        {/* Message for Price Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMessageForPrice(gem.name);
                          }}
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Message for Price
                        </button>
                      </div>
                    </div>
                  </div>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredGems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No gemstones match your current filter.
              </p>
              <button
                onClick={() => setSelectedType("All")}
                className="mt-4 text-primary hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeUp>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Gem className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">100% Natural</h3>
                <p className="text-muted-foreground text-sm">
                  All our gemstones are natural, untreated specimens certified by leading laboratories.
                </p>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Investment Grade</h3>
                <p className="text-muted-foreground text-sm">
                  Each stone is hand-selected for exceptional quality, color, and clarity.
                </p>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Our gemologists provide personalized consultations for every purchase.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

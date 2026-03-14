"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppointmentModal } from "@/components/appointment-modal";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Collections",
    href: "/collections",
    children: [
      { name: "Ruby", href: "/collections/ruby" },
      { name: "Sapphire", href: "/collections/sapphire" },
      { name: "Emerald", href: "/collections/emerald" },
      { name: "Turquoise", href: "/collections/turquoise" },
      { name: "Carnelian", href: "/collections/carnelian" },
      { name: "Topaz", href: "/collections/topaz" },
    ],
  },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Loose Gems", href: "/products/loose-gems" },
      { name: "Jewellery", href: "/products/jewellery" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Knowledge", href: "/knowledge" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden lg:block bg-secondary/50 border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a
                href="tel:+447403824831"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +44 740 382 4831
              </a>
              <a
                href="mailto:support@theglowgem.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@theglowgem.com
              </a>
            </div>
            <div className="text-xs">
              By Appointment Only | 30+ Years of Excellence
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-14 h-14 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="The Glowgem Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-serif text-xl font-semibold tracking-wide">
                    The Glowgem
                  </h1>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">
                    Natural Coloured Gemstones
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors relative group flex items-center gap-1",
                      "hover:text-primary"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="glass rounded-lg py-2 min-w-[200px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={openModal}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[76px] z-40 lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                  className="mt-4 w-full py-3 bg-primary text-primary-foreground rounded-full text-center font-medium"
                >
                  Book Appointment
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

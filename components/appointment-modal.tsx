"use client";

import { useState, createContext, useContext, ReactNode, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle, ArrowRight, Calendar, ChevronDown, Check } from "lucide-react";

interface AppointmentModalContextType {
  isOpen: boolean;
  prefilledItem: string;
  openModal: () => void;
  openModalWithItem: (item: string) => void;
  closeModal: () => void;
}

const AppointmentModalContext = createContext<AppointmentModalContextType | null>(null);

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext);
  if (!context) {
    throw new Error("useAppointmentModal must be used within AppointmentModalProvider");
  }
  return context;
}

interface AppointmentModalProviderProps {
  children: ReactNode;
}

export function AppointmentModalProvider({ children }: AppointmentModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledItem, setPrefilledItem] = useState("");

  const openModal = () => setIsOpen(true);
  const openModalWithItem = (item: string) => {
    setPrefilledItem(item);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setPrefilledItem("");
  };

  return (
    <AppointmentModalContext.Provider value={{ isOpen, prefilledItem, openModal, openModalWithItem, closeModal }}>
      {children}
      <AppointmentModal />
    </AppointmentModalContext.Provider>
  );
}

const countries = [
  "United Kingdom",
  "United States",
  "United Arab Emirates",
  "Australia",
  "Canada",
  "China",
  "France",
  "Germany",
  "Hong Kong",
  "India",
  "Italy",
  "Japan",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "Spain",
  "Switzerland",
  "Other",
];

const itemsOfInterest = [
  "Ruby",
  "Sapphire",
  "Emerald",
  "Turquoise",
  "Carnelian",
  "Topaz",
  "Custom Request",
  "Investment Consultation",
  "General Inquiry",
];

// Custom Dropdown Component
interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}

function CustomDropdown({ value, onChange, options, placeholder, required }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-all flex items-center justify-between text-left ${
          !value ? "text-muted-foreground" : "text-foreground"
        }`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 rounded-xl bg-secondary/95 backdrop-blur-xl border border-border shadow-2xl overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto scrollbar-thin">
              {options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors hover:bg-primary/10 ${
                    value === option ? "bg-primary/15 text-primary" : "text-foreground"
                  } ${index !== options.length - 1 ? "border-b border-border/30" : ""}`}
                >
                  <span>{option}</span>
                  {value === option && (
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden input for form validation */}
      {required && (
        <input
          type="text"
          value={value}
          required
          onChange={() => {}}
          className="sr-only"
          tabIndex={-1}
        />
      )}
    </div>
  );
}

function AppointmentModal() {
  const { isOpen, prefilledItem, closeModal } = useAppointmentModal();
  const [formData, setFormData] = useState({
    fullName: "",
    itemInterested: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update item when prefilled item changes
  useEffect(() => {
    if (prefilledItem) {
      setFormData(prev => ({ ...prev, itemInterested: prefilledItem }));
    }
  }, [prefilledItem]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
    } catch {
      setError("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeModal();
    // Reset form after animation
    setTimeout(() => {
      setFormData({
        fullName: "",
        itemInterested: "",
        country: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitted(false);
      setError(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass rounded-3xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto border border-border/50 relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4">
                    Message Sent Successfully
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for your inquiry. Our team will respond within 24 hours 
                    to schedule your consultation.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        By Appointment Only
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl mb-2">
                      Book Your <span className="gradient-text">Appointment</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Fill in your details and we will get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Item of Interest *
                      </label>
                      <CustomDropdown
                        value={formData.itemInterested}
                        onChange={(value) =>
                          setFormData({ ...formData, itemInterested: value })
                        }
                        options={itemsOfInterest}
                        placeholder="Select an item"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Country *
                      </label>
                      <CustomDropdown
                        value={formData.country}
                        onChange={(value) =>
                          setFormData({ ...formData, country: value })
                        }
                        options={countries}
                        placeholder="Select your country"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="+44 000 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your gemstone interests..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Button component that triggers the modal
interface BookAppointmentButtonProps {
  className?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary";
}

export function BookAppointmentButton({
  className = "",
  children,
  variant = "primary",
}: BookAppointmentButtonProps) {
  const { openModal } = useAppointmentModal();

  const baseStyles = variant === "primary"
    ? "bg-primary text-primary-foreground hover:bg-primary/90"
    : "glass hover:bg-secondary/50";

  return (
    <button
      onClick={openModal}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${baseStyles} ${className}`}
    >
      {children || "Book Appointment"}
    </button>
  );
}

"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle, ArrowRight, Calendar } from "lucide-react";

interface AppointmentModalContextType {
  isOpen: boolean;
  openModal: () => void;
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

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AppointmentModalContext.Provider value={{ isOpen, openModal, closeModal }}>
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

function AppointmentModal() {
  const { isOpen, closeModal } = useAppointmentModal();
  const [formData, setFormData] = useState({
    fullName: "",
    itemInterested: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="glass rounded-3xl p-8 mx-4 border border-border/50">
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
                      <select
                        required
                        value={formData.itemInterested}
                        onChange={(e) =>
                          setFormData({ ...formData, itemInterested: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select an item</option>
                        {itemsOfInterest.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Country *
                      </label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
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

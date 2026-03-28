import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const plans = [
  {
    name: "Basic Explorer",
    price: "₹6,000",
    courseId: "discover-scuba-diving",
    features: ["Discover Scuba Diving", "Equipment included", "1 guided dive", "Underwater photos", "Certificate of completion"],
    popular: false,
  },
  {
    name: "Premium Adventurer",
    price: "₹9,000",
    courseId: "discover-scuba-diving",
    features: ["2 guided dives", "Equipment included", "Underwater photos & video", "Marine life briefing", "Refreshments included", "Extended bottom time"],
    popular: true,
  },
  {
    name: "Elite Diver",
    price: "₹12,000",
    courseId: "discover-scuba-diving",
    features: ["3 guided dives", "Premium equipment", "Professional photo & video", "Private instructor", "Boat diving experience", "Lunch included", "Priority booking"],
    popular: false,
  },
];

const PricingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const openBooking = (courseId: string, pkgName: string) => {
    setSelectedCourse(courseId);
    setSelectedPkg(pkgName);
    setModalOpen(true);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-heading text-2xl md:text-5xl font-bold mb-3">
            Affordable Scuba Diving <span className="gradient-text">Packages</span>
          </h2>
          <p className="font-body text-foreground/60 text-sm md:text-lg">
            Choose the perfect diving experience for your adventure level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass-card rounded-2xl p-5 md:p-8 relative ${
                plan.popular ? "ring-2 ring-primary shadow-[0_0_40px_hsl(187_80%_48%/0.2)] sm:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground font-body text-[10px] md:text-xs font-bold flex items-center gap-1">
                  <Star size={10} /> Most Popular
                </div>
              )}
              <h3 className="font-heading text-lg md:text-2xl font-bold mb-1">{plan.name}</h3>
              <div className="mb-4 md:mb-6">
                <span className="font-heading text-2xl md:text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="font-body text-foreground/50 text-xs ml-1">/ person</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-foreground/70 text-xs md:text-sm">
                    <Check className="text-primary flex-shrink-0" size={14} /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openBooking(plan.courseId, plan.name)}
                className={`block w-full text-center py-2.5 md:py-3 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(187_80%_48%/0.4)]"
                    : "border border-primary/40 text-foreground hover:bg-primary/10"
                }`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
        <p className="text-center font-body text-foreground/40 text-xs mt-6">
          * Prices exclude 18% GST. Group discounts available.
        </p>
      </div>

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
        defaultPackage={selectedPkg}
      />
    </section>
  );
};

export default PricingSection;

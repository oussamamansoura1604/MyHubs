import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    name: "Basic",
    price: "$499",
    period: "per project",
    features: [
      "Landing Page Design",
      "Responsive Layout",
      "2 Revisions",
      "Basic SEO Setup",
      "1 Week Delivery",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "per project",
    features: [
      "Full Website Design",
      "Up to 5 Pages",
      "Advanced Animations",
      "5 Revisions",
      "SEO Optimization",
      "2 Week Delivery",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$2,999",
    period: "per project",
    features: [
      "Complete Web Solution",
      "Unlimited Pages",
      "Custom Features",
      "Unlimited Revisions",
      "Advanced SEO & Analytics",
      "Ongoing Support",
      "1 Month Development",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="pricing"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase">
            Investment
          </span>
          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl relative z-10">Pricing Plans</h2>
            <div className="absolute -bottom-2 right-0 w-28 h-4 bg-[#FFD300] -z-10 rounded" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include modern
            design and clean code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlighted
                  ? "bg-primary/5 border-primary shadow-lg scale-105"
                  : "bg-card border-border shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl">{plan.price}</span>
                </div>
                <span className="text-muted-foreground text-sm">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "bg-primary/20"
                          : "bg-muted"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          plan.highlighted ? "text-primary" : "text-foreground"
                        }`}
                      />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl"
                    : "bg-muted hover:bg-muted/80"
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
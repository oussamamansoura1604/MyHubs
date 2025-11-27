import { motion, useInView } from "motion/react";
import { useRef } from "react";

const clients = [
  { name: "Healthcare", logo: "HC" },
  { name: "Delivery Services", logo: "DS" },
  { name: "Event Organizers", logo: "EO" },
  { name: "Fashion Brands", logo: "FB" },
  { name: "Creators", logo: "CR" },
  { name: "Startups", logo: "ST" },
];

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase">
            Partnerships
          </span>
          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl relative z-10">Trusted By</h2>
            <div className="absolute -bottom-2 left-0 w-24 h-4 bg-[#FFD300] -z-10 rounded" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proud to collaborate with amazing companies and brands worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="aspect-square flex items-center justify-center p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Logo placeholder with initials */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-light text-muted-foreground/40 group-hover:text-primary transition-colors duration-300">
                    {client.logo}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
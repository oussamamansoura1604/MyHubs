import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin, User, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const bioDetails = [
  { icon: Briefcase, label: "Experience", value: "8+ Years" },
  { icon: User, label: "Specialization", value: "Branding & UI/UX" },
  { icon: MapPin, label: "Location", value: "Available Worldwide" },
  { icon: Mail, label: "Email", value: "oussama@example.com" },
  { icon: Phone, label: "Phone", value: "+213 (XXX) XXX-XXXX" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase">
            About Me
          </span>
          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl relative z-10">Who I Am</h2>
            <div className="absolute -bottom-2 left-0 w-24 h-4 bg-[#FFD300] -z-10 rounded" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text & Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl">
                I'm a multidisciplinary designer specializing in branding, UI/UX, and digital communication.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                For the past years, I've helped businesses, creators, and startups translate complexity into clarity — visually, strategically, and structurally.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My creative journey began with content creation, where I crafted story-driven carousels in Algerian Darija and built a community of 16,000 people organically. That experience shaped my approach: design should tell a story, guide emotion, and create identity.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                Today, I bring together:
              </p>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Brand identity systems</li>
                <li>UI/UX design</li>
                <li>Social media design</li>
                <li>Content strategy</li>
                <li>Automation & digital workflows</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My academic foundation in medicinal chemistry brings precision and depth to my creative work — giving me a rare mix of analytical discipline and artistic direction.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {bioDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <detail.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-muted-foreground font-light">
                      {detail.label}:
                    </span>
                    <span className="font-medium">{detail.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Abstract decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-3xl -z-10 blur-xl" />

              {/* Image */}
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1627860572942-27bc789d94bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzYzNzkwMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Abstract art"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
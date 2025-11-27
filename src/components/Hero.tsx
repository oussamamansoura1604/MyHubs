import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Yellow accent rectangles */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-24 h-24 bg-[#FFD300] rounded-2xl opacity-20"
        animate={{
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-[#FFD300] rounded-xl opacity-30"
        animate={{
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-muted-foreground font-light tracking-wider uppercase">
              Welcome
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            Hi, I'm <span className="text-primary">Oussama Mansoura</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground font-light"
          >
            Brand Identity Designer • UI/UX Designer • Digital Strategy Architect
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground max-w-lg leading-relaxed"
          >
            I build brands, design intuitive interfaces, and craft digital systems that elevate how businesses communicate. My work blends structured thinking, storytelling, and clean aesthetics to create visual identities that feel purposeful, modern, and memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 rounded-[3rem] blur-2xl scale-105" />
            
            {/* Image container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NjM3NTUxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Alex Morgan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
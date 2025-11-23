import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Modern E-Commerce Platform",
    year: "2024",
    category: "Web Design",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzYzNzUxNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Brand Identity System",
    year: "2023",
    category: "Branding",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3OTIzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Mobile Banking App",
    year: "2023",
    category: "App Design",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYzNzMwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "SaaS Dashboard",
    year: "2024",
    category: "UI/UX",
    size: "tall",
    image:
      "https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzODA0ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Creative Portfolio",
    year: "2023",
    category: "Web Design",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1627860572942-27bc789d94bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzYzNzkwMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Fitness Tracking App",
    year: "2024",
    category: "App Design",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3NTA2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Product Design",
    year: "2024",
    category: "Design",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1566554001689-b53a88dbd138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjM3NzYzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Geometric Art",
    year: "2023",
    category: "Art Direction",
    size: "tall",
    image:
      "https://images.unsplash.com/photo-1743965127369-6e28d86e2460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGFydHxlbnwxfHx8fDE3NjM3MDI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Interior Design",
    year: "2024",
    category: "Photography",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM4MDc3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Brand Campaign",
    year: "2023",
    category: "Branding",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1698935958480-1bc0cae28f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJhbmRpbmd8ZW58MXx8fHwxNzYzODA3NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Digital Interface",
    year: "2024",
    category: "UI Design",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1597075095391-f15c2f9f359a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2Mzc1NzIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Architecture Vision",
    year: "2023",
    category: "3D Visualization",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzODA0ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="projects"
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
            Portfolio
          </span>
          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl relative z-10">Featured Projects</h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-4 bg-[#FFD300] -z-10 rounded" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated collection of my best work across various disciplines.
          </p>
        </motion.div>

        {/* Masonry Grid / Collage Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => {
            const sizeClasses = {
              large: "col-span-2 row-span-2",
              wide: "col-span-2 row-span-1",
              tall: "col-span-1 row-span-2",
              medium: "col-span-1 row-span-1",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  sizeClasses[project.size as keyof typeof sizeClasses]
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-primary-foreground/80 text-sm font-light mb-2">
                      {project.category} • {project.year}
                    </span>
                    <h3 className="text-lg md:text-xl text-primary-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <span className="text-sm">View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
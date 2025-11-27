import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const blogPosts = [
  {
    title: "Designing Brands With Personality",
    date: "Latest",
    excerpt:
      "How intentional storytelling creates memorable identities.",
    category: "Branding",
  },
  {
    title: "Modern UI/UX Essentials",
    date: "Latest",
    excerpt:
      "The principles behind smooth, intuitive digital experiences.",
    category: "UI/UX",
  },
  {
    title: "Automation for Designers",
    date: "Latest",
    excerpt:
      "Building smart systems that save time and scale creativity.",
    category: "Strategy",
  },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="blog"
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
            Insights
          </span>
          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl relative z-10">Latest Articles</h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#FFD300] -z-10 rounded" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Thoughts on design, development, and creative problem-solving.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card border border-border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <span className="inline-block text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <Button
                variant="ghost"
                className="group/btn p-0 h-auto hover:bg-transparent"
              >
                <span className="flex items-center gap-2 text-primary">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
              </Button>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
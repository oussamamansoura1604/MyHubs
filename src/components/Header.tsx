import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBackground }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg backdrop-blur-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold"
            >
              Oussama<span className="text-primary">.</span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 font-light relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <Button
                size="sm"
                className="rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 lg:hidden bg-background"
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isMobileMenuOpen
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <Button
            size="lg"
            className="rounded-full px-8 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </motion.div>
    </>
  );
}

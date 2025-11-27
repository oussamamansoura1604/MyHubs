import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#resume" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Case Studies", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Disclaimer", href: "#" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-foreground/5 border-t border-border">
      {/* Main Footer Content */}
      <div className="py-16 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl mb-4">
                Oussama<span className="text-primary">.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                I design brands, build digital experiences, and create systems that help businesses communicate with clarity and confidence. My work blends creativity, structure, and storytelling to deliver visuals that last.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <p className="font-medium">Subscribe to Newsletter</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-xl flex-1"
                  />
                  <Button className="rounded-xl px-6">Subscribe</Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail className="h-4 w-4" />
                  <span>oussama@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Available Worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Phone className="h-4 w-4" />
                  <span>Replies within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm flex items-center gap-2"
            >
              © {new Date().getFullYear()} Oussama Mansoura. All Rights Reserved — Design • Strategy • Digital Systems
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </footer>
  );
}
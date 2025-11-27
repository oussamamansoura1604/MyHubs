import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "oussama@example.com",
    link: "mailto:oussama@example.com",
  },
  {
    icon: MapPin,
    label: "Available",
    value: "Worldwide",
    link: "#",
  },
  {
    icon: Phone,
    label: "Response Time",
    value: "Within 24 hours",
    link: "#",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      id="contact"
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
            Contact
          </span>
          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl relative z-10">Let's Create Something Powerful</h2>
            <div className="absolute -bottom-2 right-0 w-36 h-4 bg-[#FFD300] -z-10 rounded" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you're building a brand, launching a digital product, or needing clean, strategic design — I can help you build visuals and systems that elevate your identity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Available Worldwide | Replies within 24 hours | Accepting New Projects for 2025
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-card border border-border rounded-3xl shadow-lg"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="rounded-xl border-border focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="rounded-xl border-border focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="rounded-xl border-border focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="rounded-xl border-border focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-3xl overflow-hidden border border-border shadow-lg h-96"
        >
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Map placeholder - San Francisco, CA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
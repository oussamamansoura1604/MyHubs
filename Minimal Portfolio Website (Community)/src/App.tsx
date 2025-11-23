import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
      <Pricing />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
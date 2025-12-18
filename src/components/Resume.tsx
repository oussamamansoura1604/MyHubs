import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const skills = [
  { name: "Branding & Identity Design", level: 95 },
  { name: "UI/UX & Interface Design", level: 90 },
  { name: "Social Media Design Systems", level: 92 },
  { name: "Creative Direction & Art Direction", level: 88 },
  { name: "Design Automation & Digital Workflows", level: 85 },
  { name: "Graphic Design (Print & Digital)", level: 93 },
];

const experiences = [
  {
    title: "Pharmacy Resident – Medicinal Chemistry",
    company: "Faculty of Medicine Taleb Mourad, Sidi Bel Abbès",
    year: "Mar 2022 – Present",
    description:
      "Advanced training in drug synthesis, SAR interpretation, virtual screening, docking simulations, and therapeutic chemistry pathways.",
  },
  {
    title: "Digital Marketer & Designer",
    company: "ALLO JIBLI Delivery Service, Sidi Bel Abbès",
    year: "Apr 2022 – Dec 2024",
    description:
      "Developed full digital strategy, UI/UX of the Android app, brand identity, packaging, and advertising materials. Managed content strategy, campaign optimization, CRO approaches, and community engagement metrics.",
  },
  {
    title: "Quality Control Intern – Pharmaceutical Production",
    company: "MOBEN Pharma, Oran",
    year: "Mar 2025 – Jun 2025",
    description:
      "Performed physicochemical assays, analytical control (HPLC, UV, IR), dissolution testing, and stability verification. Assisted in GMP documentation and batch release procedures.",
  },
  {
    title: "Teaching Instructor – Therapeutic Chemistry (TD)",
    company: "Faculty of Medicine Taleb Mourad",
    year: "Oct 2023 – Jan 2024",
    description:
      "Led third‑year pharmacy students through therapeutic chemistry case studies, mechanisms of action, medicinal chemistry principles, and structure‑activity relationships.",
  },
  {
    title: "Teaching Instructor – Therapeutic Chemistry (TP)",
    company: "Faculty of Medicine Taleb Mourad",
    year: "Feb 2024 – May 2024",
    description:
      "Supervised laboratory sessions, including organic synthesis, titration techniques, spectroscopic interpretation, and pharmaceutical analysis.",
  },
  {
    title: "Quality Control Intern – Parapharmaceutical Production",
    company: "PRODERMA, Sidi Bel Abbès",
    year: "May 2023 – Jul 2023",
    description:
      "Conducted QC testing for dermocosmetic and parapharmaceutical formulations, including pH, viscosity, microbiological screening, and raw‑material conformity verification.",
  },
  {
    title: "QC Intern – Pharmaceutical Production",
    company: "TABET PHARM, Sidi Bel Abbès",
    year: "Feb 2023 – Apr 2023",
    description:
      "Executed routine QC analysis, documented deviations, contributed to CAPA procedures, and supported manufacturing workflow audits.",
  },
  {
    title: "Co‑Supervisor – Pharmacy Graduation Thesis",
    company: "Faculty of Medicine Taleb Mourad",
    year: "Academic Year 2022–2023",
    description:
      "Guided research on: 'Identification of Novel RAF‑Kinase Inhibitors Using In Silico Virtual Screening'. Supported docking workflows, ADMET prediction, and hit selection.",
  },
  {
    title: "Emergency Medical Surgical Pharmacy Intern",
    company: "CHU Hassani Abdelkader – Emergency Pharmacy",
    year: "Sep 2020 – Jan 2021",
    description:
      "Managed medication dispensing, sterile preparation checks, emergency kit replenishment, and therapeutic class classification.",
  },
  {
    title: "Hemobiology Laboratory Intern",
    company: "CHU Hassani Abdelkader – Hemobiology Unit",
    year: "Feb 2021 – May 2021",
    description:
      "Performed hematological assays, immunohematology testing, blood typing, and supported transfusion compatibility procedures.",
  },
  {
    title: "Designer & Community Manager",
    company: "EXTRA DESIGN Agency, Sidi Bel Abbès",
    year: "Nov 2020 – May 2021",
    description:
      "Created brand identities, campaigns, social media strategy, and advertising materials.",
  },
  {
    title: "Assistant Pharmacist",
    company: "Pharmacie Aouissi, Sfisef – Sidi Bel Abbès",
    year: "Apr 2021 – Jun 2021",
    description:
      "Dispensed medications, provided therapeutic counseling, handled stock rotation, and supported OTC recommendations.",
  },
  {
    title: "Vice President – Digital Presence Lead",
    company: "Rhazes Scientific Club",
    year: "Sep 2019 – Sep 2021",
    description:
      "Managed digital communication, scientific event branding, educational content, and academic outreach.",
  },
  {
    title: "Logistics Member – Organizing Committee",
    company: "Hult Prize Sidi Bel Abbès (UN Initiative)",
    year: "Oct 2019 – Dec 2019",
    description:
      "Coordinated logistics, event preparation, team support, and competition planning.",
  },
  {
    title: "Freelance Graphic Designer",
    company: "Remote",
    year: "May 2020 – Present",
    description:
      "Created visual identities, commercial designs, medical event materials, cosmetic brand packaging, tourism branding, UX/UI for apps, and marketing collateral.",
  },
];

const education = [
  {
    degree: "PharmD",
    institution: "University of Sidi Bel Abbès",
    year: "Completed",
    description: "Doctor of Pharmacy degree",
  },
  {
    degree: "Residency in Medicinal Chemistry",
    institution: "Faculty of Medicine Taleb Mourad",
    year: "Completed",
    description: "Analytical background in pharmaceutical chemistry",
  },
];

const certifications = [
  {
    title: "Molecular Docking Training",
    organization: "IEA Training Academy, Algiers",
    year: "Dec 2022",
  },
  {
    title: "Academic English Certification",
    organization: "Academic English Program",
    year: "Oct 2019 – May 2020",
  },
  {
    title: "Entrepreneurship & Project Creation Training",
    organization: "Professional Development",
    year: "May 2021",
  },
  {
    title: "First Aid Certification",
    organization: "Algerian Red Crescent",
    year: "Oct 2018 – Dec 2018",
  },
];

const awards = [
  {
    title: "Brand Systems Excellence",
    organization: "Creative Work",
    year: "Multiple",
  },
  {
    title: "High-Engagement Content",
    organization: "Social Media",
    year: "10-15% ER",
  },
  {
    title: "Strategic Digital Solutions",
    organization: "Client Work",
    year: "Ongoing",
  },
];

function SkillBar({
  skill,
  delay,
  isInView,
}: {
  skill: { name: string; level: number };
  delay: number;
  isInView: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${width}%` : 0 }}
          transition={{ duration: 1, delay: delay / 1000, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="resume"
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
            My Journey
          </span>
          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl relative z-10">Resume</h2>
            <div className="absolute -bottom-2 right-0 w-32 h-4 bg-[#FFD300] -z-10 rounded" />
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl mb-8 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Award className="h-5 w-5 text-primary" />
            </div>
            Skills
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                delay={index * 100}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-secondary" />
              </div>
              Experience
            </motion.h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 group"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300" />
                  <div className="space-y-2">
                    <span className="text-sm text-primary font-medium">
                      {exp.year}
                    </span>
                    <h4 className="text-xl">{exp.title}</h4>
                    <p className="text-muted-foreground font-light">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 group"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform duration-300" />
                  <div className="space-y-2">
                    <span className="text-sm text-accent font-medium">
                      {edu.year}
                    </span>
                    <h4 className="text-xl">{edu.degree}</h4>
                    <p className="text-muted-foreground font-light">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-8 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Award className="h-5 w-5 text-primary" />
            </div>
            Awards & Recognition
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg mb-2">{award.title}</h4>
                <p className="text-muted-foreground font-light mb-1">
                  {award.organization}
                </p>
                <span className="text-sm text-primary">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl md:text-3xl mb-8 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-accent" />
            </div>
            Certifications & Training
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <GraduationCap className="h-6 w-6 text-accent mb-3" />
                <h4 className="text-lg mb-2">{cert.title}</h4>
                <p className="text-muted-foreground font-light mb-2">
                  {cert.organization}
                </p>
                <span className="text-sm text-accent">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
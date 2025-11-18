"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

/* ==================================================
   Advanced Portfolio Page — Single File (Next.js + Tailwind + Framer Motion)
   - Put this in: src/app/page.tsx
   - Place your image at: /public/dhanraj.jpg
   - Tailwind + framer-motion required
   ================================================== */

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#050617] text-white overflow-x-hidden relative font-sans">

      {/* Decorative blur blobs */}
      <div className="pointer-events-none absolute -left-40 -top-24 w-[420px] h-[420px] rounded-full bg-purple-600/30 blur-[140px] mix-blend-screen" />
      <div className="pointer-events-none absolute -right-40 bottom-0 w-[520px] h-[520px] rounded-full bg-indigo-600/20 blur-[160px] mix-blend-screen" />

      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Page sections */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <Footer />
    </main>
  );
}

/* ==================================================
   NAVBAR
   Responsive, simple, clean
   ================================================== */
function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-white/6 bg-black/20 backdrop-blur-lg">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
            <Image src="/dhanraj-photo.jpg" alt="logo" width={40} height={40} className="object-cover" />
          </div>
          <div className="text-sm md:text-lg font-semibold tracking-tight">
            <span className="text-indigo-400">Dhanraj</span> Sonawane
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <NavItem title="Home" href="#" />
          <NavItem title="About" href="#about" />
          <NavItem title="Projects" href="#projects" />
          <NavItem title="Skills" href="#skills" />
          <NavItem title="Contact" href="#contact" />
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-shadow shadow"
          >
            Hire Me
          </Link>
        </div>

        <div className="md:hidden text-sm text-slate-200">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="hover:text-indigo-400 transition">
      {title}
    </Link>
  );
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="cursor-pointer px-3 py-2 rounded-md bg-white/5">Menu</summary>
      <div className="absolute right-0 mt-2 w-48 bg-[#071022] border border-white/6 rounded-md shadow-lg p-3">
        <a className="block py-2 text-sm hover:text-indigo-400" href="#about">About</a>
        <a className="block py-2 text-sm hover:text-indigo-400" href="#projects">Projects</a>
        <a className="block py-2 text-sm hover:text-indigo-400" href="#skills">Skills</a>
        <a className="block py-2 text-sm hover:text-indigo-400" href="#contact">Contact</a>
      </div>
    </details>
  );
}

/* ==================================================
   HERO SECTION
   Large, full viewport, left content + right small photo card
   Includes subtle animations and 3D tilt on hover
   ================================================== */
function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-20 pb-20">
      <div className="max-w-[1500px] w-full mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-6"
        >
          <p className="text-sm text-indigo-300 font-medium tracking-wide">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Dhanraj <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Sonawane</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
            MCA student at Trinity Academy of Engineering, Pune. I build modern web products, robust backends,
            and AI-assisted tooling. I love clean UI, performant APIs and pragmatic engineering.
          </p>

          <div className="flex gap-4 mt-4 items-center">
            <Link
              href="#projects"
              className="inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-md text-sm transition"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="inline-block px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-sm transition"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 mt-6">
            <span>Trinity Academy of Engineering</span>
            <span className="opacity-40">•</span>
            <span>MCA · BBA(CA)</span>
          </div>
        </motion.div>

        {/* Right: small photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center md:justify-end"
        >
          <TiltCard />
        </motion.div>
      </div>
    </section>
  );
}

/* 3D tilt + glass photo card */
function TiltCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative w-[280px] md:w-[340px] lg:w-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm"
      style={{ perspective: 1200 }}
    >
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-500/6 to-purple-500/6 pointer-events-none" />

      {/* image wrapper gives 3d tilt via framer-motion transform on child */}
      <motion.div
        whileHover={{ rotateY: 6, rotateX: 3 }}
        transition={{ type: "spring", stiffness: 160, damping: 14 }}
        className="relative z-20 w-full h-full"
      >
        <Image
          src="/dhanraj-photo.jpg"
          alt="Dhanraj"
          width={900}
          height={900}
          className="object-cover w-full h-full"
        />

        {/* subtle bottom info bar */}
        <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between bg-black/30 border border-white/5 rounded-xl px-4 py-2 backdrop-blur-sm">
          <div>
            <div className="text-sm font-semibold">Dhanraj Sonawane</div>
            <div className="text-xs text-slate-300">Full-Stack & Backend Developer</div>
          </div>
          <div className="text-xs text-slate-300">Pune, India</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ==================================================
   ABOUT SECTION
   ================================================== */
function AboutSection() {
  return (
    <section id="about" className="w-full py-24 bg-[#060717] border-t border-white/6">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">
              I'm a developer focused on building practical, maintainable systems. I enjoy taking
              a problem from idea to production — designing APIs, optimizing databases, and crafting interfaces
              that people actually enjoy using. Lately I've been exploring AI integrations and automation flows.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <InfoRow label="Location" value="Yewlewadi, Pune (411048)" />
              <InfoRow label="Email" value="dhanrajsonawane268@gmail.com" />
              <InfoRow label="Education" value="MCA — Trinity Academy of Engineering" />
              <InfoRow label="Degrees" value="MCA · BBA(CA)" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="p-4 rounded-2xl bg-white/3 border border-white/8">
              <div className="text-sm text-slate-200 font-medium">Resume</div>
              <div className="text-xs text-slate-300 mt-2">Download a PDF or Email me to request one</div>
              <div className="mt-4">
                <a className="px-4 py-2 bg-indigo-600 rounded-lg text-sm" href="#contact">Get Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="text-sm text-slate-200">{value}</div>
    </div>
  );
}

/* ==================================================
   PROJECTS SECTION
   ================================================== */
function ProjectsSection() {
  const projects = [
    {
      title: "Jarvis AI Assistant",
      desc: "Voice assistant built with Python, Vosk, GUI, and automation modules.",
      tags: ["Python", "Vosk", "GUI", "Automation"],
    },
    {
      title: "Local Crime Alert App",
      desc: "Android app using Firebase, geofencing & push notifications for local alerts.",
      tags: ["Android", "Firebase", "Kotlin"],
    },
    {
      title: "SIP Calculator",
      desc: "Desktop utility built with Python (Tkinter) to compute SIP returns & charts.",
      tags: ["Python", "Tkinter", "Finance"],
    },
    {
      title: "Portfolio Website",
      desc: "This portfolio — Next.js, Tailwind, Framer Motion with premium design.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-[#050617] border-t border-white/6">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Selected Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} desc={p.desc} tags={p.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 160 }}
      className="bg-white/3 border border-white/8 rounded-2xl p-6 shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-slate-300 mt-2">{desc}</p>
        </div>
        <div className="text-sm text-slate-300">{/* placeholder for date or icon */}</div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((t) => (
          <span key={t} className="px-3 py-1 bg-indigo-600/20 text-indigo-200 text-xs rounded-md border border-indigo-600/10">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <a className="text-indigo-300 text-sm hover:underline" href="#">View Details</a>
        <div className="text-xs text-slate-400">Demo & Code</div>
      </div>
    </motion.div>
  );
}

/* ==================================================
   SKILLS SECTION
   ================================================== */
function SkillsSection() {
  const frontend = ["React", "Next.js", "Tailwind", "HTML", "CSS", "TypeScript"];
  const backend = ["Node.js", "Express", "Postgres", "MongoDB", "Python", "Django"];
  const tools = ["Docker", "Git", "CI/CD", "Figma", "Postman"];

  return (
    <section id="skills" className="w-full py-24 bg-[#060717] border-t border-white/6">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillBox title="Frontend" items={frontend} />
          <SkillBox title="Backend" items={backend} />
          <SkillBox title="Tools & DevOps" items={tools} />
        </div>
      </div>
    </section>
  );
}

function SkillBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="px-3 py-1 bg-white/6 rounded-md text-sm text-slate-200">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ==================================================
   CONTACT SECTION
   Simple contact info and CTA
   ================================================== */
function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 bg-[#050617] border-t border-white/6">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Get in touch
        </motion.h2>

        <p className="text-slate-300 mb-6">I'm available for internships and freelance work. Email me or call and I'll reply as soon as I can.</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="mailto:dhanrajsonawane268@gmail.com" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500">Email Me</a>
          <a href="tel:8080904603" className="px-6 py-3 rounded-xl border border-white/10">Call</a>
        </div>

        <div className="mt-8 text-sm text-slate-400">
          <div>Or connect on <a href="https://www.linkedin.com/in/dhanraj-sonawane-985a52283" target="_blank" rel="noreferrer" className="text-indigo-300">LinkedIn</a></div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================
   FOOTER
   ================================================== */
function Footer() {
  return (
    <footer className="w-full py-8 bg-[#040511] border-t border-white/6 mt-6">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Dhanraj R. Sonawane</div>
        <div className="flex gap-6 items-center">
          <a className="text-sm text-slate-400 hover:text-indigo-300" href="#">Privacy</a>
          <a className="text-sm text-slate-400 hover:text-indigo-300" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

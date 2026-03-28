import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, Send, ChevronRight, Terminal, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass shadow-2xl" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="font-display font-bold text-xl tracking-tighter text-neo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          NEO<span className="text-white">PORTFOLIO</span>
        </motion.a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-400 hover:text-neo-blue transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#contact"
          className="px-5 py-2 bg-neo-blue text-dark-bg text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Let's Talk
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-dark-surface skew-x-12 translate-x-1/4 border-l border-neo-blue/10" />
      <div className="absolute top-1/4 left-10 -z-10 w-96 h-96 bg-neo-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 -z-10 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neo-blue/10 border border-neo-blue/20 text-neo-blue text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} className="neo-glow" />
            Next-Gen Web Solutions
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
            Crafting <span className="text-neo">Future</span> Interfaces.
          </h1>
          <p className="text-lg text-brand-400 max-w-lg mb-10 leading-relaxed">
            I build high-performance, visually immersive digital experiences that push the boundaries of the modern web.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-neo-blue text-dark-bg rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all group">
              Explore Projects <ChevronRight size={20} />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href="#" className="p-3 rounded-full hover:bg-dark-surface border border-transparent hover:border-neo-blue/30 transition-all text-brand-400 hover:text-neo-blue">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full hover:bg-dark-surface border border-transparent hover:border-neo-blue/30 transition-all text-brand-400 hover:text-neo-blue">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-dark-surface relative group border border-neo-blue/20">
            <img 
              src="https://picsum.photos/seed/posing-person/800/800" 
              alt="Profile" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 to-transparent" />
            <div className="absolute inset-0 border-[1px] border-neo-blue/20 rounded-3xl pointer-events-none group-hover:border-neo-blue/50 transition-colors" />
          </div>
          {/* Floating Stats Card */}
          <motion.div 
            className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl border-neo"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neo-blue flex items-center justify-center text-dark-bg">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-neo">5+</p>
                <p className="text-xs text-brand-400 font-medium uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <p className="text-neo-blue font-bold uppercase tracking-[0.2em] text-xs mb-2">The Mission</p>
              <h2 className="font-display text-4xl font-bold">Merging aesthetics with deep tech.</h2>
            </div>
            <p className="text-brand-400 leading-relaxed text-lg">
              I specialize in bridging the gap between complex backend logic and pixel-perfect frontend design. My approach is rooted in the belief that software should not only work flawlessly but also feel magical to the user.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-dark-bg border border-dark-border hover:border-neo-blue/30 transition-colors">
                <h4 className="font-bold text-xl mb-2 text-neo">Innovation</h4>
                <p className="text-sm text-brand-500">Constantly exploring new tech stacks to deliver cutting-edge solutions.</p>
              </div>
              <div className="p-6 rounded-2xl bg-dark-bg border border-dark-border hover:border-neo-blue/30 transition-colors">
                <h4 className="font-bold text-xl mb-2 text-neo">Precision</h4>
                <p className="text-sm text-brand-500">Meticulous attention to detail in every line of code and every UI element.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden border border-dark-border">
                <img src="https://picsum.photos/seed/tech1/400/600" alt="Work" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
              </div>
              <div className="h-40 rounded-2xl bg-neo-blue flex items-center justify-center text-dark-bg p-6 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                <p className="text-center font-bold italic">"Code is the new canvas."</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-40 rounded-2xl bg-dark-bg border border-dark-border" />
              <div className="h-64 rounded-2xl overflow-hidden border border-dark-border">
                <img src="https://picsum.photos/seed/tech2/400/600" alt="Work" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Tailwind CSS", level: 98 },
    { name: "PostgreSQL / MongoDB", level: 80 },
    { name: "Figma / UI Design", level: 75 },
  ];

  return (
    <section id="skills" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-neo-blue font-bold uppercase tracking-[0.2em] text-xs mb-2">Tech Stack</p>
          <h2 className="font-display text-4xl font-bold">Core Competencies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skills.map((skill, i) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="font-semibold text-brand-200">{skill.name}</span>
                <span className="text-xs font-mono text-neo-blue">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-dark-surface rounded-full overflow-hidden border border-dark-border">
                <motion.div
                  className="h-full bg-neo-blue shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "CyberCommerce",
      category: "Next.js / Stripe",
      image: "https://picsum.photos/seed/cyber1/800/600",
      link: "#"
    },
    {
      title: "NeuralFlow AI",
      category: "Python / React",
      image: "https://picsum.photos/seed/cyber2/800/600",
      link: "#"
    },
    {
      title: "Quantum Dashboard",
      category: "D3.js / TypeScript",
      image: "https://picsum.photos/seed/cyber3/800/600",
      link: "#"
    },
    {
      title: "Neon Social",
      category: "WebSockets / Node",
      image: "https://picsum.photos/seed/cyber4/800/600",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-neo-blue font-bold uppercase tracking-[0.2em] text-xs mb-2">Showcase</p>
            <h2 className="font-display text-4xl font-bold">Digital Artifacts</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-brand-400 border-b border-neo-blue/30 pb-1 hover:text-neo-blue transition-colors">
            View all artifacts
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-dark-border group-hover:border-neo-blue/50 transition-colors">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-neo-blue text-dark-bg flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_20px_rgba(0,242,255,0.6)]">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <p className="text-neo-blue text-xs font-bold uppercase tracking-widest mb-2 opacity-70">{project.category}</p>
              <h3 className="text-2xl font-bold group-hover:text-neo-blue transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-dark-surface rounded-[40px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 border border-dark-border">
          <div>
            <p className="text-neo-blue font-bold uppercase tracking-[0.2em] text-xs mb-2">Connect</p>
            <h2 className="font-display text-5xl font-bold mb-8">Initiate <span className="text-neo">Contact</span>.</h2>
            <p className="text-brand-400 text-lg mb-12">
              Ready to build something extraordinary? Send a transmission and let's start the dialogue.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-dark-bg border border-neo-blue/20 flex items-center justify-center shadow-inner">
                  <Mail size={24} className="text-neo-blue" />
                </div>
                <div>
                  <p className="text-xs text-brand-500 font-bold uppercase tracking-wider">Secure Email</p>
                  <p className="font-semibold text-brand-200">neo@dev.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-dark-bg border border-neo-blue/20 flex items-center justify-center shadow-inner">
                  <Code2 size={24} className="text-neo-blue" />
                </div>
                <div>
                  <p className="text-xs text-brand-500 font-bold uppercase tracking-wider">Base Location</p>
                  <p className="font-semibold text-brand-200">Matrix, Digital Space</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 bg-dark-bg p-8 rounded-3xl border border-dark-border shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-500">Identity</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:border-neo-blue/50 transition-all outline-none" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-500">Frequency</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:border-neo-blue/50 transition-all outline-none" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-500">Transmission</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:border-neo-blue/50 transition-all outline-none resize-none" placeholder="Describe your vision..." />
            </div>
            <button className="w-full py-4 bg-neo-blue text-dark-bg rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all">
              Send Transmission <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-dark-border bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-brand-500 font-medium">
          © 2026 NeoPortfolio. Encrypted & Secure.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-brand-400 hover:text-neo-blue transition-colors">X-Twitter</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-brand-400 hover:text-neo-blue transition-colors">GitHub</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-brand-400 hover:text-neo-blue transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans bg-dark-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

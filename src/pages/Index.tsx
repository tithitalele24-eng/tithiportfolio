import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, BrainCircuit, Github, Linkedin, Mail, Palette, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import astronaut from "@/assets/astronaut.png";
import spaceBg from "@/assets/space-bg-hd.png";
import logo from "@/assets/logo.png";
import { portfolioProjects } from "@/data/projects";
import { BrowserMockup } from "@/components/ui/mockups";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const skillCards = useMemo(
    () => [
      {
        icon: BrainCircuit,
        title: "Machine Learning",
        description: "Building intelligent systems and AI-powered solutions.",
        skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Model Evaluation"],
      },
      {
        icon: Sparkles,
        title: "Python",
        description: "Writing reliable logic, automation, and data-driven tools.",
        skills: ["Python", "Java", "C++", "JavaScript"],
      },
      {
        icon: Rocket,
        title: "Web Development",
        description: "Creating full-stack interfaces and connected product systems.",
        skills: ["React", "Node.js", "Express", "MongoDB"],
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description: "Designing user flows, prototypes, and scalable visual systems.",
        skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
      },
    ],
    []
  );

  const projectCards = [
    { slug: "waste2worth", icon: BrainCircuit, badge: "Sustainability Platform" },
    { slug: "mentorconnect", icon: Sparkles, badge: "Social Platform" },
    { slug: "burger-king-redesign", icon: Palette, badge: "UI/UX Redesign" },
  ];

  const contactCards = [
    {
      title: "GitHub",
      value: "github.com/tithitalele24-eng",
      href: "https://github.com/tithitalele24-eng",
      icon: Github,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/tithi-talele",
      href: "https://www.linkedin.com/in/tithi-talele",
      icon: Linkedin,
    },
    {
      title: "Email",
      value: "tithi.talele24@spit.ac.in",
      href: "mailto:tithi.talele24@spit.ac.in",
      icon: Mail,
    },
  ];

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-12% 0px -35% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let isSnapping = false;

    const handleWheel = (event: WheelEvent) => {
      if (window.matchMedia("(max-width: 1023px), (prefers-reduced-motion: reduce)").matches || Math.abs(event.deltaY) < 45) {
        return;
      }

      const currentIndex = NAV_ITEMS.findIndex((item) => item.id === activeSection);
      const nextIndex = Math.min(Math.max(currentIndex + (event.deltaY > 0 ? 1 : -1), 0), NAV_ITEMS.length - 1);

      if (nextIndex === currentIndex || isSnapping) {
        return;
      }

      const nextSection = document.getElementById(NAV_ITEMS[nextIndex].id);
      if (!nextSection) return;

      event.preventDefault();
      isSnapping = true;
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        isSnapping = false;
      }, 850);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="portfolio-site relative min-h-screen overflow-x-hidden bg-background text-foreground"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9, 6, 18, 0.32), rgba(9, 6, 18, 0.88)), url(${spaceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10rem] top-[15vh] h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-9rem] top-[48vh] h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[24vw] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <nav className="fixed left-0 right-0 top-0 z-30 border-b border-white/5 bg-background/20 px-5 py-4 backdrop-blur-xl md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between">
          <a href="#home" onClick={scrollToSection("home")} className="flex items-center gap-3" aria-label="Go to home">
            <span
              aria-hidden="true"
              className="block h-11 w-11"
              style={{
                backgroundColor: "hsl(var(--foreground))",
                WebkitMaskImage: `url(${logo})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
                maskImage: `url(${logo})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />
            <span className="hidden font-nav text-sm font-medium uppercase tracking-[0.35em] text-foreground/80 sm:inline">Tithi</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.slice(1).map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={scrollToSection(item.id)} className="nav-link-hover text-label font-nav font-medium uppercase text-foreground/78">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 nav-link-hover" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 nav-link-hover" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </nav>

      <aside className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 xl:block" aria-label="Section navigation">
        <div className="glass-rail flex flex-col gap-2 px-2 py-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={scrollToSection(item.id)}
              className={`rail-link ${activeSection === item.id ? "is-active" : ""}`}
              aria-label={`Scroll to ${item.label}`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span className="rail-dot" />
              <span className="rail-label">{item.label}</span>
            </a>
          ))}
        </div>
      </aside>

      <main className="relative z-10">
        <section id="home" className="snap-section section-shell hero-section">
          <div className="section-container hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow text-label font-nav font-medium uppercase text-primary/90">Machine Learning x Product Design</p>
              <div className="relative mt-6 inline-block">
                <div className="absolute -left-5 -top-5 h-12 w-12 border-l-4 border-t-4 border-foreground/75" />
                <div className="absolute -bottom-5 -right-5 h-12 w-12 border-b-4 border-r-4 border-foreground/75" />
                <h1 className="hero-title font-hero text-hero uppercase tracking-tight">Hi, I am Tithi Talele</h1>
              </div>
              <p className="mt-5 max-w-3xl text-body text-foreground/86">
                I build intelligent, space-age digital experiences where machine learning, interface craft, and practical product thinking orbit the same mission.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#about" onClick={scrollToSection("about")} className="btn-primary">
                  Explore About
                  <ArrowDown className="h-5 w-5" />
                </a>
                <a href="#projects" onClick={scrollToSection("projects")} className="btn-secondary">
                  View Projects
                  <Rocket className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="astronaut-anchor">
                <img src={astronaut} alt="" className="astronaut-img" width={352} height={352} />
              </div>
            </div>
          </div>

          <a href="#about" onClick={scrollToSection("about")} className="scroll-indicator" aria-label="Scroll down to about section">
            <span>Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </section>

        <section id="about" className="snap-section section-shell about-section">
          <div className="section-container glass-panel about-panel">
            <div className="about-intro">
              <p className="text-label font-nav font-medium uppercase text-primary/90">About Me</p>
              <h2 className="about-title mt-3 font-hero uppercase tracking-tight">Building useful intelligence with a designer's eye.</h2>
              <p className="about-copy mt-4 text-body text-foreground/88">
                I enjoy creating digital experiences that are both intelligent and visually clear. My focus is building projects where machine learning improves real user workflows, and thoughtful design makes those interactions feel simple, memorable, and human.
              </p>
            </div>
            <aside className="about-card-stack" aria-label="Capability highlights">
              <article className="mini-card about-capability-card">
                <BrainCircuit className="h-5 w-5 text-primary" />
                <div>
                  <h3>Machine Learning</h3>
                  <p>Building intelligent systems and practical AI solutions.</p>
                </div>
              </article>
              <article className="mini-card about-capability-card">
                <Palette className="h-5 w-5 text-primary" />
                <div>
                  <h3>UI/UX Design</h3>
                  <p>Designing intuitive interfaces, prototypes, and user-centered experiences.</p>
                </div>
              </article>
              <article className="mini-card about-capability-card">
                <Rocket className="h-5 w-5 text-primary" />
                <div>
                  <h3>Development</h3>
                  <p>Building scalable full-stack applications and digital products.</p>
                </div>
              </article>
            </aside>
          </div>
        </section>

        <section id="skills" className="snap-section section-shell">
          <div className="section-container glass-panel">
            <div className="section-heading-row skills-heading">
              <div>
                <p className="text-label font-nav font-medium uppercase text-primary/90">Skills</p>
                <h2 className="skills-title mt-4 font-hero uppercase">Technical Skills</h2>
              </div>
              <p className="max-w-xl text-body text-foreground/78">
                A focused set of technical and design capabilities for building intelligent, polished, production-ready digital experiences.
              </p>
            </div>

            <div className="skills-grid mt-section">
              {skillCards.map((skill) => {
                const Icon = skill.icon;

                return (
                  <article key={skill.title} className="skill-card">
                    <div className="skill-card-top">
                      <div className="feature-icon compact">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <div className="skill-tags" aria-label={`${skill.title} skills`}>
                      {skill.skills.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="snap-section section-shell projects-section">
          <div className="section-container glass-panel">
            <div className="section-heading-row">
              <div>
                <p className="text-label font-nav font-medium uppercase text-primary/90">Featured Projects</p>
                <h2 className="projects-title mt-3 font-hero uppercase tracking-tight">Creative work with intelligence at the core.</h2>
              </div>
              <Rocket className="hidden h-12 w-12 text-primary/80 md:block" />
            </div>

            <div className="project-grid projects-grid">
              {projectCards.map((card) => {
                const Icon = card.icon;
                const project = portfolioProjects.find((item) => item.slug === card.slug);
                if (!project) return null;

                return (
                  <article key={project.slug} className="project-card">
                    <div className="project-card-top">
                      <div className="feature-icon compact">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="project-badge">{card.badge}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <BrowserMockup title={project.title} imageSrc={project.screenshot} className="project-preview" />
                    <div className="project-actions">
                      <Link to={`/projects/${project.slug}`} className="btn-primary project-button">
                        Explore
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary project-button">
                          Live Preview
                          <ArrowUpRight className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="snap-section section-shell pb-12">
          <div className="section-container contact-panel">
            <div className="contact-heading">
              <p className="text-label font-nav font-medium uppercase text-primary/90">Contact</p>
              <h2 className="mt-5 font-hero text-section uppercase tracking-tight">Connect</h2>
            </div>
            <div className="contact-card-grid">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <a key={card.title} href={card.href} target={card.href.startsWith("mailto:") ? undefined : "_blank"} rel={card.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="contact-card">
                    <span className="contact-card-icon">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="contact-card-title">{card.title}</span>
                    <span className="contact-card-link">{card.value}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

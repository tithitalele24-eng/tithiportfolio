import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import spaceBg from "@/assets/space-bg-hd.png";
import { getProjectBySlug } from "@/data/projects";
import { BrowserMockup } from "@/components/ui/mockups";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${spaceBg})`,
          }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
          <h1 className="font-hero text-4xl md:text-5xl">Project Not Found</h1>
          <p className="mt-4 text-foreground/85">The project page you requested does not exist.</p>
          <Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-xl border border-primary/45 bg-background/40 px-5 py-2.5 font-nav text-xl uppercase text-foreground nav-link-hover">
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${spaceBg})`,
        }}
      />
      <div className="absolute inset-0 bg-background/75" />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-10 md:px-10">
        <div className="glass-card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link to="/#projects" className="inline-flex items-center gap-2 rounded-xl border border-primary/45 bg-background/40 px-5 py-2.5 font-nav text-xl uppercase text-foreground nav-link-hover">
              <ArrowLeft className="h-4 w-4" />
              Back To Projects
            </Link>
            <span className="rounded-full border border-primary/40 bg-background/55 px-3 py-1 text-xs uppercase tracking-wide text-foreground/80">Project Page</span>
          </div>

          <h1 className="mt-7 font-hero ds-h2">{project.title}</h1>
          <p className="mt-4 ds-body text-foreground/90">{project.summary}</p>

          <div className="glass-card mt-7">
            <p className="font-nav text-xl uppercase text-primary">Overview</p>
            <p className="mt-3 text-foreground/90 leading-relaxed">{project.overview}</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="glass-card">
              <p className="font-nav text-xl uppercase text-primary">Technologies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-sm text-foreground/90">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <p className="font-nav text-xl uppercase text-primary">Key Highlights</p>
              <ul className="mt-3 space-y-2 text-foreground/90">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            <div>
              <p className="font-nav text-xl uppercase text-primary">Live Preview</p>
              <div className="mt-4">
                <BrowserMockup title={project.title} subtitle={project.summary} imageSrc={project.screenshot} className="w-full" />
              </div>
            </div>
          </div>

          <div className="glass-card mt-7">
            <p className="font-nav text-xl uppercase text-primary">Next Step</p>
            <p className="mt-3 text-foreground/90">If you want, I can add screenshots, design mockups, and GitHub links for this project here.</p>
            <Link to="/#contact" className="mt-4 inline-flex items-center gap-2 font-nav text-xl uppercase text-primary nav-link-hover">
              Contact For Full Case Study
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;

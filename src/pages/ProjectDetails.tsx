import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import spaceBg from "@/assets/space-bg-hd.png";
import { getProjectBySlug } from "@/data/projects";

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

  const projectActions = [
    { label: "Live Website", href: project.liveUrl },
    { label: "GitHub Repository", href: project.repositoryUrl },
  ].filter((action): action is { label: string; href: string } => Boolean(action.href));
  const isBurgerKingRedesign = project.slug === "burger-king-redesign";
  const designGoals = ["Improve usability", "Simplify navigation", "Improve visual hierarchy", "Create a cleaner ordering flow", "Modernize the interface"];
  const designProcess = ["Problem Identification", "Competitive Inspiration", "Wireframing", "UI Exploration", "High-Fidelity Design", "Interactive Prototype"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${spaceBg})`,
        }}
      />
      <div className="absolute inset-0 bg-background/75" />

      <main className="project-detail-page relative z-10 mx-auto w-full px-6 pb-20 pt-10 md:px-10">
        <div className="project-detail-shell">
          <div className="project-detail-nav">
            <Link to="/#projects" className="inline-flex items-center gap-2 rounded-xl border border-primary/45 bg-background/40 px-5 py-2.5 font-nav text-xl uppercase text-foreground nav-link-hover">
              <ArrowLeft className="h-4 w-4" />
              Back To Projects
            </Link>
            <span className="rounded-full border border-primary/40 bg-background/55 px-3 py-1 text-xs uppercase tracking-wide text-foreground/80">Project Page</span>
          </div>

          <header className="project-detail-header">
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="project-detail-tech" aria-label={`${project.title} tech stack`}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </header>

          <section className="project-detail-preview" aria-label={`${project.title} preview`}>
            <p>{isBurgerKingRedesign ? "Final Screens" : "Live Preview"}</p>
            <div className="project-detail-preview-frame">
              <img src={project.screenshot} alt={`${project.title} screenshot`} />
            </div>
            {isBurgerKingRedesign && project.prototypeUrl && (
              <div className="project-detail-actions">
                <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Figma Prototype
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            )}
            {!isBurgerKingRedesign && projectActions.length > 0 && (
              <div className="project-detail-actions">
                {projectActions.map((action) => (
                  <a key={action.label} href={action.href} target="_blank" rel="noopener noreferrer" className={action.label === "Live Website" ? "btn-primary" : "btn-secondary"}>
                    {action.label}
                    <ExternalLink className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </section>

          {isBurgerKingRedesign ? (
            <>
              <div className="project-detail-info-grid">
                <section className="project-detail-card">
                  <p className="project-detail-card-title">Project Overview</p>
                  <p className="project-detail-overview-text">{project.overview}</p>
                </section>

                <section className="project-detail-card">
                  <p className="project-detail-card-title">Design Goals</p>
                  <ul className="project-detail-highlights">
                    {designGoals.map((item) => (
                      <li key={item}>
                        <CheckCircle2 className="h-5 w-5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="project-detail-card project-detail-wide-card">
                <p className="project-detail-card-title">Design Process</p>
                <div className="project-detail-process">
                  {designProcess.map((item, index) => (
                    <span key={item}>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="project-detail-card project-detail-wide-card">
                <p className="project-detail-card-title">Key Improvements</p>
                <ul className="project-detail-highlights project-detail-improvement-grid">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <div className="project-detail-info-grid">
              <section className="project-detail-card">
                <p className="project-detail-card-title">Overview</p>
                <p className="project-detail-overview-text">{project.overview}</p>
              </section>

              <section className="project-detail-card">
                <p className="project-detail-card-title">Key Highlights</p>
                <ul className="project-detail-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;

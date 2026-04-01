import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

const projects: Project[] = [
  {
    name: "DevFlow",
    description:
      "An open-source developer productivity tool that tracks coding habits and suggests workflow improvements.",
    tech: ["React", "TypeScript", "Node.js"],
    url: "#",
  },
  {
    name: "Markable",
    description:
      "A minimal Markdown editor with live preview, built for speed and distraction-free writing.",
    tech: ["Svelte", "Tailwind CSS"],
    url: "#",
  },
  {
    name: "API Bench",
    description:
      "CLI tool for benchmarking REST API endpoints with detailed latency and throughput reports.",
    tech: ["Go", "Cobra"],
    url: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Projects
        </h2>
      </div>
      <div className="grid gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-5 rounded-lg bg-card border border-border hover:border-accent/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-body font-semibold text-foreground">
                {project.name}
              </h3>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors shrink-0"
                  aria-label={`View ${project.name}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

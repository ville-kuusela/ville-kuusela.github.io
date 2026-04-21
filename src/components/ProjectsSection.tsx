import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "Sanahuijari",
    description: "Wordlen kaltainen sananarvauspeli, jossa kirjainvihjeet sisältävät valheita, mikä tekee sanan päättelystä kiinnostavampaa ja haastavampaa.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://sanahuijari.vercel.app/",
  },
  {
    name: "Beat Builder",
    description:
      "Rumpusekvensserisovellus, jolla voi luoda halutunlaisia rumpukomppeja esimerkiksi soittimien soiton harjoittelun taustalle.",
    tech: ["Nuxt", "Tailwind CSS", "Vercel"],
    url: "https://beat-builder-online.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Projektit
        </h2>
      </div>

      <p className="text-sm text-off-black leading-relaxed mb-6">
        Tässä on esimerkkejä vapaa-ajalla luomistani projekteista.
      </p>

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 rounded-lg bg-card border border-border bg-white"
          >
            <div className="flex items-start justify-between gap-2">
              <a href={project.url}
                target="_blank"
                rel="noopener noreferrer">
                <h3 className="font-body font-semibold text-off-black hover:text-off-black/80 transition-colors">
                {project.name}
              </h3>
              </a>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors shrink-0"
                  aria-label={`Avaa ${project.name}`}
                >
                  <ExternalLink className="size-5" />
                </a>
              )}
            </div>
            <p className="text-sm text-off-black mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  className="text-xs font-medium px-3 py-1"
                >
                  {t}
                </Badge>
              ))}
            </div>
            {project.github && (
              <div className="mt-3">
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-black hover:text-off-black/80 transition-colors underline shrink-0 text-sm"
              >
                Github
              </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

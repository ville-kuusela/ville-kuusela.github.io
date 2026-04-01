import { Highlight } from "@/lib/types";

const ExperienceSection = ({ highlights, title }: { highlights: Highlight[], title: string }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          {title}
        </h2>
      </div>
      <div className="space-y-8">
        {highlights.map((job, i) => (
          <div key={i} className="relative pl-6 border-l-2 border-accent">
            <p className="text-xs text-muted-foreground tracking-wider mb-1">
              {job.period}
            </p>
            <h3 className="font-body font-semibold text-foreground">
              {job.title}
            </h3>
            <p className="text-sm text-accent font-medium mt-1">
              {job.subtitle}
            </p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

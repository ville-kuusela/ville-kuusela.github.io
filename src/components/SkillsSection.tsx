import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "JavaScript", "Node.js", "Python",
  "Tailwind CSS", "Next.js", "PostgreSQL", "GraphQL", "Docker",
  "Git", "REST APIs", "Redis", "AWS", "CI/CD",
];

const SkillsSection = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Skills
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-xs font-medium px-3 py-1"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

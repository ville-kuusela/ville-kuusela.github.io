import { Badge } from "@/components/ui/badge";

const skills = [
  "Vue", "Nuxt", "React", "React Native", "Next.js", "Typescript", "CSS", "Tailwind CSS", "Storyblok", "Laravel", "PHP", "Shopware"
];

const SkillsSection = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Taidot
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
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

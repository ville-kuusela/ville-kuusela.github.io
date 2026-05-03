import { Badge } from "@/components/ui/badge";

const skills = [
  "Vue", "Nuxt", "React", "Next.js", "React Native", "TypeScript", "CSS", "Tailwind CSS", "Storyblok CMS", "Shopware", "Laravel", "PHP"
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

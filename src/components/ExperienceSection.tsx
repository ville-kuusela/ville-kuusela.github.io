interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp",
    period: "2022 — Present",
    description:
      "Leading front-end architecture for a SaaS platform. Built component libraries, improved CI/CD pipelines, and mentored junior developers.",
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2019 — 2022",
    description:
      "Developed full-stack features using React and Node.js. Shipped a real-time analytics dashboard used by 10K+ users.",
  },
  {
    title: "Junior Developer",
    company: "AgencyPro",
    period: "2017 — 2019",
    description:
      "Built responsive websites and e-commerce solutions for small businesses. Collaborated directly with clients on requirements.",
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Experience
        </h2>
      </div>
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <div key={i} className="relative pl-6 border-l-2 border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {job.period}
            </p>
            <h3 className="font-body font-semibold text-foreground">
              {job.title}
            </h3>
            <p className="text-sm text-accent font-medium">{job.company}</p>
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

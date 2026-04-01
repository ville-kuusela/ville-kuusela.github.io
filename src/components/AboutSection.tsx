const AboutSection = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          About
        </h2>
      </div>
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          I'm a software engineer with 7+ years of experience building web
          applications. I specialize in front-end development with React and
          TypeScript, but I'm equally comfortable working across the full stack.
        </p>
        <p>
          I care deeply about developer experience, clean code, and shipping
          products that genuinely help people. When I'm not coding, you'll find
          me contributing to open-source projects or writing technical blog posts.
        </p>
        <p>
          I hold a B.S. in Computer Science from UC Berkeley and have worked
          across startups and mid-size companies in the Bay Area.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

import ProfileCard from "@/components/ProfileCard";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16">
          {/* Left column — scrollable content */}
          <main className="flex-1 space-y-14">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
          </main>

          {/* Right column — sticky profile card */}
          <aside className="md:w-72 shrink-0">
            <div className="md:sticky md:top-20">
              <ProfileCard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;

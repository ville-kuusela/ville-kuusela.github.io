import ProfileCard from "@/components/ProfileCard";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import HighlightsSection from "@/components/HighlightsSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Highlight } from "@/lib/types";

const Index = () => {
  const jobs: Highlight[] = [
    {
      title: "Ohjelmistokehittäjä",
      subtitle: "Meiko Oy",
      period: "2023 eteenpäin",
      description:
        "Työskentelen osana monipuolisia verkko- ja mobiilisovellusprojekteja, käyttäen sekä frontend- että backend-teknologioita. Olen työskennellyt sekä tiimien osana että myös itsenäisesti projekteja vetäen.",
    },
  ];

  const education: Highlight[] = [
    {
      title: 'Tietojenkäsittelyn tutkinto-ohjelma',
      subtitle: 'Jyväskylän ammattikorkeakoulu',
      period: '2020 - 2024',
      description: 'Perehdyin opinnoissani monipuoliseen web-sovelluskehitykseen, mitä kautta sain vankan pohjan uralleni. Minut palkittiin stipendillä nopeasta edistyksestäni ja erinomaisista arvosanoistani.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16">
          {/* Left column — scrollable content */}
          <main className="flex-1 space-y-14">
            <AboutSection />
            <SkillsSection />
            <HighlightsSection highlights={jobs} title="Työkokemus" />
            <HighlightsSection highlights={education} title="Koulutus" />
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

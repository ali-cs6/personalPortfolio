// import "./App.css";
import AboutmeMain from "./components/aboutMeSection/AboutmeMain.jsx";
import ContactMain from "./components/contactSection/ContactMain.jsx";
import ExperienceMain from "./components/experienceSection/ExperienceMain.jsx";
import HeroMain from "./components/heroSection/HeroMain.jsx";
import NavBarMain from "./components/navBar/NavBarMain.jsx";
import ProjectsMain from "./components/projectsSection/ProjectsMain.jsx";
import SkillMain from "./components/skillsSection/SkillMain.jsx";
import SubSkillSection from "./components/skillsSection/SubSkillSection.jsx";
import SubHeroSection from "./components/subherosection/SubHeroSection.jsx";
import Footer from "./footer/Footer.jsx";
import Helper from "./Helper.jsx";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutmeMain />
      <SkillMain />
      <SubSkillSection />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMain />
      <Footer />
      {/* <Helper /> */}
    </main>
  );
}

export default App;

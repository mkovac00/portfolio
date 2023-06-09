import { useState } from "react";
import "./App.scss";

import Layout from "./components/layout/Layout";
import Title from "./components/title/Title";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Introduction from "./components/about-me/Introduction";
import TechStack from "./components/tech-stack/TechStack";
import ProjectsList from "./components/my-projects/ProjectsList";
import MoreAbout from "./components/about-me/MoreAbout";
import Contacts from "./components/contact/Contacts";
import Footer from "./components/footer/Footer";

import { ThemeContext } from "./contexts/theme-context";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="app-wrapper">
          <div className="app">
            <Navigation />
            <Layout children={<Hero />} />
            <Layout children={<Introduction />} />
            <Layout children={<Title id="tech-stack" title="TECH STACK" />} />
            <Layout children={<TechStack />} />
            <Layout children={<Title id="projects" title="MY PROJECTS" />} />
            {/* ProjectsList is not put into Layout because each item inside
            that list is already put into a Layout component. */}
            <ProjectsList />
            <Layout children={<Title id="aboutme" title="ABOUT ME" />} />
            <Layout children={<MoreAbout />} />
            <Layout children={<Title id="contact" title="CONTACT ME" />} />
            <Layout children={<Contacts />} />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

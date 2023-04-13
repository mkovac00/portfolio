import { useState } from "react";
import "./App.scss";

import Layout from "./components/layout/Layout";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";

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
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

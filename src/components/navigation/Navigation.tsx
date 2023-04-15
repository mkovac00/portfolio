import { useContext } from "react";
import "./Navigation.scss";

import { ThemeContext } from "../../contexts/theme-context";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  return (
    <nav className="navigation">
      <div className="navigation-top">
        <h3 className="navigation__h3">MENU</h3>
        <h1 className="navigation__h1">The Portfolio</h1>
        <h3 className="navigation__h3" onClick={handleThemeChange}>
          THEME
        </h3>
      </div>
      <div className="navigation-bot">
        <h4 className="navigation__h4">VOL 1</h4>
        <h4 className="navigation__h4">14 APRIL 2023</h4>
      </div>
    </nav>
  );
};

export default Navigation;

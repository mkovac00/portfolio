import { useContext, useState } from "react";
import "./Navigation.scss";

import { ThemeContext } from "../../contexts/theme-context";
import { motion, AnimatePresence } from "framer-motion";

import { getDate } from "../../assets/functions/functions";

const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  const showHideMenu = () => {
    setIsMenuOpen((previousValue) => !previousValue);
  };

  const todaysDate = getDate();

  return (
    <motion.nav className="navigation">
      <div className="navigation-top">
        <h3 className="navigation__h3" onClick={showHideMenu}>
          MENU
        </h3>
        <h1 className="navigation__h1">The Portfolio</h1>
        <h3 className="navigation__h3" onClick={handleThemeChange}>
          THEME
        </h3>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <ul className="navigation-menu">
            <motion.li
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: "32px", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              exit={{ y: "0px", opacity: 0 }}
              className="navigation__menu-li"
            >
              <a
                className="navigation__menu-link"
                href="/#tech-stack"
                onClick={showHideMenu}
              >
                TECH STACK
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: "64px", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              exit={{ y: "0px", opacity: 0 }}
              className="navigation__menu-li"
            >
              <a
                className="navigation__menu-link"
                href="/#projects"
                onClick={showHideMenu}
              >
                PROJECTS
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: "96px", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              exit={{ y: "0px", opacity: 0 }}
              className="navigation__menu-li"
            >
              <a
                className="navigation__menu-link"
                href="/#aboutme"
                onClick={showHideMenu}
              >
                ABOUT ME
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: "128px", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              exit={{ y: "0px", opacity: 0 }}
              className="navigation__menu-li"
            >
              <a
                className="navigation__menu-link"
                href="/#contact"
                onClick={showHideMenu}
              >
                CONTACT
              </a>
            </motion.li>
          </ul>
        )}
      </AnimatePresence>

      <div className="navigation-bot">
        <h4 className="navigation__h4">VOL 1</h4>
        <h4 className="navigation__h4">{todaysDate}</h4>
      </div>
    </motion.nav>
  );
};

export default Navigation;

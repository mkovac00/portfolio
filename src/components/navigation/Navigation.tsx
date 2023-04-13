import "./Navigation.scss";

import { CgMenuRound, CgDarkMode } from "react-icons/cg";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation-social-media">
          <CgMenuRound size={30} className="navigation-icon nav-menu" />
          <CgDarkMode size={30} className="navigation-icon nav-mode" />
        </div>
        <h1 className="navigation-title">Hogwarts inspired portfolio</h1>
        <div className="navigation-social-media">
          <TiSocialGithubCircular
            size={35}
            className="navigation-icon nav-github"
          />
          <TiSocialLinkedinCircular
            size={35}
            className="navigation-icon nav-linkedin"
          />
        </div>
      </nav>
      <nav className="navigation-mobile">
        <div className="navigation-social-media">
          <CgMenuRound size={30} className="navigation-icon nav-menu" />
        </div>
        <h1 className="navigation-title">Hogwarts</h1>
        <div className="navigation-social-media">
          <CgDarkMode size={30} className="navigation-icon nav-mode" />
        </div>
      </nav>
    </>
  );
};

export default Navigation;

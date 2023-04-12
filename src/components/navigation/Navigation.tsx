import "./Navigation.scss";

import { CgMenuRound } from "react-icons/cg";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";

const Navigation = () => {
  return (
    <nav className="navigation">
      <CgMenuRound size={30} className="navigation-icon" />
      <h1 className="navigation-title">Hogwarts inspired Portfolio</h1>
      <div className="navigation-social-media">
        <TiSocialGithubCircular size={35} className="navigation-icon" />
        <TiSocialLinkedinCircular size={35} className="navigation-icon" />
      </div>
    </nav>
  );
};

export default Navigation;

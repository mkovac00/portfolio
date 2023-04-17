import "./MoreAbout.scss";

import Button from "../button/Button";
import { aboutMe } from "../../assets/content/about-me";

const MoreAbout = () => {
  return (
    <section className="about-me">
      <div className="about-me__image-wrapper">
        <img
          src={aboutMe.image}
          className="about-me__image"
          alt="Person illustration laughing"
        />
      </div>
      <div className="about-me__content">
        <h2 className="about-me__h2">{aboutMe.title}</h2>
        <p className="about-me__p">{aboutMe.content}</p>
        <Button text="DOWNLOAD MY CV" />
      </div>
    </section>
  );
};

export default MoreAbout;

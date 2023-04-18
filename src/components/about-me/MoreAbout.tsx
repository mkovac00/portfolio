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
        <p className="about-me__p">{aboutMe.content.paragraph_1}</p>
        <p className="about-me__p">{aboutMe.content.paragraph_2}</p>
        <p className="about-me__p">{aboutMe.content.paragraph_3}</p>
        <p className="about-me__p">{aboutMe.content.paragraph_4}</p>
        <p className="about-me__p">{aboutMe.content.paragraph_5}</p>
        <Button text="DOWNLOAD CV" />
      </div>
    </section>
  );
};

export default MoreAbout;

import "./Introduction.scss";

import Button from "../button/Button";

import { introduction } from "../../assets/content/introduction";
import myBitmoji from "../../assets/images/mario.png";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-content">
        <h1 className="introduction__h1">{introduction.h1}</h1>
        <p className="introduction__p">{introduction.p}</p>
        <Button text={"CONTACT ME"} />
      </div>
      <div className="introduction-image">
        <img
          className="bitmoji-image"
          src={myBitmoji}
          alt="Person illustration"
        />
      </div>
    </section>
  );
};

export default Introduction;

import "./Introduction.scss";

import Button from "../button/Button";

import myBitmoji from "../../assets/images/mario.png";

type IntroductionProps = {
  h1: string;
  p: string;
};

const Introduction = (props: IntroductionProps) => {
  return (
    <section className="introduction">
      <div className="introduction-content">
        <h1 className="introduction__h1">{props.h1}</h1>
        <p className="introduction__p">{props.p}</p>
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

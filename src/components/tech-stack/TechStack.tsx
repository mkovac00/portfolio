import "./TechStack.scss";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiSass, DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiDocker, SiKubernetes, SiFigma } from "react-icons/si";

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="tech-stack-section__content">
        <AiFillHtml5 size={60} className="tech-stack__item" />
        <AiFillGithub size={60} className="tech-stack__item" />
        <DiCss3 size={60} className="tech-stack__item" />
        <DiReact size={60} className="tech-stack__item" />
        <DiSass size={60} className="tech-stack__item" />
        <DiNodejsSmall size={60} className="tech-stack__item" />
        <IoLogoJavascript size={60} className="tech-stack__item" />
        <SiTypescript size={45} className="tech-stack__item" />
        <SiDocker size={60} className="tech-stack__item" />
        <SiKubernetes size={50} className="tech-stack__item" />
        <SiFigma size={50} className="tech-stack__item" />
      </div>
    </section>
  );
};

export default TechStack;

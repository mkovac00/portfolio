import "./TechStack.scss";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiSass, DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiDocker, SiKubernetes, SiFigma } from "react-icons/si";

const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -200 },
};

const TechStack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className="tech-stack-section"
      id="tech-stack"
    >
      <div className="tech-stack-section__content">
        <div data-tooltip="HTML">
          <AiFillHtml5 size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="Github">
          <AiFillGithub size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="CSS">
          <DiCss3 size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="React">
          <DiReact size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="Sass">
          <DiSass size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="NodeJS">
          <DiNodejsSmall size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="JavaScript">
          <IoLogoJavascript size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="TypeScript">
          <SiTypescript size={45} className="tech-stack__item" />
        </div>
        <div data-tooltip="Docker">
          <SiDocker size={60} className="tech-stack__item" />
        </div>
        <div data-tooltip="Kubernetes">
          <SiKubernetes size={50} className="tech-stack__item" />
        </div>
        <div data-tooltip="Figma">
          <SiFigma size={50} className="tech-stack__item" />
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;

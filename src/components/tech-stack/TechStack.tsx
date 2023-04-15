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
    >
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
    </motion.section>
  );
};

export default TechStack;

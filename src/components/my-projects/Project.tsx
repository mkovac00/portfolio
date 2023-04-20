import "./Project.scss";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "../button/Button";

const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -200 },
};

type ProjectProps = {
  title: string;
  content: string;
  image: string;
  hasDemo: boolean;
  hasCode: boolean;
  reverseDirection: boolean;
};

const Project = (props: ProjectProps) => {
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
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        className="project-container"
        style={
          props.reverseDirection
            ? { flexDirection: "row-reverse" }
            : { flexDirection: "row" }
        }
      >
        <div className="project-image-wrapper">
          <img
            src={props.image}
            className="project-image"
            alt="Project screenshot"
          />
        </div>
        <div className="project-content">
          <h2 className="project-container__h2">{props.title}</h2>
          <p className="project-container__p">{props.content}</p>
          <div className="project-content__buttons">
            {props.hasDemo && <Button text="DEMO" />}
            {props.hasCode && <Button text="CODE" />}
          </div>
        </div>
      </motion.div>

      <div className="project-container__smaller-viewport">
        <div className="project-image-wrapper__smaller-viewport">
          <img
            src={props.image}
            className="project-image__smaller-viewport"
            alt="Project screenshot"
          />
        </div>
        <div className="project-content__smaller-viewport">
          <h2 className="project-container__h2__smaller-viewport">
            {props.title}
          </h2>
          <p className="project-container__p__smaller-viewport">
            {props.content}
          </p>
          <div className="project-content__buttons__smaller-viewport">
            {props.hasDemo && <Button text="DEMO" />}
            {props.hasCode && <Button text="CODE" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

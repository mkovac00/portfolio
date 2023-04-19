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

      <div
        className="project-container__small-screens"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${props.image})`,
        }}
      >
        <div className="project-content__small-screens">
          <h2 className="project-container__h2__small-screens">
            {props.title}
          </h2>
          <p className="project-container__p__small-screens">{props.content}</p>
          <div className="project-content__buttons__small-screens">
            {props.hasDemo && <Button text="DEMO" />}
            {props.hasCode && <Button text="CODE" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

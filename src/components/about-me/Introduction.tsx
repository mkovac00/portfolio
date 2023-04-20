import "./Introduction.scss";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "../button/Button";

import { introduction } from "../../assets/content/introduction";
import myBitmoji from "../../assets/images/mario.png";

const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -200 },
};

const Introduction = () => {
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
      className="introduction"
    >
      <div className="introduction-content">
        <h1 className="introduction__h1">{introduction.h1}</h1>
        <p className="introduction__p">{introduction.p}</p>
        <a className="introduction__a" href="/#contact">
          <Button text={"CONTACT ME"} />
        </a>
      </div>
      <div className="introduction-image">
        <img
          className="bitmoji-image"
          src={myBitmoji}
          alt="Person illustration"
        />
      </div>
    </motion.section>
  );
};

export default Introduction;

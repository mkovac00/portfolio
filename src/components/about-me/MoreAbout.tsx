import "./MoreAbout.scss";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "../button/Button";
import { aboutMe } from "../../assets/content/about-me";

const variants = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

const MoreAbout = () => {
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
      className="about-me"
    >
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
    </motion.section>
  );
};

export default MoreAbout;

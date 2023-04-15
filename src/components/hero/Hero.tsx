import "./Hero.scss";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const Hero = () => {
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
      className="hero-section"
    >
      <div className="hero-section__text-wrapper">
        <h3 className="hero-section__h3">it's a me,</h3>
        <h1 className="hero-section__h1">MARIO KOVAČ</h1>
        <h4 className="hero-section__h3">
          design enthusiast, gamer, bookworm, film geek
        </h4>
      </div>
    </motion.section>
  );
};

export default Hero;

import "./Hero.scss";

import heroImage from "../../assets/images/mario.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__text-container">
        <h1 className="hero-section__h1">MARIO KOVAČ</h1>
        <h3 className="hero-section__h4">SOFTWARE ENGINEER</h3>
        <h3 className="hero-section__h3">DESIGN ENTHUSIAST</h3>
        <div className="hero-section__text-wrapper">
          <h2 className="hero-section__h2">FRONTEND DEVELOPER</h2>
        </div>
      </div>
      <div className="hero-section__image-container">
        <img
          src={heroImage}
          alt="Person illustration"
          className="hero-section__image"
        />
      </div>
    </section>
  );
};

export default Hero;

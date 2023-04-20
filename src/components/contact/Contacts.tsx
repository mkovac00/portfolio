import "./Contacts.scss";

import Button from "../button/Button";

const Contacts = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__email-wrapper">
        <h2 className="contact-section__h2">CONTACT ME VIA</h2>
        <a target="_blank" href="mailto:mkovac25122512@gmail.com">
          <Button text="EMAIL" />
        </a>
      </div>
      <div className="contact-section__social-media-wrapper">
        <h2 className="contact-section__h2">OR FIND ME ON SOCIAL MEDIA</h2>
        <div className="contact-section__social-media">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mario-kova%C4%8D-4b9462242/"
          >
            <Button text="LINKEDIN" />
          </a>
          <a target="_blank" href="https://github.com/mkovac00">
            <Button text="GITHUB" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mario.kovac1/?next=%2F"
          >
            <Button text="INSTAGRAM" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

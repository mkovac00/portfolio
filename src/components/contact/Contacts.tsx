import "./Contacts.scss";

import Button from "../button/Button";

const Contacts = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__email-wrapper">
        <h2 className="contact-section__h2">CONTACT ME VIA</h2>
        <Button text="EMAIL" />
      </div>
      <div className="contact-section__social-media-wrapper">
        <h2 className="contact-section__h2">OR FIND ME ON SOCIAL MEDIA</h2>
        <div className="contact-section__social-media">
          <Button text="LINKEDIN" />
          <Button text="GITHUB" />
          <Button text="INSTAGRAM" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;

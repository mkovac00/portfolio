import "./Project.scss";

import Button from "../button/Button";

type ProjectProps = {
  title: string;
  content: string;
  image: string;
  hasDemo: boolean;
  hasCode: boolean;
};

const Project = (props: ProjectProps) => {
  return (
    <>
      <div className="project-container">
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
      </div>

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

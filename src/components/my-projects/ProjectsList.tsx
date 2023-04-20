import "./ProjectsList.scss";

import Layout from "../layout/Layout";
import Project from "./Project";

import { projectsList } from "../../assets/content/myprojects";

const ProjectsList = () => {
  const myProjects = projectsList.map((project, index) => (
    <Project
      key={index}
      title={project.title}
      content={project.content}
      image={project.image}
      hasDemo={project.title === "TRAVELSHARE" ? false : true}
      hasCode={true}
      reverseDirection={index % 2 === 0 ? false : true}
      linkToCode={project.linkToCode}
      linkToDemo={project.linkToDemo}
    />
  ));

  return (
    <div>
      {myProjects.map((project, index) => {
        return <Layout key={index} children={project} />;
      })}
    </div>
  );
};

export default ProjectsList;

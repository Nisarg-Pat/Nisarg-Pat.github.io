import React from "react";

import projects from "../../data/projects.json"
import ProjectItem from "./ProjectItem";

const ProjectsScreenComponent = () => {
    return(
        <div className={"mt-3"}>
            {projects.map((item, key) => <ProjectItem project={item}/>)}
        </div>
    )
}

export default ProjectsScreenComponent;
import React from "react";

const ProjectItem = ({project}) => {
    return(
        <>
            <div className={"ps-3 pe-3"}>
                <span className={"al-project-name"}>{project.name} </span>
                <span className={"al-project-short"}>{project.shortDescription}&nbsp;
                    <a href={project.link} className={"al-project-link"}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </span>
                <div>
                    Technologies: {project.technologies}
                </div>
                <ul>
                    {project.description.map((item, key) => <li dangerouslySetInnerHTML={{__html:item}}/>)}
                </ul>
            </div>
            <hr/>
        </>
    );
}

export default ProjectItem;
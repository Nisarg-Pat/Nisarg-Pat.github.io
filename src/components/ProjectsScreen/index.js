import React from "react";
import NavigationPanel from "../NavigationPanel";
import ProjectsScreenComponent from "./ProjectsScreenComponent";


const ProjectsScreen = () => {
    return (
        <>
            <div className="mt-2">
                <NavigationPanel active={"projects"}/>
            </div>
            <div>
                <ProjectsScreenComponent/>
            </div>
        </>

    )
}

export default ProjectsScreen;
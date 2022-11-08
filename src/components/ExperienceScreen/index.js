import React from "react";
import NavigationPanel from "../NavigationPanel";
import ExperienceScreenComponent from "./ExperienceScreenComponent";

const ExperienceScreen = () => {
    return (
        <>
            <div className="mt-2">
                <NavigationPanel active={"experience"}/>
            </div>
            <div>
                <ExperienceScreenComponent/>
            </div>
        </>

    )
}

export default ExperienceScreen;
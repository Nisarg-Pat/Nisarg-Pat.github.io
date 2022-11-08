import React from "react";

import experience from "../../data/experience.json"
import ExperienceItem from "./ExperienceItem";

const ExperienceScreenComponent = () => {
    console.log(experience);
    return(
        <div className={"mt-3"}>
            {experience.map((item, key) => <ExperienceItem experience={item}/>)}
        </div>
    )
}

export default ExperienceScreenComponent;
import React from "react";

import experience from "../../data/experience.json"
import ExperienceItem from "./ExperienceItem";

const ExperienceScreenComponent = () => {
    console.log(experience);
    return(
        <>
            {experience.map((item, key) => <ExperienceItem experience={item}/>)}
        </>
    )
}

export default ExperienceScreenComponent;
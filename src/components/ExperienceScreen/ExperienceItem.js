import React from "react";

const ExperienceItem = ({experience}) => {
    return(
        <div>
            <h2>{experience.title}</h2>
            <h3>{experience.place}</h3>
            <div>{experience.startDate} - {experience.endDate}</div>
            <ul>
                {experience.description.map((item, key) => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default ExperienceItem;
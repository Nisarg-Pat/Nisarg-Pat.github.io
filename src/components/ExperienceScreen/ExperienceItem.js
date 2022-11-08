import React from "react";

const ExperienceItem = ({experience}) => {
    return(
        <>
            <div className={"ps-3 pe-3"}>
                <div className={"al-block"}>
                    <h3 className={"al-left"}>{experience.title}</h3>
                    <h3 className={"al-right"}>{experience.startDate} - {experience.endDate}</h3>
                </div>

                <h3 className={"al-clear"}>{experience.place}</h3>
                <ul>
                    {experience.description.map((item, key) => <li>{item}</li>)}
                </ul>
            </div>
            <hr/>
        </>
    )
}

export default ExperienceItem;
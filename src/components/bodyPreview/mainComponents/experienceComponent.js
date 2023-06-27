import React from "react";

const ExperienceComponent = ({ experience, index }) => {
        return (
            <div className="mainSubComponent">
                <div className="yearWrap">
                    <div className="previewYear start">{experience[index].from}</div>
                    <div className="previewYear start">{experience[index].to}</div>
                </div>
                <div className="previewMainSubWrap">
                    <div className="previewMainHeader">{experience[index].position}</div>
                    <div className="previewMainText">{experience[index].company}</div>
                    <div className="previewMainText">{experience[index].city}</div>
                </div>
            </div>
        )
}

export default ExperienceComponent;
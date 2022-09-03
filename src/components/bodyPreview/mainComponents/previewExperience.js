import React from "react";
import ExperienceComponent from "./experienceComponent";

class PreviewExperience extends React.Component {
    render() {
        return (
            <div className="previewExperience">
                <div className="previewMainHeader">Work Experience</div>
                <ExperienceComponent />
                <ExperienceComponent />
                <ExperienceComponent />
            </div>
        )
    }
}

export default PreviewExperience;
import React from "react";
import EducationComponent from "./educationCompontent";
import "../../../styles/previewStyles/previewMain.css";

class previewEducation extends React.Component {
    render() {
        return (
            <div className="previewMainWrap">
                <div className="previewSubHeader">Education</div>
                <EducationComponent />
                <EducationComponent />
            </div>
        )
    }
}

export default previewEducation;
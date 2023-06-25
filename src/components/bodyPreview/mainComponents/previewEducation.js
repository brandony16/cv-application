import React from "react";
import EducationComponent from "./educationCompontent";
import "../../../styles/previewStyles/previewMain.css";

class PreviewEducation extends React.Component {
    render() {
        return (
            <div className="previewMainWrap">
                <div className="previewSubHeader">Education</div>
                {this.props.education.map((item, i) => (
                    <EducationComponent education={this.props.education} index={i} key={i}/>
                ))} 
            </div>
        )
    }
}

export default PreviewEducation;
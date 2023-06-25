import React from "react";
import ExperienceComponent from "./experienceComponent";
import "../../../styles/previewStyles/previewMain.css";

class PreviewExperience extends React.Component {
    render() {
        return (
            <div className="previewMainWrap">
                <div className="previewSubHeader">Work Experience</div>
                {this.props.experience.map((item, i) => (
                    <ExperienceComponent experience={this.props.experience} index={i} key={i}/>
                ))} 
            </div>
        )
    }
}

export default PreviewExperience;
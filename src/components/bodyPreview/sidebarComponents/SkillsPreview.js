import React from "react";
import "../../../styles/previewStyles/PreviewSidebar.css"

class SkillsPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="sidebarComp">
                <div className="previewSideHeader">Skills</div>
                <ul className="previewSideList">
                    {this.props.skills.map((skill, i) => (
                        <li className="skillItem" key={i}>{skill.skill}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SkillsPreview;
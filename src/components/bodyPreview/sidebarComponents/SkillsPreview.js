import React from "react";

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
                <div className="previewSideList"></div>
            </div>
        )
    }
}

export default SkillsPreview;
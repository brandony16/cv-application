import React from "react";

class AboutPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="sidebarComp">
                <div className="previewSideHeader">About Me</div>
                <div className="previewInfo">
                    <div className="previewSideText">{this.props.info[5].value}</div>
                </div>
            </div>
        )
    }
}

export default AboutPreview;
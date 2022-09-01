import React from "react";
import profilePic from "../../assets/previewBaseImg.jpg";

class PreviewSidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <img src={profilePic} alt="you" className="profilePic" />
            </div>
        );
    }
}

export default PreviewSidebar;
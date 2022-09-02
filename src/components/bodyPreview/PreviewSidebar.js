import React from "react";
import profilePic from "../../assets/previewBaseImg.jpg";
import "../../styles/previewStyles/sidebarStyles/PreviewSidebar.css";
import AboutPreview from "./sidebarComponents/AboutPreview";
import SkillsPreview from "./sidebarComponents/SkillsPreview";
import ContactPreview from "./sidebarComponents/ContactPreview";

class PreviewSidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <img src={profilePic} alt="you" className="profilePic" />
                <ContactPreview />
                <AboutPreview />
                <SkillsPreview />
            </div>
        );
    }
}

export default PreviewSidebar;
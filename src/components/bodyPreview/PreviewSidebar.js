import React from "react";
import AboutPreview from "./sidebarComponents/AboutPreview";
import SkillsPreview from "./sidebarComponents/SkillsPreview";
import ContactPreview from "./sidebarComponents/ContactPreview";
import "../../styles/previewStyles/PreviewSidebar.css";


class PreviewSidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const selectedImage = this.props.info.find((inform) => inform.name === "pic")?.selected || null;  
        if (!selectedImage || !((selectedImage instanceof Blob) || (selectedImage instanceof File))) {
            return (
                <div className="sidebar">
                    <img src={selectedImage} alt="you" className="profilePic" />
                    <ContactPreview info={this.props.info} />
                    <AboutPreview info={this.props.info}/>
                    <SkillsPreview skills={this.props.skills}/>
                </div>
            )
          }
      
        return(
            <div className="sidebar">
                <img src={URL.createObjectURL(selectedImage) || selectedImage} alt="you" className="profilePic" />
                <ContactPreview info={this.props.info} />
                <AboutPreview info={this.props.info}/>
                <SkillsPreview skills={this.props.skills}/>
            </div>
        );
    }
}

export default PreviewSidebar;
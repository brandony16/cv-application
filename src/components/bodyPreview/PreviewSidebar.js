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

        if (!this.props.info[7].selected || !((this.props.info[7].selected instanceof Blob) || (this.props.info[7].selected instanceof File))) {
            console.log(this.props.info[7].selected instanceof Blob);   
            return <img src="" alt="you" className="profilePic" />;
          }
      
        return(
            <div className="sidebar">
                <img src={URL.createObjectURL(this.props.info[7].selected)} alt="you" className="profilePic" />
                <ContactPreview info={this.props.info} />
                <AboutPreview info={this.props.info}/>
                <SkillsPreview info={this.props.info}/>
            </div>
        );
    }
}

export default PreviewSidebar;
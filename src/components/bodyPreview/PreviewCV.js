import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewSidebar from "./PreviewSidebar";
import PreviewExperience from "./mainComponents/previewExperience";
import PreviewEducation from "./mainComponents/previewEducation";
import "../../styles/previewStyles/Preview.css";

class PreviewCV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const selectedImage =
      this.props.info.find((inform) => inform.name === "pic")?.selected || null;

    return (
      <div className="previewCV" id="previewCV">
        <div className="sidebarWrap">
          <PreviewSidebar
            info={this.props.info}
            selected={selectedImage}
            skills={this.props.skills}
          />
        </div>
        <div className="mainWrap">
          <PreviewHeader info={this.props.info} />
          <div className="mainSubWrap">
            <PreviewExperience experience={this.props.experience} />
            <PreviewEducation education={this.props.education} />
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewCV;

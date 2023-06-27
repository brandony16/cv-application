import React from "react";

const AboutPreview = ({ info }) => {
  return (
    <div className="sidebarComp">
      <div className="previewSideHeader">About Me</div>
      <div className="previewInfo">
        <div className="previewSideText">{info[5].value}</div>
      </div>
    </div>
  );
};

export default AboutPreview;

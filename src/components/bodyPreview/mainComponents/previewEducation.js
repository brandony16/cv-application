import React from "react";
import EducationComponent from "./educationCompontent";
import "../../../styles/previewStyles/previewMain.css";

const PreviewEducation = ({ education }) => {
  return (
    <div className="previewMainWrap">
      <div className="previewSubHeader">Education</div>
      {education.map((item, i) => (
        <EducationComponent education={education} index={i} key={i} />
      ))}
    </div>
  );
};

export default PreviewEducation;

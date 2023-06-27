import React from "react";
import ExperienceComponent from "./experienceComponent";
import "../../../styles/previewStyles/previewMain.css";

const PreviewExperience = ({ experience }) => {
  return (
    <div className="previewMainWrap">
      <div className="previewSubHeader">Work Experience</div>
      {experience.map((item, i) => (
        <ExperienceComponent
          experience={experience}
          index={i}
          key={i}
        />
      ))}
    </div>
  );
};

export default PreviewExperience;

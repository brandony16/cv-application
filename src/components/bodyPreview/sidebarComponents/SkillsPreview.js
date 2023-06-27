import React from "react";
import "../../../styles/previewStyles/PreviewSidebar.css";

const SkillsPreview = ({ skills }) => {
  return (
    <div className="sidebarComp">
      <div className="previewSideHeader">Skills</div>
      <ul className="previewSideList">
        {skills.map((skill, i) => (
          <li className="skillItem" key={i}>
            {skill.skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPreview;

import React from "react";
import AboutPreview from "./sidebarComponents/AboutPreview";
import SkillsPreview from "./sidebarComponents/SkillsPreview";
import ContactPreview from "./sidebarComponents/ContactPreview";
import "../../styles/previewStyles/PreviewSidebar.css";

const PreviewSidebar = ({ info, selected, skills }) => {
  if (!selected || !(selected instanceof Blob || selected instanceof File)) {
    return (
      <div className="sidebar">
        <img src={selected} alt="you" className="profilePic" />
        <ContactPreview info={info} />
        <AboutPreview info={info} />
        <SkillsPreview skills={skills} />
      </div>
    );
  }

  return (
    <div className="sidebar">
      <img
        src={URL.createObjectURL(selected) || selected}
        alt="you"
        className="profilePic"
      />
      <ContactPreview info={info} />
      <AboutPreview info={info} />
      <SkillsPreview skills={skills} />
    </div>
  );
};

export default PreviewSidebar;

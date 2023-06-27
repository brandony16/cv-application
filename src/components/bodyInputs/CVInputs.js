import React from "react";
import InputPersonal from "./PersonalInput";
import SkillsInput from "./SkillsInput";
import ExperienceInput from "./ExperienceInput";
import EducationInput from "./EducationInput";
import UtilButtons from "./utilButtons";
import "../../styles/inputStyles/CVInputs.css";

const CVInputs = ({
  cv,
  updateTxt,
  updatePic,
  addSkill,
  removeSkill,
  updateSkillTxt,
  addExperience,
  removeExperience,
  updateExpTxt,
  addEducation,
  removeEducation,
  updateEduTxt,
  autoFillCV,
  resetCV,
  saveCV,
}) => {
  return (
    <div className="inputs">
      <InputPersonal
        updateTxt={updateTxt}
        updatePic={updatePic}
        info={cv.info}
      />
      <SkillsInput
        skills={cv.skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
        updateSkillTxt={updateSkillTxt}
      />
      <ExperienceInput
        experience={cv.experience}
        addExperience={addExperience}
        removeExperience={removeExperience}
        updateExpTxt={updateExpTxt}
      />
      <EducationInput
        education={cv.education}
        addEducation={addEducation}
        removeEducation={removeEducation}
        updateEduTxt={updateEduTxt}
      />
      <UtilButtons
        fill={autoFillCV}
        reset={resetCV}
        save={saveCV}
      />
    </div>
  );
};

export default CVInputs;

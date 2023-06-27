import React from "react";
import trashCan from "../../assets/trashCan.svg";
import "../../styles/inputStyles/inputSkills.css";

const SkillsInput = ({ skills, updateSkillTxt, removeSkill, addSkill }) => {
  return (
    <div className="SkillsWrap">
      <div className="skillsTitle">Skills</div>
      <div className="skillWrap">
        {skills.map((skill, i) => (
          <div className="singleSkillWrap" key={i}>
            <input
              type="text"
              name="skill"
              className="inputSkill"
              placeholder="Skill"
              value={skill.skill}
              id={i}
              onChange={updateSkillTxt}
            />
            {skills.length > 1 && (
              <button
                className="removeSkillBtn"
                type="button"
                name="removeSkill"
                onClick={() => removeSkill(i)}
              >
                <img src={trashCan} alt="remove" className="removeSkillImg" />
              </button>
            )}
          </div>
        ))}
        {skills.length < 9 && (
          <button className="addSkillBtn" onClick={addSkill}>
            Add Skill
          </button>
        )}
      </div>
    </div>
  );
};

export default SkillsInput;

import React from "react";
import "../../styles/inputStyles/inputEducation.css";

const EducationInput = ({
  education,
  updateEduTxt,
  addEducation,
  removeEducation,
}) => {
  return (
    <div className="eduWrap">
      <div className="eduTitle">Education</div>
      <div className="eduInnerWrap">
        {education.map((edu, i) => (
          <div className="eduItemWrap" key={i}>
            <input
              type="text"
              className="eduInput"
              name="from"
              placeholder="Start Year"
              value={edu.from}
              onChange={updateEduTxt}
              id={i}
            />
            <input
              type="text"
              className="eduInput"
              name="to"
              placeholder="End Year"
              value={edu.to}
              onChange={updateEduTxt}
              id={i}
            />
            <input
              type="text"
              className="eduInput"
              name="university"
              placeholder="Univeristy"
              value={edu.university}
              onChange={updateEduTxt}
              id={i}
            />
            <input
              type="text"
              className="eduInput"
              name="degreeLvl"
              placeholder="Degree Level"
              value={edu.degreeLvl}
              onChange={updateEduTxt}
              id={i}
            />
            <input
              type="text"
              className="eduInput"
              name="degreeFld"
              placeholder="Degree Field"
              value={edu.degreeFld}
              onChange={updateEduTxt}
              id={i}
            />
            {education.length > 1 && (
              <button
                className="removeEduBtn"
                onClick={() => removeEducation(i)}
              >
                Delete Education
              </button>
            )}
          </div>
        ))}
        {education.length < 3 && (
          <button className="addEduBtn" onClick={addEducation}>
            Add Education
          </button>
        )}
      </div>
    </div>
  );
};

export default EducationInput;

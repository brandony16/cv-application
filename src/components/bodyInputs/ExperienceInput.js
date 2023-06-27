import React from "react";
import "../../styles/inputStyles/inputExperience.css";

const ExperienceInput = ({experience, updateExpTxt, removeExperience, addExperience}) => {
  return (
    <div className="expWrap">
      <div className="expTitle">Experience</div>
      <div className="expInnerWrap">
        {experience.map((exp, i) => (
          <div className="expItemWrap" key={i}>
            <input
              type="text"
              className="expInput"
              name="from"
              placeholder="Start Year"
              value={exp.from}
              onChange={updateExpTxt}
              id={i}
            />
            <input
              type="text"
              className="expInput"
              name="to"
              placeholder="End Year"
              value={exp.to}
              onChange={updateExpTxt}
              id={i}
            />
            <input
              type="text"
              className="expInput"
              name="position"
              placeholder="Position"
              value={exp.position}
              onChange={updateExpTxt}
              id={i}
            />
            <input
              type="text"
              className="expInput"
              name="company"
              placeholder="Company"
              value={exp.company}
              onChange={updateExpTxt}
              id={i}
            />
            <input
              type="text"
              className="expInput"
              name="city"
              placeholder="City"
              value={exp.city}
              onChange={updateExpTxt}
              id={i}
            />
            {experience.length > 1 && (
              <button
                className="removeExpBtn"
                onClick={() => removeExperience(i)}
              >
                Delete Work Experience
              </button>
            )}
          </div>
        ))}
        {experience.length < 3 && (
          <button className="addExpBtn" onClick={addExperience}>
            Add Work Experience
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceInput;

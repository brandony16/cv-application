import React from "react";
import trashCan from "../../assets/trashCan.svg"
import "../../styles/inputStyles/inputSkills.css";

class SkillsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SkillsWrap">
        <div className="skillsTitle">Skills</div>
        <div className="skillWrap">
          {this.props.skills.map((skill, i) => (
            <div className="singleSkillWrap" key={i}>
              <input
                type="text"
                name="skill"
                className="inputSkill"
                placeholder="Skill"
                value={skill.skill}
                id={i}
                onChange={this.props.updateSkillTxt}
              />
              {this.props.skills.length > 1 && (
                <button
                  className="removeSkillBtn"
                  type="button"
                  name="removeSkill"
                  onClick={() => this.props.removeSkill(i)}
                >
                  <img src={trashCan} alt="remove" className="removeSkillImg"/>
                </button>
              )}
            </div>
          ))}
          {this.props.skills.length < 10 && (
            <button className="addSkillBtn" onClick={this.props.addSkill}>
              Add Skill
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default SkillsInput;

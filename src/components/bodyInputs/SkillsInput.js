import React from "react";

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
            <div className="skillWrap" key={i}>
                <input
                type="text"
                name="skill"
                className="inputPers"
                placeholder="Skill"
                value={skill.skill}
                onChange={console.log()}
                />
                {this.props.skills.length > 1 &&
                    <button className="removeSkillBtn" type="button" name="removeSkill">remove</button>
                }
            </div>
          ))}
          {this.props.skills.length < 10 &&
            <button className="addSkillBtn" onClick={this.props.addSkill}>Add Skill</button>
          }
        </div>
      </div>
    );
  }
}

export default SkillsInput;

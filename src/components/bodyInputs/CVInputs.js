import React from "react";
import InputPersonal from "./personalInput";
import SkillsInput from "./SkillsInput";
import "../../styles/inputStyles/CVInputs.css"

class CVInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="inputs">
        <InputPersonal
          updateTxt={this.props.updateTxt}
          updatePic={this.props.updatePic}
          info={this.props.info}
        />
        <SkillsInput
          skills={this.props.skills}
          addSkill={this.props.addSkill}
          removeSkill={this.props.removeSkill}
          updateSkillTxt={this.props.updateSkillTxt}
        />
      </div>
    );
  }
}

export default CVInputs;

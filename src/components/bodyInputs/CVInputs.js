import React from "react";
import InputPersonal from "./PersonalInput";
import SkillsInput from "./SkillsInput";
import ExperienceInput from "./ExperienceInput";
import EducationInput from "./EducationInput";
import UtilButtons from "./utilButtons";
import "../../styles/inputStyles/CVInputs.css";

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
        <ExperienceInput
          experience={this.props.experience}
          addExperience={this.props.addExperience}
          removeExperience={this.props.removeExperience}
          updateExpTxt={this.props.updateExpTxt}
        />
        <EducationInput
          education={this.props.education}
          addEducation={this.props.addEducation}
          removeEducation={this.props.removeEducation}
          updateEduTxt={this.props.updateEduTxt}
        />
        <UtilButtons
          autoFillCV={this.props.autoFillCV}
          resetCV={this.props.resetCV}
          saveCV={this.props.saveCV}
        />
      </div>
    );
  }
}

export default CVInputs;

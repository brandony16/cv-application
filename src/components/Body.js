import React from "react";
import PreviewCV from "./bodyPreview/PreviewCV";
import CVInputs from "./bodyInputs/CVInputs";
import "../styles/Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: [
        {
          name: "firstName",
          value: "",
        },
        {
          name: "lastName",
          value: "",
        },
        {
          name: "address",
          value: "",
        },
        {
          name: "email",
          value: "",
        },
        {
          name: "phone",
          value: "",
        },
        {
          name: "about",
          value: "",
        },
        {
          name: "title",
          value: "",
        },
        {
          name: "pic",
          selected: null,
        },
      ],

      skills: [
        {
          skill: "",
        },
      ],

      newSkill: {
        skill: "",
      },
    };

    this.updateTxt = this.updateTxt.bind(this);
    this.updatePic = this.updatePic.bind(this);
    this.updateSkillTxt = this.updateSkillTxt.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  updateTxt(e) {
    const newInfo = this.state.info.map((inform) => {
      if (inform.name === e.target.name) {
        inform.value = e.target.value;
        return inform;
      } else {
        return inform;
      }
    });

    this.setState({
      ...this.state,
      info: newInfo,
    });
  }

  updatePic(file) {
    const newInfo = this.state.info.map((inform) => {
      if (inform.name === "pic") {
        inform.selected = file.target.files[0];
        return inform;
      }
      return inform;
    });
    this.setState({
      ...this.state,
      info: newInfo,
    });
  }

  updateSkillTxt(e) {
    const index = parseInt(e.target.id);
    const newSkills = this.state.skills.map((skill, i) => {
      if (i === index) {
        return {
          ...skill,
          [e.target.name]: e.target.value,
        };
      }
      return skill;
    });
  
    this.setState({
      skills: newSkills,
    });
  }
  

  addSkill(e) {
    e.preventDefault();

    this.setState({
      skills: [...this.state.skills, this.state.newSkill],
    });
  }

  removeSkill(i) {
    const skillList = [...this.state.skills];
    skillList.splice(i, 1);

    this.setState({
      ...this.state,
      skills: skillList,
    });
  }

  render() {
    return (
      <div className="body">
        <CVInputs
          updateTxt={this.updateTxt}
          updatePic={this.updatePic}
          updateSkillTxt={this.updateSkillTxt}
          addSkill={this.addSkill}
          removeSkill={this.removeSkill}
          info={this.state.info}
          skills={this.state.skills}
          state={this.state}
        />
        <PreviewCV
          info={this.state.info}
          skills={this.state.skills}
          selected={
            this.state.info.find((item) => item.name === "pic").selected
          }
        />
      </div>
    );
  }
}

export default Body;

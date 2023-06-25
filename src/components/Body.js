import React from "react";
import PreviewCV from "./bodyPreview/PreviewCV";
import CVInputs from "./bodyInputs/CVInputs";
import filledState from "./utils/autoFill";
import resetCV from "./utils/resetCV";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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

      experience: [
        {
          from: "",
          to: "",
          position: "",
          company: "",
          city: "",
        },
      ],

      education: [
        {
          from: "",
          to: "",
          university: "",
          degreeLvl: "",
          degreeFld: "",
        },
      ],

      newSkill: {
        skill: "",
      },

      newExperience: {
        from: "",
        to: "",
        position: "",
        company: "",
        city: "",
      },

      newEducation: {
        from: "",
        to: "",
        university: "",
        degreeLvl: "",
        degreeFld: "",
      },
    };

    this.updateTxt = this.updateTxt.bind(this);
    this.updatePic = this.updatePic.bind(this);
    this.updateSkillTxt = this.updateSkillTxt.bind(this);
    this.updateExpTxt = this.updateExpTxt.bind(this);
    this.updateEduTxt = this.updateEduTxt.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.autoFillCV = this.autoFillCV.bind(this);
    this.resetCV = this.resetCV.bind(this);
    this.saveCV = this.saveCV.bind(this);
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

  updateExpTxt(e) {
    const index = parseInt(e.target.id);
    const newExp = this.state.experience.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    this.setState({
      experience: newExp,
    });
  }

  updateEduTxt(e) {
    const index = parseInt(e.target.id);
    const newEdu = this.state.education.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    this.setState({
      education: newEdu,
    });
  }

  addSkill(e) {
    e.preventDefault();

    this.setState({
      skills: [...this.state.skills, this.state.newSkill],
    });
  }

  addExperience(e) {
    e.preventDefault();

    this.setState({
      experience: [...this.state.experience, this.state.newExperience],
    });
  }

  addEducation(e) {
    e.preventDefault();

    this.setState({
      education: [...this.state.education, this.state.newEducation],
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

  removeExperience(i) {
    const expList = [...this.state.experience];
    expList.splice(i, 1);

    this.setState({
      ...this.state,
      experience: expList,
    });
  }

  removeEducation(i) {
    const eduList = [...this.state.education];
    eduList.splice(i, 1);

    this.setState({
      ...this.state,
      education: eduList,
    });
  }

  autoFillCV() {
    this.setState({
      ...this.state,
      info: filledState.info,
      skills: filledState.skills,
      experience: filledState.experience,
      education: filledState.education,
    })
  }

  resetCV() {
    this.setState({
      ...this.state,
      info: resetCV.info,
      skills: resetCV.skills,
      experience: resetCV.experience,
      education: resetCV.education,
    })
  }
  
  saveCV() {
    const input = document.getElementById('previewCV');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();

        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        pdf.save("resume.pdf");
      })
    ;
  }


  render() {
    return (
      <div className="body">
        <CVInputs
          updateTxt={this.updateTxt}
          updatePic={this.updatePic}
          updateSkillTxt={this.updateSkillTxt}
          updateExpTxt={this.updateExpTxt}
          updateEduTxt={this.updateEduTxt}
          addSkill={this.addSkill}
          addExperience={this.addExperience}
          addEducation={this.addEducation}
          removeSkill={this.removeSkill}
          removeExperience={this.removeExperience}
          removeEducation={this.removeEducation}
          info={this.state.info}
          skills={this.state.skills}
          experience={this.state.experience}
          education={this.state.education}
          state={this.state}
          autoFillCV={this.autoFillCV}
          resetCV={this.resetCV}
          saveCV={this.saveCV}
        />
        <PreviewCV
          info={this.state.info}
          skills={this.state.skills}
          experience={this.state.experience}
          education={this.state.education}
          selected={
            this.state.info.find((item) => item.name === "pic").selected
          }
        />
      </div>
    );
  }
}

export default Body;

import React, { useState } from "react";
import PreviewCV from "./bodyPreview/PreviewCV";
import CVInputs from "./bodyInputs/CVInputs";
import filledState from "./utils/autoFill";
import emptyCV from "./utils/resetCV";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../styles/Body.css";

const Body = () => {
  const [cv, setCV] = useState(emptyCV);

  const updateTxt = (e) => {
    const newInfo = cv.info.map((inform) => {
      if (inform.name === e.target.name) {
        inform.value = e.target.value;
        return inform;
      } else {
        return inform;
      }
    });

    setCV((prevState) => ({
      ...prevState,
      info: newInfo,
    }));
  };

  const updatePic = (file) => {
    const newInfo = cv.info.map((inform) => {
      if (inform.name === "pic") {
        inform.selected = file.target.files[0];
        return inform;
      }
      return inform;
    });
    setCV((prevState) => ({
      ...prevState,
      info: newInfo,
    }));
  };

  const updateSkillTxt = (e) => {
    const index = parseInt(e.target.id);
    const newSkills = cv.skills.map((skill, i) => {
      if (i === index) {
        return {
          ...skill,
          [e.target.name]: e.target.value,
        };
      }
      return skill;
    });

    setCV((prevState) => ({
      ...prevState,
      skills: newSkills,
    }));
  };

  const updateExpTxt = (e) => {
    const index = parseInt(e.target.id);
    const newExp = cv.experience.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    setCV((prevState) => ({
      ...prevState,
      experience: newExp,
    }));
  };

  const updateEduTxt = (e) => {
    const index = parseInt(e.target.id);
    const newEdu = cv.education.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    setCV((prevState) => ({
      ...prevState,
      education: newEdu,
    }));
  };

  const addSkill = (e) => {
    e.preventDefault();

    setCV((prevState) => ({
      ...prevState,
      skills: [
        ...prevState.skills,
        {
          skill: "",
        },
      ],
    }));
  };

  const addExperience = (e) => {
    e.preventDefault();

    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          from: "",
          to: "",
          position: "",
          company: "",
          city: "",
        },
      ],
    }));
  };

  const addEducation = (e) => {
    e.preventDefault();

    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          from: "",
          to: "",
          university: "",
          degreeLvl: "",
          degreeFld: "",
        },
      ],
    }));
  };

  const removeSkill = (i) => {
    const skillList = [...cv.skills];
    skillList.splice(i, 1);

    setCV((prevState) => ({
      ...prevState,
      skills: skillList,
    }));
  };

  const removeExperience = (i) => {
    const expList = [...cv.experience];
    expList.splice(i, 1);

    setCV((prevState) => ({
      ...prevState,
      experience: expList,
    }));
  };

  const removeEducation = (i) => {
    const eduList = [...cv.education];
    eduList.splice(i, 1);

    setCV((prevState) => ({
      ...prevState,
      education: eduList,
    }));
  };

  const autoFillCV = () => {
    setCV(filledState);
  };

  const resetCV = () => {
    setCV(emptyCV);
  };

  const saveCV = () => {
    const input = document.getElementById("previewCV");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="body">
      <CVInputs
        updateTxt={updateTxt}
        updatePic={updatePic}
        updateSkillTxt={updateSkillTxt}
        updateExpTxt={updateExpTxt}
        updateEduTxt={updateEduTxt}
        addSkill={addSkill}
        addExperience={addExperience}
        addEducation={addEducation}
        removeSkill={removeSkill}
        removeExperience={removeExperience}
        removeEducation={removeEducation}
        cv={cv}
        autoFillCV={autoFillCV}
        resetCV={resetCV}
        saveCV={saveCV}
      />
      <PreviewCV cv={cv} />
    </div>
  );
};

export default Body;

import React from "react";

const EducationComponent = ({ education, index }) => {
  return (
    <div className="mainSubComponent">
      <div className="yearWrap">
        <div className="previewYear start">{education[index].from}</div>
        <div className="previewYear end">{education[index].to}</div>
      </div>
      <div className="previewMainSubWrap">
        <div className="previewMainHeader">{education[index].university}</div>
        <div className="previewMainText">{education[index].degreeLvl}</div>
        <div className="previewMainText">{education[index].degreeFld}</div>
      </div>
    </div>
  );
};

export default EducationComponent;

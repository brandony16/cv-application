import React from "react";
import "../../styles/inputStyles/utilButtons.css";

const UtilButtons = ({ reset, fill, save }) => {
  return (
    <div className="utilBtnWrap">
      <button className="resetCV utilBtn" onClick={reset}>
        Reset
      </button>
      <button className="autoFillCV utilBtn" onClick={fill}>
        Autofill
      </button>
      <button className="saveCV utilBtn" onClick={save}>
        Download as PDF
      </button>
    </div>
  );
};

export default UtilButtons;

import React from "react";
import "../../styles/previewStyles/previewHeader.css";

const PreviewHeader = ({ info }) => {
  return (
    <div className="previewHeader">
      <div className="prevHeaderWrap">
        <div className="previewName">
          <div className="previewFirstName">{info[0].value}</div>
          <div className="previewLastName">{info[1].value}</div>
        </div>
        <div className="previewTitle">{info[6].value}</div>
      </div>
    </div>
  );
};

export default PreviewHeader;

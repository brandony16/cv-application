import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewSidebar from "./PreviewSidebar";
import PreviewExperience from "./mainComponents/previewExperience";
import PreviewEducation from "./mainComponents/previewEducation";
import "../../styles/previewStyles/Preview.css";

const PreviewCV = ({ cv }) => {
  const selectedImage =
    cv.info.find((inform) => inform.name === "pic")?.selected || null;

  return (
    <div className="previewCV" id="previewCV">
      <div className="sidebarWrap">
        <PreviewSidebar
          info={cv.info}
          selected={selectedImage}
          skills={cv.skills}
        />
      </div>
      <div className="mainWrap">
        <PreviewHeader info={cv.info} />
        <div className="mainSubWrap">
          <PreviewExperience experience={cv.experience} />
          <PreviewEducation education={cv.education} />
        </div>
      </div>
    </div>
  );
};

export default PreviewCV;

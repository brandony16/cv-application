import React from "react";

const FileUploader = ({updatePic}) => {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={updatePic}
      className="inputPers fileInput"
    />
  );
};

export default FileUploader;

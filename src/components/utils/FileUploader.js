import React from "react";

class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};  
  }

  render() {
    return (
      <input
        type="file"
        accept="image/*"
        onChange={this.props.updatePic}
        className="inputPers fileInput"
      />
    );
  }
}

export default FileUploader;

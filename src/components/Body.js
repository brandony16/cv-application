import React from "react";
import PreviewCV from "./bodyPreview/MainPreview";
import CVInputs from "./bodyInputs/CVInputs";
import FileUploader from "./utils/FileUploader";
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
    };

    this.updateTxt = this.updateTxt.bind(this);
    this.updatePic = this.updatePic.bind(this);
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
      } else {
        return inform;
      }
    });
    this.setState({
      ...this.state,
      info: newInfo,
    });
  }

  render() {
    return (
      <div className="body">
        <CVInputs
          updateTxt={this.updateTxt}
          updatePic={this.updatePic}
          info={this.state.info}
          state={this.state}
        />
        <PreviewCV
          info={this.state.info}
          selected={
            this.state.info.find((item) => item.name === "pic").selected
          }
        />
      </div>
    );
  }
}

export default Body;

import React from "react";
import PreviewCV from "./bodyPreview/MainPreview";
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
      ],
    };

    this.updateTxt = this.updateTxt.bind(this);
  }

  updateTxt(e) {
    const newInfo = this.state.info.map((inform, i) => {
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

  render() {
    return (
      <div className="body">
        <CVInputs updateTxt={this.updateTxt} info={this.state.info} state={this.state} />
        <PreviewCV info={this.state.info} />
      </div>
    );
  }
}

export default Body;

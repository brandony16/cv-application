import React from "react";
import FileUploader from "../utils/FileUploader";
import "../../styles/inputStyles/inputPersonal.css";

class InputPersonal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="personalWrap">
        <div className="persTitle">Personal Information</div>
        <div className="inputsPersonal">
          <input
            type="text"
            className="inputPers"
            placeholder="First Name"
            name="firstName"
            value={this.props.info[0].value}
            onChange={this.props.updateTxt}
          ></input>
          <input
            type="text"
            className="inputPers"
            placeholder="Last Name"
            name="lastName"
            value={this.props.info[1].value}
            onChange={this.props.updateTxt}
          />
          <input
            type="text"
            className="inputPers"
            placeholder="Title"
            name="title"
            value={this.props.info[6].value}
            onChange={this.props.updateTxt}
          />
          <FileUploader updatePic={this.props.updatePic} />
          <input
            type="text"
            className="inputPers"
            placeholder="Phone Number"
            name="phone"
            value={this.props.info[4].value}
            onChange={this.props.updateTxt}
          />
          <input
            type="text"
            className="inputPers"
            placeholder="Email Address"
            name="email"
            value={this.props.info[3].value}
            onChange={this.props.updateTxt}
          />
          <input
            type="text"
            className="inputPers"
            placeholder="Address"
            name="address"
            value={this.props.info[2].value}
            onChange={this.props.updateTxt}
          />
          <input
            type="text"
            className="inputPers"
            placeholder="Skills"
            onChange={this.props.updateTxt}
          />
          <textarea
            className="inputPers about"
            rows="3"
            placeholder="About"
            name="about"
            value={this.props.info[5].value}
            onChange={this.props.updateTxt}
            wrap="hard"
          />
        </div>
      </div>
    );
  }
}

export default InputPersonal;

import React from "react";
import Input from "../utils/Input";
import TextArea from "../utils/textArea";
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
            required
          ></input>
          <Input
            type="text"
            className="inputPers"
            placeholder="Last Name"
            onChange={this.props.updateTxt}
          />
          <Input
            type="text"
            className="inputPers"
            placeholder="Title"
            onChange={this.props.updateTxt}
          />
          <Input
            type="file"
            className="inputPers fileInput"
            accept="img/*"
            onChange={this.props.updateTxt}
          />
          <Input
            type="text"
            className="inputPers"
            placeholder="Phone Number"
            onChange={this.props.updateTxt}
          />
          <Input
            type="text"
            className="inputPers"
            placeholder="Email Address"
            onChange={this.props.updateTxt}
          />
          <Input
            type="text"
            className="inputPers"
            placeholder="Address"
            onChange={this.props.updateTxt}
          />
          <Input
            type="text"
            className="inputPers"
            placeholder="Skills"
            onChange={this.props.updateTxt}
          />
          <TextArea
            className="inputPers about"
            rows="3"
            placeholder="About"
            onChange={this.props.updateTxt}
          />
        </div>
      </div>
    );
  }
}

export default InputPersonal;

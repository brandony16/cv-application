import React from "react";
import FileUploader from "../utils/FileUploader";
import "../../styles/inputStyles/inputPersonal.css";

const InputPersonal = ({info, updateTxt, updatePic}) => {
  return (
    <div className="personalWrap">
      <div className="persTitle">Personal Information</div>
      <div className="inputsPersonal">
        <input
          type="text"
          className="inputPers"
          placeholder="First Name"
          name="firstName"
          value={info[0].value}
          onChange={updateTxt}
        ></input>
        <input
          type="text"
          className="inputPers"
          placeholder="Last Name"
          name="lastName"
          value={info[1].value}
          onChange={updateTxt}
        />
        <input
          type="text"
          className="inputPers"
          placeholder="Title"
          name="title"
          value={info[6].value}
          onChange={updateTxt}
        />
        <FileUploader updatePic={updatePic} />
        <input
          type="text"
          className="inputPers"
          placeholder="Phone Number"
          name="phone"
          value={info[4].value}
          onChange={updateTxt}
        />
        <input
          type="text"
          className="inputPers"
          placeholder="Email Address"
          name="email"
          value={info[3].value}
          onChange={updateTxt}
        />
        <input
          type="text"
          className="inputPers"
          placeholder="Address"
          name="address"
          value={info[2].value}
          onChange={updateTxt}
        />
        <textarea
          className="inputPers about"
          rows="3"
          placeholder="About"
          name="about"
          value={info[5].value}
          onChange={updateTxt}
          wrap="hard"
        />
      </div>
    </div>
  );
};

export default InputPersonal;

import React from "react";
import Input from "../utils/Input";
import TextArea from "../utils/textArea";
import "../../styles/inputStyles/inputPersonal.css";

class InputPersonal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { updateTxt, updateImg } = this.props;

        return (
            <div className="personalWrap">
                <div className="persTitle" >Personal Information</div>
                <div className="inputsPersonal">
                    <Input type="text" className="inputPers" placeholder="First Name" onChange={updateTxt} />
                    <Input type="text" className="inputPers" placeholder="Last Name" onChange={updateTxt} />
                    <Input type="text" className="inputPers" placeholder="Title" onChange={updateTxt} />
                    <Input type="file" className="inputPers fileInput" accept="img/*" onChange={updateImg} />
                    <Input type="text" className="inputPers" placeholder="Phone Number" onChange={updateTxt} />
                    <Input type="text" className="inputPers" placeholder="Email Address" onChange={updateTxt} />
                    <Input type="text" className="inputPers" placeholder="Address" onChange={updateTxt} />
                    <Input type="text" className="inputPers" placeholder="Skills" onChange={updateTxt} />
                    <TextArea className="inputPers about" rows="3" placeholder="About" onChange={updateTxt} />
                </div>
            </div>
        )
    }
}

export default InputPersonal;
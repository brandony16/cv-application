import React from "react";
import "../../styles/inputStyles/inputPersonal.css";

class InputPersonal extends React.Component {
    render() {
        return (
            <div className="personalWrap">
                <div className="persTitle">Personal Information</div>
                <div className="inputsPersonal">
                    <input type="text" className="inputPers" placeholder="First Name"/>
                    <input type="text" className="inputPers" placeholder="Last Name"/>
                    <input type="text" className="inputPers" placeholder="Title"/>
                    <input type="file" className="inputPers fileInput" accept="img/*" title=" "/>
                    <input type="text" className="inputPers" placeholder="Phone Number"/>
                    <input type="text" className="inputPers" placeholder="Email Adress"/>
                    <input type="text" className="inputPers" placeholder="Address"/>
                    <input type="text" className="inputPers" placeholder="Skills"/>
                    <textarea  rows="3" className="inputPers about" placeholder="About" />
                </div>
            </div>
        )
    }
}

export default InputPersonal;
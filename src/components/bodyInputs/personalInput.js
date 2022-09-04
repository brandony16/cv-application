import React from "react";
import "../../styles/inputStyles/inputPersonal.css";

class InputPersonal extends React.Component {
    render() {
        return (
            <div className="inputs">
                <input type="text" className="input" placeholder="First Name"/>
                <input type="text" className="input" placeholder="Last Name"/>
                <input type="text" className="input" placeholder="Title"/>
                <input type="file" className="input fileInput" accept="img/*" title=" "/>
                <input type="text" className="input" placeholder="Phone Number"/>
                <input type="text" className="input" placeholder="Email Adress"/>
                <input type="text" className="input" placeholder="Adress"/>
                <input type="text" className="input" placeholder="About"/>
            </div>
        )
    }
}

export default InputPersonal;
import React from "react";
import InputPersonal from "./personalInput";

class CVInputs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="inputs">
                <InputPersonal updateTxt={this.props.updateTxt} info={this.props.info}/>
            </div>
        )
    }
}

export default CVInputs;
import React from "react";
import "../../styles/inputStyles/utilButtons.css";

class UtilButtons extends React.Component {
    render() {
        return (
            <div className="utilBtnWrap">
                <button className="resetCV utilBtn" onClick={this.props.resetCV}>Reset</button>
                <button className="autoFillCV utilBtn" onClick={this.props.autoFillCV}>Autofill</button>
                <button className="saveCV utilBtn" onClick={this.props.saveCV}>Download as PDF</button>
            </div>
        )
    }
}

export default UtilButtons;
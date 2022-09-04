import React from "react";
import PreviewCV from "./bodyPreview/MainPreview";
import CVInputs from "./bodyInputs/CVInputs";
import "../styles/Body.css";

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <CVInputs />
                <PreviewCV />
            </div>
        )
    }
}

export default Body;

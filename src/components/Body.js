import React from "react";
import "../styles/Body.css";
import PreviewCV from "./bodyPreview/MainPreview";

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <PreviewCV />
            </div>
        )
    }
}

export default Body;

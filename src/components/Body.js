import React from "react";
import PreviewCV from "./bodyPreview/MainPreview";
import "../styles/Body.css";

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

import React from "react";
import "../../styles/previewHeader.css";

class PreviewHeader extends React.Component {
    render() {
        return (
            <div className="previewHeader">
                <div className="prevHeaderWrap">
                <div className="previewName">
                    <div className="previewFirstName">John</div>
                    <div className="previewLastName">Doe</div>
                </div>              
                    <div className="previewTitle">Software Engineer</div>
                </div>
            </div>
        )
    }
}

export default PreviewHeader;
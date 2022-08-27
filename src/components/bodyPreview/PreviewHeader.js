import React from "react";
import baseImg from "../../assets/previewBaseImg.jpg";
import "../../styles/previewHeader.css";

class PreviewHeader extends React.Component {
    render() {
        return (
            <div className="previewHeader">
                <div className="prevHeaderWrap">
                    <div className="previewName">John Doe</div>
                    <div className="previewTitle">Software Engineer</div>
                </div>
                <img src={baseImg} alt="you" className="previewPicture"/>
            </div>
        )
    }
}

export default PreviewHeader;
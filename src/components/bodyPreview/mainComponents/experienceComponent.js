import React from "react";

class ExperienceComponent extends React.Component {
    render() {
        return (
            <div className="mainSubComponent">
                <div className="yearWrap">
                    <div className="previewYear start">2018</div>
                    <div className="previewYear start">Present</div>
                </div>
                <div className="previewMainSubWrap">
                    <div className="previewMainHeader">Junior Web Developer</div>
                    <div className="previewMainText">Tech Corporation</div>
                    <div className="previewMainText">Austin, TX</div>
                </div>
            </div>
        )
    }
}

export default ExperienceComponent;
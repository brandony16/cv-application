import React from "react";

class EducationComponent extends React.Component {
    render() {
        return (
            <div className="mainSubComponent">
                <div className="yearWrap">
                    <div className="previewYear start">2014</div>
                    <div className="previewYear end">2018</div>
                </div>
                <div className="previewMainSubWrap">
                    <div className="previewMainHeader">Stanford University</div>
                    <div className="previewMainText">Masters</div>
                    <div className="previewMainText">Computer Science</div>
                </div>
            </div>
        )
    }
}

export default EducationComponent;
import React from "react";

class EducationComponent extends React.Component {
    render() {

        const edu = this.props.education;
        const index = this.props.index

        return (
            <div className="mainSubComponent">
                <div className="yearWrap">
                    <div className="previewYear start">{edu[index].from}</div>
                    <div className="previewYear end">{edu[index].to}</div>
                </div>
                <div className="previewMainSubWrap">
                    <div className="previewMainHeader">{edu[index].university}</div>
                    <div className="previewMainText">{edu[index].degreeLvl}</div>
                    <div className="previewMainText">{edu[index].degreeFld}</div>
                </div>
            </div>
        )
    }
}

export default EducationComponent;
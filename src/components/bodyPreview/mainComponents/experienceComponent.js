import React from "react";

class ExperienceComponent extends React.Component {
    render() {

        const exp = this.props.experience;
        const index = this.props.index;
        return (
            <div className="mainSubComponent">
                <div className="yearWrap">
                    <div className="previewYear start">{exp[index].from}</div>
                    <div className="previewYear start">{exp[index].to}</div>
                </div>
                <div className="previewMainSubWrap">
                    <div className="previewMainHeader">{exp[index].position}</div>
                    <div className="previewMainText">{exp[index].company}</div>
                    <div className="previewMainText">{exp[index].city}</div>
                </div>
            </div>
        )
    }
}

export default ExperienceComponent;
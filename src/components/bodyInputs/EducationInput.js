import React from "react";
import "../../styles/inputStyles/inputEducation.css";

class EducationInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="eduWrap">
        <div className="eduTitle">Education</div>
        <div className="eduInnerWrap">
          {this.props.education.map((edu, i) => (
            <div className="eduItemWrap" key={i}>
              <input
                type="text"
                className="eduInput"
                name="from"
                placeholder="Start Year"
                value={edu.from}
                onChange={this.props.updateEduTxt}
                id={i}
              />
              <input
                type="text"
                className="eduInput"
                name="to"
                placeholder="End Year"
                value={edu.to}
                onChange={this.props.updateEduTxt}
                id={i}
              />
              <input
                type="text"
                className="eduInput"
                name="university"
                placeholder="Univeristy"
                value={edu.position}
                onChange={this.props.updateEduTxt}
                id={i}
              />
              <input
                type="text"
                className="eduInput"
                name="degreeLvl"
                placeholder="Degree Level"
                value={edu.company}
                onChange={this.props.updateEduTxt}
                id={i}
              />
              <input
                type="text"
                className="eduInput"
                name="degreeFld"
                placeholder="Degree Field"
                value={edu.city}
                onChange={this.props.updateEduTxt}
                id={i}
              />
              {this.props.education.length > 1 && (
                <button
                  className="removeEduBtn"
                  onClick={() => this.props.removeEducation(i)}
                >
                  Delete Education
                </button>
              )}
            </div>
          ))}
          {this.props.education.length < 3 && (
            <button className="addEduBtn" onClick={this.props.addEducation}>
              Add Education
            </button>
          )}
        </div>
      </div>
        )
    }
}

export default EducationInput;
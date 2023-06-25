import React from "react";

class ExperienceInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="expWrap">
        <div className="expTitle">Experience</div>
        <div className="expInnerWrap">
          {this.props.experience.map((exp, i) => (
            <div className="expItemWrap" key={i}>
              <input
                type="text"
                className="expInput"
                name="from"
                placeholder="Start Year"
                value={exp.from}
                onChange={this.props.updateExpTxt}
                id={i}
              />
              <input
                type="text"
                className="expInput"
                name="to"
                placeholder="End Year"
                value={exp.to}
                onChange={this.props.updateExpTxt}
                id={i}
              />
              <input
                type="text"
                className="expInput"
                name="position"
                placeholder="Position"
                value={exp.position}
                onChange={this.props.updateExpTxt}
                id={i}
              />
              <input
                type="text"
                className="expInput"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={this.props.updateExpTxt}
                id={i}
              />
              <input
                type="text"
                className="expInput"
                name="city"
                placeholder="City"
                value={exp.city}
                onChange={this.props.updateExpTxt}
                id={i}
              />
              {this.props.experience.length > 1 && (
                <button className="removeExp" onClick={() => this.props.removeExperience(i)}>Delete Work Experience</button>
              )}
            </div>
          ))}
          {this.props.experience.length < 3 && (
            <button className="addExpBtn" onClick={this.props.addExperience}>Add Work Experience</button>
          )}
        </div>
      </div>
    );
  }
}

export default ExperienceInput;

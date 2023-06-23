import React from "react";
import PreviewCV from "./bodyPreview/MainPreview";
import CVInputs from "./bodyInputs/CVInputs";
import "../styles/Body.css";

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            info: [
                {
                  name: "firstName",
                  value: "",
                },
                {
                  name: "lastName",
                  value: "",
                },
                {
                  name: "address",
                  value: "",
                },
                {
                  name: "email",
                  value: "",
                },
                {
                  name: "phone",
                  value: "",
                },
                {
                  name: "about",
                  value: "",
                }
            ]

            

        }
    }

    render() {
        return (
            <div className="body">
                <CVInputs />
                <PreviewCV info={this.state.info} />
            </div>
        )
    }
}

export default Body;

import React from "react";
import "../../styles/previewStyles/previewHeader.css";

class PreviewHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="previewHeader">
                <div className="prevHeaderWrap">
                    <div className="previewName">
                        <div className="previewFirstName">{this.props.info[0].value}</div>
                        <div className="previewLastName">{this.props.info[1].value}</div>
                    </div>              
                    <div className="previewTitle">{this.props.info[6].value}</div>
                </div>
            </div>
        )
    }
}

export default PreviewHeader;
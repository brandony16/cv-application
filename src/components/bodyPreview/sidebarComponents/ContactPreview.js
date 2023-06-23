import React from "react";
import phoneImg from "../../../assets/phone.png";
import emailImg from "../../../assets/email-open.png";
import addressImg from "../../../assets/map-marker.png";

class ContactPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="sidebarComp">
                <div className="previewSideHeader">Contacts</div>
                <div className="previewInfo">
                    <div className="contactWrap">
                        <img src={phoneImg} alt="phone" className="previewSideIcon" />
                        <div className="previewSideText">{this.props.info[4].value}</div>
                    </div>
                    <div className="contactWrap">
                        <img src={emailImg} alt="email" className="previewSideIcon" />
                        <div className="previewSideText">{this.props.info[3].value}</div>
                    </div>
                    <div className="contactWrap">
                        <img src={addressImg} alt="adress" className="previewSideIcon" />
                        <div className="previewSideText">{this.props.info[2].value}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPreview;
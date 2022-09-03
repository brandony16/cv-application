import React from "react";
import phone from "../../../assets/phone.png";
import email from "../../../assets/email-open.png";
import adress from "../../../assets/map-marker.png";

class ContactPreview extends React.Component {
    render() {
        return (
            <div className="sidebarComp">
                <div className="previewSideHeader">Contacts</div>
                <div className="previewInfo">
                    <div className="contactWrap">
                        <img src={phone} alt="phone" className="previewSideIcon" />
                        <div className="previewSideText">+1 448-955-1225</div>
                    </div>
                    <div className="contactWrap">
                        <img src={email} alt="email" className="previewSideIcon" />
                        <div className="previewSideText">RealPerson@NotFake.com</div>
                    </div>
                    <div className="contactWrap">
                        <img src={adress} alt="adress" className="previewSideIcon" />
                        <div className="previewSideText">12345 Real Street, FL</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPreview;
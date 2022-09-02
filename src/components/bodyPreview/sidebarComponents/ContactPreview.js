import React from "react";

class ContactPreview extends React.Component {
    render() {
        return (
            <div className="sidebarComp">
                <div className="previewSideHeader">Contacts</div>
                <div className="previewInfo">
                    <div className="previewSideText">+1 448-955-1225</div>
                    <div className="previewSideText">RealPerson@notFake.com</div>
                    <div className="previewSideText">12345 Real Street, FL</div>
                </div>
            </div>
        )
    }
}

export default ContactPreview;
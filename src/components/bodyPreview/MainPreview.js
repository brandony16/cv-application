import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewSidebar from "./PreviewSidebar";
import PreviewExperience from "./mainComponents/previewExperience";
import PreviewEducation from "./mainComponents/previewEducation";
import "../../styles/previewStyles/Preview.css";

class PreviewCV extends React.Component {
    render() {
        return (
            <div className="previewCV">
                <div className="sidebarWrap">
                    <PreviewSidebar />
                </div>
                <div className="mainWrap">
                    <PreviewHeader />
                    <div className="mainSubWrap">
                        <PreviewExperience />
                        <PreviewEducation />
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewCV;
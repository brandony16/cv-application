import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewSidebar from "./PreviewSidebar";
import PreviewExperience from "./mainComponents/previewExperience";
import PreviewEducation from "./mainComponents/previewEducation";
import "../../styles/previewStyles/Preview.css";

class PreviewCV extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {

        return (
            <div className="previewCV">
                <div className="sidebarWrap">
                    <PreviewSidebar info={this.props.info}/>
                </div>  
                <div className="mainWrap">
                    <PreviewHeader info={this.props.info}/>
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
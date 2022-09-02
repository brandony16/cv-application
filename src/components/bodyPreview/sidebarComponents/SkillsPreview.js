import React from "react";

class SkillsPreview extends React.Component {
    render() {
        return (
            <div className="sidebarComp">
                <div className="previewSideHeader">Skills</div>
                <ul className="previewSideList">
                    <li className="previewSideText">JavaScript</li>
                    <li className="previewSideText">HTML</li>
                    <li className="previewSideText">CSS</li>
                    <li className="previewSideText">GitHub</li>
                    <li className="previewSideText">VSCode</li>
                    <li className="previewSideText">React</li>
                    <li className="previewSideText">Bash</li>
                    <li className="previewSideText">Webpack</li>
                    <li className="previewSideText">Jest</li>
                </ul>
            </div>
        )
    }
}

export default SkillsPreview;
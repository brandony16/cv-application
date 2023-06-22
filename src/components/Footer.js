import React from "react";
import ghLogo from "../assets/GitHubLogo.png";
import "../styles/Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footTxt">Made By: Brandon Young 2023</div>
                <a href="https://github.com/BabySparta/cv-application" className="ghLogo">
                    <img src={ghLogo} alt="git hub" className="ghImg" />
                </a>
            </div>
        )
    }
}

export default Footer;
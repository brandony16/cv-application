import React from "react";
import logo from "../assets/resumeLogo.png";
import "../styles/Header.css"

class Header extends React.Component {
    
    render() {
        return (
            <div className="header">
                <img src={logo} alt="suitcase logo" className="logo" />
                <div className="title">CV Maker</div>
            </div>
        )
    }
}

export default Header
import React from 'react';
// import '../../styles'; 
import '../../styles/mixinsVars.scss';
import "./header.scss"
import searchIcon from "../../assets/Icons/SVG/Icon-search.svg";
import logoFile from "../../assets/Logo/Logo-brainflix.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg"



  class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className = "header__logo-container">
                 <img src={logoFile} alt="brainflix logo"></img>
                </div>
                    <div className="header__search-all-container">
                        <div className = "header__search-container">
                            <img src={searchIcon} alt="Search Icon" className = "header__search-icon"></img>
                            <input type="text" className = "header__search-box" defaultValue="Search" ></input>
                        </div>
                    </div>
                <div className = "header__upload-profile-pic-container">
                    <button className = "header__upload-button">+ UPLOAD</button>
                    <div className="header__profile-pic-container">
                        <img src={profilePic} alt="Profile Picture" className="header__profile-pic"></img>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;

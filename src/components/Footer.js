import React from "react";
import facebookLogo from '../images/facebook-logo.png';
import twitterLogo from '../images/twitter-logo.png';
import githubLogo from '../images/github-logo.png';
import instagramLogo from '../images/instagram-logo.jpg';
import '../style.css';

function Footer() {
    return (
        <footer className="footer">
            <img src={facebookLogo} alt="facebook" className="social-icon" />
            <img src={twitterLogo} alt="twitter" className="social-icon" />
            <img src={githubLogo} alt="github" className="social-icon" />
            <img src={instagramLogo} alt="instagram" className="social-icon" />
        </footer>
    );
}

export default Footer;

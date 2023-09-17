import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to AbhayFix, your ultimate destination for all things cinema and entertainment! It's your personalized gateway to the captivating world of movies, TV shows, and celebrities. Whether you're a die-hard film enthusiast or just looking for some casual entertainment recommendations, AbhayFix has you covered. At AbhayFix, our mission is simple yet profound: to connect people with their favorite movies and TV shows while providing a platform for passionate discussions and discovery. We aim to be your trusted companion in the world of entertainment, helping you make informed decisions about what to watch next and keeping you up-to-date with the latest news and trends in the industry.
                </div>
                <div className="socialIcons">
                
                    <a href="https://www.instagram.com/abhxyrai/" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/abhxyrai" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/abhayrai1852/" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

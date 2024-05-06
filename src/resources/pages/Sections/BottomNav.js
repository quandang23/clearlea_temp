import { NavLink} from "react-router-dom";
import "../../css/bottomnav.css"; 
import React from 'react';
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/bird.png";
import Youtube from "../../images/youtube.png";
import Instagram from "../../images/instagram.png";
import LinkedIn from "../../images/linkedin.png";

const BottomNav = () => {
    return (
    <>
        <div className="bottomNav">
            <div className="block">
                <div className="container">
                    <nav className="bot-nav">
                        <div className="request"> 
                            <NavLink to="/request">
                                <p>Request</p>
                            </NavLink>
                        </div>
                        <div className="provider"> 
                            <NavLink to="/provider">
                                <p>Provider</p>
                            </NavLink>
                        </div>
                        <div className="about">
                            <NavLink to="/about">
                                <p>About us</p>
                            </NavLink>
                        </div>
                        <div className="careers">
                            <NavLink to="/careers">
                                <p>Careers</p>
                            </NavLink>
                        </div>
                        <div className="company">
                            <p>Company</p>
                        </div>
                        <div className="products">
                            <p>Products</p>
                        </div>
                        <div className="privacy">
                            <NavLink to="/privacy">
                                <p>Privacy</p>
                            </NavLink>
                        </div>
                        <div className="terms">
                            <NavLink to="/terms">
                                <p>Terms</p>
                            </NavLink>
                        </div>
                        <div className="companyName">
                            <p>CLEARLEA</p>
                        </div>
                        <div>
                            <NavLink to="https://www.facebook.com/" target="_blank">
                                <img className="facebook" alt="Facebook Icon" src={Facebook} />
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.twitter.com/" target="_blank">
                                <img className="twitter" alt="Twitter Icon" src={Twitter} /> 
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.youtube.com/" target="_blank">
                                <img className="youtube" alt="Youtube Icon" src={Youtube} /> 
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.instagram.com/" target="_blank">
                                <img className="instagram" alt="Instagram Icon" src={Instagram} /> 
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.linkedIn.com/" target="_blank">
                                <img className="linkedin" alt="Linkedin Icon" src={LinkedIn} />
                            </NavLink>
                        </div> 
                    </nav>
                </div>
            </div>
        </div>
    </>
    )
}; 

export default BottomNav; 
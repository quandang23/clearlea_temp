import { NavLink, Routes, Route } from "react-router-dom";
import "../../css/navbar.css"; 
import Home from "./Home";
import Request from "./Request.js";
import About from "./About";
import Provider from "./Provider";
import Help from "./Help";
import Signup from "./Signup.js";
import NoPage from "./404.js";
import Careers from "./Careers"
import Results from "./Results"
import { useAuth } from '../Api/AuthContext.js';
import { useState } from "react";

const Navbar = () => {
    const { isLoggedIn, name, set, end, setName} = useAuth();

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="home">
                        <NavLink to="/">
                            <p>CLEARLEA</p>
                        </NavLink>
                    </div>
                    <div className="nav-elements">
                        <ul>
                            <li>
                                <NavLink to="/request">Request</NavLink>
                            </li>
                            <li>
                                <NavLink to="/provider">Provider</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/help">Help</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {isLoggedIn ? (
                            <div className="dropdown">
                            {/* Render content when user is logged in */}
                                <button className="dropbtn">
                                    {localStorage.getItem('name')}
                                </button>
                                <div className="dropdown-content">
                                    <a href="/" onClick={() => {end()}}>Sign Out</a>
                                </div>
                            </div>
                        ) : (
                            <div className="signin-elements">
                            {/* Render content when user is not logged in */}
                            <ul>
                                <li className="login">
                                <NavLink to="/login">Log in</NavLink>
                                </li>
                                <li className="signin">
                                <NavLink to="/signup">Sign up</NavLink>
                                </li>
                            </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/request"
                    element={<Request />}
                />
                <Route
                    path="/provider"
                    element={<Provider />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/help"
                    element={<Help />}
                />
                <Route
                    path="/login"
                    element={<Request />}
                />
                <Route
                    path="/signup"
                    element={<Signup />}
                />
                <Route
                    path="/careers"
                    element={<Careers />}
                />
                <Route
                    path="/results"
                    element={<Results />}
                />
                <Route
                    path="*" 
                    element={<NoPage />}
                />
            </Routes>
        </>
    )
}; 

export default Navbar; 
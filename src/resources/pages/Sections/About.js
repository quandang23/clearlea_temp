import '../../css/about.css'
import Plower from '../../images/plower.jpg';
import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';

const About = () => {

    // variable to keep track of log in state 
    const {isLoggedIn, token, name, signup, login, set, end} = useAuth();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        console.log(authToken); 
        if (authToken) {
            // Set isLoggedIn to true if token is present
            set();
        }
    }, []);

    return (
        <div>
            <div className='about'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Mission Statement</p>
                            <p className='text2'>Quality and Customer Service</p>
                            <p className="text3"> 
                                We aim to connect service providers with customers who need help with mowing or plowing.
                                Our goal is to provide a platform where customers can easily find service providers within their area.
                            </p>
                        </div>
                        <img className="pic" alt="Image" src={Plower} />
                    </div> 
                </section>
            </div>
        </div>
    );
}; 

export default About; 
import '../../css/careers.css';
import Handshake from '../../images/handshake.jpeg';
import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';

const Careers = () => {

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
            <div className='careers'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Career Opportunity</p>
                            <p className='text2'>Empowering others to learn and contribute</p>
                            <p className="text3"> 
                                Our company values driven individuals with ability to learn quickly and execute tasks on time with business or engineering background. 
                                <br></br>
                                Please send your resume to 
                                <a href="mailto:dangintech@gmail.com"> dangintech@gmail.com</a>
                            </p>
                        </div>
                        <img className="pic" alt="Handshake" src={Handshake} />
                    </div> 
                </section>
            </div>
        </div>
    );
}; 

export default Careers; 
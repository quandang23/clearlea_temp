import '../../css/request.css'; 
import Google from "../../images/google.png";
import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';

const Signup = () => {

    // variable to keep track of log in state 
    const {isLoggedIn, token, name, signup, login, set, end} = useAuth();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        console.log(token); 
        if (authToken) {
            // Set isLoggedIn to true if token is present
            set();
        }
    }, []);

    return (
        <div>
            <div className='request'>
                <section className='section'>
                    <div className='container'>
                        <p className='text'>Sign Up</p>
                        <button onClick={signup} className='google' disabled={isLoggedIn}>
                            <p className='p'>Continue with Google</p>
                            <img className="pic" alt="Google Icon" src={Google}/>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}; 

export default Signup; 
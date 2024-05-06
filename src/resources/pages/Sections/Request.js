import '../../css/request.css'; 
import Google from "../../images/google.png";
import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';

const Request = () => {

    // variable to keep track of log in state 
    const {isLoggedIn, token, name, login, set, end} = useAuth();

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
            <div className='request'>
                <section className='section'>
                    <div className='container'>
                        <p className='text'>Log In</p>
                        <button onClick={login} className='google' disabled={isLoggedIn}>
                            <p className='p'>Continue with Google</p>
                            <img className="pic" alt="Google Icon" src={Google}/>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}; 

export default Request; 
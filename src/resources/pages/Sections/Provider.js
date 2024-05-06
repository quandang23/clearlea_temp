import '../../css/provider.css';
import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';
import Mower from '../../images/lawn2.jpeg';

const Provider = () => {

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
            <div className='provider'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Excellent Providers</p>
                            <p className='text2'>Maintain quality and great customer service</p>
                            <p className="text3"> 
                                The providers are carefully selected to ensure that they are able to provide the best service to our customers.
                                The application to become a provider is currently closed.
                            </p>
                        </div>
                        <img className="pic" alt="Mower" src={Mower} />
                    </div> 
                </section>
            </div>
        </div>
    );
}; 

export default Provider; 
import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';

const NoPage = () => {
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
        <h1>Error</h1>
    ); 
}; 

export default NoPage; 
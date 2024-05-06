import '../../css/results.css';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';
import { useReq } from '../Api/ReqContext.js';

const Results = () => {

    // variable to keep track of log in state 
    const { updateAddress, updateService, updateZipcode, address, service, zipcode } = useReq(); 
    const { isLoggedIn, token, name, signup, login, set, end } = useAuth();

    const [data, setData] = useState(""); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [temp, setTemp] = useState(""); 

    const apiCall = async (zipcode) => {
        console.log(zipcode);
        try {
            const response = await fetch('http://localhost:4131/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    zipcode: zipcode
                })
            }); 
            const data = await response.text(); 
            setData(data); 
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }; 

    useEffect(() => {
        // console.log("Hello"); 
        const authToken = localStorage.getItem('authToken');
        console.log(authToken); 
        if (authToken) {
            // Set isLoggedIn to true if token is present
            set();
        }

        // Calling API to get service providers
        setTemp(localStorage.getItem('zipcode')); 
    }, []);

    useEffect(() => {
        console.log(temp); 
        apiCall(temp); 
    }, [temp]); 

    return (
        <div>
            <div className='results'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Service Providers</p>
                            <section className='providerList'>
                                {loading && <p>Loading...</p>}
                                {/* {error && <p>Error: {error}</p>} */}
                                {!loading && !error && 
                                    <ul>
                                        {data.split(',').map((provider, index) => (
                                            <li key={index}>{provider.trim()}</li>
                                        ))}
                                    </ul>
                                }
                            </section>
                        </div>
                    </div> 
                </section>
            </div>
        </div>
    );
}; 

export default Results; 
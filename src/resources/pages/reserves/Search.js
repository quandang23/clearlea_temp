import '../../css/request/request.css'; 
import React, { useState } from 'react';
import '../../css/home/first.css';
import Places from '../places.js';

const Search = () => {
    const [data, setData] = useState(""); 

    const apiCall = async (zipcode) => {
        console.log(zipcode);
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
        setData(data)
    }; 

    // Keep track of the address and service selected
    const [address, setAddress] = useState(""); 
    const [zipcode, setZipcode] = useState(""); 
    const [service, setService] = useState("mow");

    const handleSubmit = (event) => {
        event.preventDefault();
        apiCall(zipcode); 
        console.log("Address:", address);
        console.log("Zipcode:", zipcode);
        console.log("Service selected:", service);
    }

    return (
        <div>
            <div className='main'>
                <section className='section'>
                    <div className='container'>
                        <div className='form'>
                            <form onSubmit={handleSubmit}>
                                <Places className="address" setAddress={setAddress} setZipcode={setZipcode}/>
                                <button
                                    type="button" 
                                    className="mow"
                                    onClick={() => setService("mow")} 
                                    style={{ 
                                        backgroundColor: service === 'mow' ? '#196706' : 'white', 
                                        color: service === 'mow' ? 'white' : 'black'
                                    }}
                                >   
                                    Mow
                                </button>
                                <button
                                    type="button" 
                                    className="plow"
                                    onClick={ () => setService("plow")}
                                    style={{ 
                                        backgroundColor: service === 'plow' ? '#196706' : 'white', 
                                        color: service === 'plow' ? 'white' : 'black'
                                    }}
                                >   
                                    Plow
                                </button>
                                <input type="submit" className={`prices ${address === "" ? 'disabled-button' : ''}`} value="See prices"/>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <h1>Notify</h1>
                <div className="homePage">
                    {/* <button onClick={() => apiCall("Juanito Dang", 55118)}>Make API call</button> */}
                    <p>{`${data}`}</p>
                </div>
            </div>
        </div>
    );
}; 

export default Search; 
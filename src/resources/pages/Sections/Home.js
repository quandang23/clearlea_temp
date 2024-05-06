import '../../css/home/first.css';
import '../../css/home/second.css';
import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'; 
import Mow1 from '../../images/lawn1.png';
import Plow1 from '../../images/snow.png';
import SecondPlow from '../../images/plow.png';
import SecondMow from '../../images/mow.png';    
import SecondTime from '../../images/time.png';
import SecondChoose from '../../images/choose.png';
import Places from '../Api/places.js';
import { useAuth } from '../Api/AuthContext.js'; 
import { useReq } from '../Api/ReqContext.js';

const Home = () => {

    const { isLoggedIn, token, name, login, set, end } = useAuth();
    const { updateAddress, updateService, updateZipcode, address, service, zipcode } = useReq(); 

    // Keep track of the address and service selected
    const [addressTemp, setAddressTemp] = useState(""); 
    const [serviceTemp, setServiceTemp] = useState("mow");
    const [zipcodeTemp, setZipcodeTemp] = useState(""); 

    useEffect(() => {
        // const authToken = localStorage.getItem('authToken');
        // console.log(authToken)
        // if (authToken) {
        //     // Set isLoggedIn to true if token is present
        //     set();
        // }
        console.log("hello"); 
        // if (window.location.pathname == "/"){
        //     localStorage.removeItem('zipcode'); 
        // }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Service selected:", serviceTemp);
        console.log("Address:", addressTemp);
        console.log("Zipcode:", zipcodeTemp); 
        
        // Navigate to login if not loggedIn
        if (!isLoggedIn) {
            window.location.href = "/login";
        }
        else if (isLoggedIn) {
            updateAddress(addressTemp); 
            updateService(serviceTemp); 
            updateZipcode(zipcodeTemp); 
            if (zipcode != null) {
                window.location.href = "/results";
            }
        }
    }

    return (
        <div>
            {/* The first section of the home page */}
            <div className='first'>
                <section className='section'>
                    <div className='container'>
                        <div className="text">
                            <p>Find Help To Mow or Plow</p>
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <Places className="address" setAddress={setAddressTemp} setZipcode={setZipcodeTemp}/>
                                <button
                                    type="button" 
                                    className="mow"
                                    onClick={() => setServiceTemp("mow")} 
                                    style={{ 
                                        backgroundColor: serviceTemp === 'mow' ? '#196706' : 'white', 
                                        color: serviceTemp === 'mow' ? 'white' : 'black'
                                    }}
                                >   
                                    Mow
                                </button>
                                <button
                                    type="button" 
                                    className="plow"
                                    onClick={ () => setServiceTemp("plow")}
                                    style={{ 
                                        backgroundColor: serviceTemp === 'plow' ? '#196706' : 'white', 
                                        color: serviceTemp === 'plow' ? 'white' : 'black'
                                    }}
                                >   
                                    Plow
                                </button>
                                <input type="submit" className={`prices ${addressTemp === "" ? 'disabled-button' : ''}`} value="See prices"/>
                            </form>
                        </div>
                        <div>
                            <img className="pic1" alt="Lawn" src={serviceTemp === 'mow' ? Mow1 : Plow1} /> 
                        </div>
                    </div>
                </section>
            </div>

            {/* The second section of the home page */}
            <div className='second'>
                <section className='section'>
                    <div className='container'>
                        <div className="text1">
                            How It Works
                        </div>
                        <p className="text2">Instant quote for service to mow or plow at your address</p>
                        <p className="text3">Select new service provider or request any previous provider</p>
                        <p className="text4">Request service time and relax</p>
                        <img className="img1" alt="Plow" src={SecondPlow} />
                        <img className="img2" alt="Mow" src={SecondMow} />
                        <img className="img3" alt="Choose" src={SecondChoose} />
                        <img className="img4" alt="Time" src={SecondTime} />
                        <NavLink to="/learn"><p className='learn'>Learn more</p></NavLink>
                    </div>
                </section>
            </div>
        </div>
        
    );
}; 

export default Home; 
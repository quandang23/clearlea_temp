import '../css/home/first.css';
import '../css/home/second.css';
import '../css/home/third.css';
import '../css/home/fourth.css';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import Mow1 from '../images/lawn1.png';
import Mow2 from '../images/lawn2.jpeg';
import Plow1 from '../images/snow.png';
import SecondPlow from '../images/plow.png';
import SecondMow from '../images/mow.png';    
import SecondTime from '../images/time.png';
import SecondChoose from '../images/choose.png';
import Plow4 from '../images/plower.jpg';

const Home = () => {

    // Keep track of the address and service selected
    const [address, setAddress] = useState(""); 
    const [service, setService] = useState("mow");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Service selected:", service);
        console.log("Address:", address);
    }

    // Redirection to sign up when sign up button is clicked
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup'); 
    };

    return (
        
        <div>
            {/* The first section of the home page */}
            <div className='first'>
                <section className='section'>
                    <div className='container'>
                        <div className="text">
                            <p>Find Help To Mow or Plow</p>
                        </div>
                        <div className='form'>
                            <form onSubmit={handleSubmit} method='post'>
                                <input required
                                    type="text" 
                                    value={address}
                                    className="address"
                                    placeholder='Enter Address'
                                    onChange={ (e) => setAddress(e.target.value)}
                                />
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
                                <input type="submit" className='prices' value="See prices"/>
                            </form>
                        </div>
                        <div>
                            <img className="pic1" alt="Lawn" src={service === 'mow' ? Mow1 : Plow1} /> 
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

            {/* The third section of the home page */}
            <div className='third'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Register To Be A Service Provider</p>
                            <p className="text2">Work when u want, when u can</p>
                            <p className="makeMoney">Make money using your own equipment, or rent equipment from us.</p>
                        </div>
                        <button
                            type="button" 
                            className="signup1"
                            onClick={handleSignUpClick}
                        >   
                            Sign up
                        </button>
                        <NavLink to="/login"><p className='login1'>Already have an account? Sign in</p></NavLink>
                        <img className="pic2" alt="Lawn mower" src={Mow2} />
                    </div>
                </section>
            </div>

            {/* The fourth section of the home page */}
            <div className='fourth'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Get Paid When Job Is Finished</p>
                            <p className="text2">Take before and after photo of the job for confirmation and get paid.</p>
                            <NavLink to="/provider"><p className='text3'>Learn more</p></NavLink>
                        </div>
                        <img className="pic3" alt="Plower" src={Plow4} />
                    </div> 
                </section>
            </div>

        </div>
        
    );
}; 

export default Home; 
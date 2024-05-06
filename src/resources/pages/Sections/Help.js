import '../../css/help.css';
import lawnIcon from '../../images/lawnMowingIcon.jpg'
import React, { useState, useEffect } from 'react';
import { useAuth } from '../Api/AuthContext.js';

const Help = () => {
    // Define an array of objects containing questions and answers for each dropdown
    const dropdownData = [
        {
            question: "What is the process to request a service?",
            answer: "After signing in, you can enter your address and choose your service. " + 
            "The site will provide a list of recommended service providers within your area. " + 
            "They will be notified in a first come first serve basis after you submit the job. " + 
            "If the job is accepted, it is expected to be completed immediately. " + 
            "If there are any problems after the job is accepted, you can contact the service provider directly. "
        },
        {
            question: "How do I sign up for an account?",
            answer: "Click top right button to log in or sign in with Google. The website will redirect you to home page if successful. "
        },
        {
            question: "How can I contact customer support?",
            answer: "If the job is accepted and there's a question, you can contact the service provider directly. "
        }, 
        {
            question: "Can I cancel the job if it is accepted?",
            answer: "Depending on what stage the job process is at, the appropriate refund will proceed. " + 
            "If the service provider is doing the job, you can't cancel the job. " + 
            "If the service provider is at your location without doing the job, you can cancel and receive the refund minus the traveling fee. " + 
            "If the job is canceled within 5 minutes of the job accepted. Full refund will be given. "
        }
    ];

    const [dropdownStates, setDropdownStates] = useState({});

    const toggleDropdown = (dropdownId) => {
        setDropdownStates(prevState => ({
            ...prevState,
            [dropdownId]: !prevState[dropdownId] // Toggle the state of the dropdown with id dropdownId
        }));
    }

    // variable to keep track of log in state 
    const {isLoggedIn, token, name, signup, login, set, end} = useAuth();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            // Set isLoggedIn to true if token is present
            set();
        }
    }, []);

    return (
        <div>
            <div className='help'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>FAQ</p>
                            <p className='text2'>Common questions about our platform</p>
                            <p className='text3'>
                                Please feel free to contact us if you have any questions that are not answered at 
                                <a href="mailto:dangintech@gmail.com"> dangintech@gmail.com</a>
                            </p>
                        </div>
                        <img className="pic" alt="Image" src={lawnIcon} />
                    </div>
                </section>
                {/* Render each dropdown dynamically using the dropdownData array */}
                {dropdownData.map((item, index) => (
                    <div key={index} className="dropdown">
                        <p className="dropbtn" onClick={() => toggleDropdown(index)}>
                            {item.question}
                        </p>
                        {dropdownStates[index] && (
                            <div className="dropdown-content">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}; 

export default Help; 
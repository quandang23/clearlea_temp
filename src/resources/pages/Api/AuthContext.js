import React, { createContext, useState, useContext, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null); 

  // variables to keep track of the user and the user's profile
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(null); 
  // might not need the whole profile - security purpose
  const [profile, setProfile] = useState(null);
  const [newProfile, setNewProfile] = useState(null); 
  const [name, updateName] = useState(null); 

  const login = useGoogleLogin ({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  const signup = useGoogleLogin ({
    onSuccess: (codeResponse) => setNewUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  }); 

  const set = () => {
    // Perform login logic here
    setIsLoggedIn(true); 
  };

  // Corrected logout function
  const end = async () => {
    // Call the doublecheck function
    await doublecheck(); 
    // Clear the token from state or context
    setToken(null);
    // Clear the local storage
    localStorage.clear();
    // Perform logout logic here
    setIsLoggedIn(false);
    // Call the Google logout function
    await doublecheck(); 
    googleLogout();
  };

  // Corrected doublecheck function
  const doublecheck = async () => {
    console.log(token); 
    console.log(localStorage.getItem('name')); 
    console.log(localStorage.getItem('authToken')); 
    console.log(isLoggedIn); 
  };

  // Getting the user's profile
  useEffect(
  () => {
      if (user) {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
            }
        })
        .then((res) => {
            setProfile(res.data);
            console.log(res.data);
        })
        .catch((err) => console.log(err));
      }
  },[user]);

  useEffect(() => {
    if (profile) {
        verifyExistingUser(profile.email)
    }
  }, [profile]);

  // sending user's email to server to verify
  const verifyExistingUser = async (email) => {
      console.log("The email is " + email);
      const response = await fetch('http://localhost:4131/verify', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: email
          })
      }); 
      const data = await response.text(); 
      console.log(data);
      
      if (data === "not verified"){
          alert("Please create an account first by signing up");
      }
      //successful log in 
      else {
          setToken(data); 
          updateName(profile.name); 
          setIsLoggedIn(true);
          window.location.href = "/"; 
      }
  }; 

  // Getting the new user's profile
  useEffect(
  () => {
      if (newUser) {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${newUser.access_token}`, {
            headers: {
                Authorization: `Bearer ${newUser.access_token}`,
                Accept: 'application/json'
            }
        })
        .then((res) => {
            setNewProfile(res.data);
            console.log(res.data);
        })
        .catch((err) => console.log(err));
      }
  },[newUser]);

  useEffect(() => {
    if (newProfile) {
        createNewUser(newProfile.given_name, newProfile.email)
    }
  }, [newProfile]);

  // sending user's email to server to verify
  const createNewUser = async (name, email) => {
    console.log("The email is " + email);
    const response = await fetch('http://localhost:4131/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name, 
            email: email
        })
    }); 
    const data = await response.text(); 
    console.log(data);
    
    if (data === "error creating"){
        alert("Error! Please try creating the account later");
    }
    //successful log in 
    else {
        setToken(data); 
        updateName(profile.name); 
        setIsLoggedIn(true);
        window.location.href = "/"; 
    }
  }; 

  // after recieving token, hence, verified, save token, name and email to maintain if page reloads 
  useEffect(() => {
    if (token) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('name', profile.given_name); 
        localStorage.setItem('email', profile.email); 
    }
  }, [token]); 

  useEffect(() => {
    if (token) {
      // Redirect after token is set
      window.location.href = "/";
    }
  }, [token]);
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, name, signup, login, set, end}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
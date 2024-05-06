import React, { createContext, useState, useContext, useEffect } from 'react';

const ReqContext = createContext();

export const ReqProvider = ({ children }) => {

    // Keep track of the address and service selected
    const [address, setAddress] = useState(""); 
    const [service, setService] = useState("mow");
    const [zipcode, setZipcode] = useState(""); 

    const updateAddress = (address) => {
        setAddress(address); 
    }

    const updateService = (service) => {
        setService(service); 
    }

    const updateZipcode = (newZipcode) => {
        setZipcode(newZipcode); 
    }

    return (
        <ReqContext.Provider value={{ updateAddress, updateService, updateZipcode, address, service, zipcode}}>
            {children}
        </ReqContext.Provider>
    );
};

export const useReq = () => useContext(ReqContext);
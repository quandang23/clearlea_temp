// import React, { useState, useEffect } from "react";
// import { useLoadScript } from "@react-google-maps/api";
// import usePlacesAutocomplete from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// const googleMapsApiKey = "AIzaSyBNF55iCM8nQAVWRNj_NfzEcH09tcHIdhs";

// export default function Places({setAddress, setZipcode}) {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey, 
//     libraries: ["places"],
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map setAddress={setAddress} setZip={setZipcode}/>;
// }

// function Map({setAddress, setZip}) {
//   return (
//     <>
//       <div className="places-container">
//         <PlacesAutocomplete setAddress={setAddress} setZip={setZip}/>
//       </div>
//     </>
//   );
// }

// const PlacesAutocomplete = ({ setAddress , setZip }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();
//     setAddress(address);
//     // Retrieve the ZIP code using the Geocoding API
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//         address
//       )}&key=${googleMapsApiKey}`
//     );
//     // if the data is not there, don't read 
//     const data = await response.json();
//     const zipcode = data.results[0].address_components[7].long_name;
//     localStorage.setItem("zipcode", zipcode); 
//     setZip(zipcode);
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         disabled={!ready}
//         className="address"
//         placeholder="Search an address"
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption 
//                 key={place_id} 
//                 value={description}
//               />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };
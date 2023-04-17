import React, { useState } from "react";

import "./Dropdown.css";
// const countriesData = [
//   {
//     name: "Germany",
//     states: {
//       "Duesseldorf" : [],
//       "Leinfelden-Echterdingen" : [],
//       "Eschborn" : []},
//   },
//   {
//     name: "India",
//     states: {
//       "Delhi" : [],
//       "Kolkata" : [],
//       "Mumbai" : [],
//       "Bangalore" :[]},
//   },
//   {
//     name: "France",
//     states: {"Auvergne" : [], "Bretagne": [], "Corse": [], "Centre": []},
//   },
// ];

const CascadingDropdown = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {

    const selectedCountry = e.target.value;
    console.log("🚀 ~ file: Dropdown.js:36 ~ handleCountryChange ~ selectedCountry:", selectedCountry)
  
    setCountry(selectedCountry);
    const countryStates =
      selectedCountry === "India"
        ? ["Gujrat", "Madhya Pradesh", "Uttar Pradesh"]
        : ["Ontario", "Quebec", "British Columbia"];
    setStates(countryStates);
    setState("");
    setCities([]);
    setCity("");
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    console.log("🚀 ~ file: Dropdown.js:51 ~ handleStateChange ~ selectedState:", selectedState)
    setState(selectedState);
    const stateCities =
      selectedState === "Gujrat"
        ? ["Ahmedabad", "Amreli", "Rajkot", "Surat", "Bharuch", "Bhavnagar"]
        : selectedState === "Madhya Pradesh"
        ? [
            "Alirajpur",
            "Anuppur",
            "Ashok Nagar",
            "Balaghat",
            "Barwani",
            "Betul",
          ]
        : selectedState === "Uttar Pradesh"
        ? [
            "Agra",
            "Allahabad",
            "Aligarh",
            "Ambedkar Nagar",
            "Auraiya",
            "Azamgarh",
          ]
        : selectedState === "Ontario"
        ? ["Toronto", "Ottawa", "Mississauga"]
        : selectedState === "Quebec"
        ? ["Montreal", "Quebec City", "Laval"]
        : selectedState === "British Columbia"
        ? ["Vancouver", "Victoria", "Surrey"]
        : [];
    setCities(stateCities);
    setCity("");
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    console.log("🚀 ~ file: Dropdown.js:87 ~ handleCityChange ~ selectedCity:", selectedCity)
    setCity(selectedCity);
    
  };

  const Onchangehandler = () => {
    const data = {
      country,
      state,
      city,
    };
    console.log(data);
  
  };
  return (
    <div onChange={Onchangehandler} className="Dropdown">
      <label>
        Country:
        <select value={country} onChange={handleCountryChange }>
          <option value="">--Please choose a country--</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
        </select>
      </label>
      <br />
      <label>
        State:
        <select value={state} onChange={handleStateChange} disabled={!country}>
          <option value="">--Please choose a state--</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        City:
        <select value={city} onChange={handleCityChange} disabled={!state}>
          <option value="">--Please choose a city--</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CascadingDropdown;

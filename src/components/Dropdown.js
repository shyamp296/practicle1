import React, { useState } from "react";

import "./registration/Registration.css"
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

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    // You can replace these hard-coded lists with an API call to get the states and cities for the selected country
    const countryStates =
      selectedCountry === "India"
        ? ["gujrat", "UP", "MP"]
        : ["Ontario", "Quebec", "British Columbia"];
    setStates(countryStates);
    setState("");
    setCities([]);
    setCity("");
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    // You can replace these hard-coded lists with an API call to get the cities for the selected state
    const stateCities =
      selectedState === "Gujrat"
        ? ["rajkot", "Ahemdabad", "surat"]
        : selectedState === "MP"
        ? ["Los Angeles", "San Francisco", "San Diego"]
        : selectedState === "UP"
        ? ["Houston", "Dallas", "Austin"]
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

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
  };

  return (
    <div>
      <label>
        Country:
        <select value={country} onChange={handleCountryChange}>
          <option value="">--Please choose a country--</option>
          <option value="India">USA</option>
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


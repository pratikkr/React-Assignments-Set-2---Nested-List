import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const getCities = (stateSelected) => {
    let stateObj = states.filter((state) => state.name === stateSelected);
    return stateObj[0].cities;
  };

  const getTowns = (cities, citySelected) => {
    let cityObj = cities.filter((city) => city.name === citySelected);
    return cityObj[0].towns;
  };

  let citiesList = getCities(states[0].name);
  let townsList = getTowns(citiesList,citiesList[0].name);

  const[selectedState,setSelectedState] =useState(States[0].name);
  const[selectedCity, setSelectedCity] = useState(States[0].cities[0].name);
  const[selectedCitiesList, setSelectedCitiesList] = useState(citiesList);
  const][selectedTownsList, setSelectedTownsList] = useState(townsList);

  const handleStatesDropdown =(event) => {
    setSelectedState(event.target.value);
    const newCitiesList = getCities(event.target.value);
    setSelectedCitiesList(newCitiesList);
    setSelectedCity(newCitiesList[0].name);
    const newTownsList = getTowns(newCitiesList, newCitiesList[0].name);
    setSelectedTownsList(newTownsList);

  };

  const handleCitiesDropdown = (event) => {
    setSelectedCity(event.target.value);
    const newTownsList = getTowns(selectedCitiesList,event.target.value);
    setSelectedTownsList(newTownsList);
  }
  return <div id="main">
    <States
    states={states}
    selectedState ={selectedState}
    onChange = {(event) => handleStatesDropdown(event)}
    />
    <cities 
    cities={selectedCitiesList}
    selectedCity={selectedCity}
    onChange= {(event) => handleCitiesDropdown(Eevnt)}
    />
    <Towns towns ={selectedTownsList}/>
  </div>;
}

export default App;

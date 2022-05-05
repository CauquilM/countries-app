import { useState, useEffect } from "react";
import CountryCard from "../components/country-card";
import axios from "axios";

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
        console.log(result);
      });
    // setCountries(data);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {countries.map((country) => (
          <CountryCard key={country.id} country={country}/>
        ))}
      </div>
      {/* <div>
        {countries.map((country, index) => (
          <p key={index}>{country.name}</p>
        ))}
      </div> */}
    </div>
  );
}

export default CountriesList;

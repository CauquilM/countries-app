import { useState, useEffect } from "react";
import CountryCard from "../components/country-card";

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
        <div>
          
        </div>
        {countries.map((country, index) => (
          <CountryCard key={index} country={country}/>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;

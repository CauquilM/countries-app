import { useState, useEffect } from "react";
import CountryCard from "../components/country-card";

function CountriesList(props) {
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
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} nightMode={props.nightMode}/>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;

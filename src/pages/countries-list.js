import { useState, useEffect } from "react";
import CountryCard from "../components/country-card";

function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState(null);

  const filterFunction = (regiont) => {
    let filter = countries.filter(
      (countries) => countries.region === regiont
    );
    setFilteredCountries(filter);
    console.log(filteredCountries);
  };

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
        <button onClick={() => filterFunction("Asia")}>Asia</button>
        <button onClick={() => filterFunction("Americas")}>Americas</button>
        {!filteredCountries ? countries.map((country, index) => (
          <CountryCard
            key={index}
            country={country}
            nightMode={props.nightMode}
          />
        )) : filteredCountries.map((country, index) => (
          <CountryCard
            key={index}
            country={country}
            nightMode={props.nightMode}
          />
        ))}
      </div>
    </div>
  );
}

export default CountriesList;

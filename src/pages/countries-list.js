import { useState, useEffect } from "react";
import CountryCard from "../components/country-card";
import SearchCountry from "../components/search-country";
import SelectRegion from "../components/select-region";
import { useSelector } from "react-redux";

function CountriesList() {
  const [selectedRegion, setSelectedRegion] = useState();
  const [filteredCountries, setFilteredCountries] = useState(null);
  const countries = useSelector((state) => state.countriesData.countriesData);

  const selectRegion = (region) => {
    setSelectedRegion(region);
    filterFunction(region);
  };

  const filterFunction = (selectedRegion) => {
    if (selectedRegion !== "World") {
      let filter = countries.filter(
        (countries) => countries.region === selectedRegion
      );
      setFilteredCountries(filter);
      console.log(filteredCountries);
    } else {
      setFilteredCountries(null);
    }
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div
        className={window.innerWidth > 600 ? "row valign-wrapper" : "container"}
      >
        <SearchCountry />
        <SelectRegion onMoveData={selectRegion} />
      </div>
      <div className="row">
        {!filteredCountries
          ? countries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))
          : filteredCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
      </div>
    </div>
  );
}

export default CountriesList;

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data/data.json";

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    data.forEach((countryData) => {
      if (name === countryData.name) {
        console.log(countryData);
        setCountry(countryData);
      }
    });
  }, [name]);

  return (
    <div>
      <div className="container">
        <div className="row section">
          <div className="col s10 offset-s2">
            <button
              className="waves-effect waves-light btn color white black-text"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </div>
        <div className="row valign-wrapper">
          <div className="col s5 offset-s1">
            <img className="responsive-img" src={country.svg} alt="" />
          </div>
          <div className="col s5 offset-s1">
            <p>Coucou</p>
            <p>Coucou</p>
            <p>Coucou</p>
            <p>Coucou</p>
            <p>Coucou</p>
            <p>Coucou</p>
            <p>Coucou</p>
            <p>Coucou</p>
            <p>Coucou</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;

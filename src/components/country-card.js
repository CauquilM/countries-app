import { Link } from "react-router-dom";
// import "./country-card.css"

function CountryCard(props) {
  return (
    <div className="col s3">
      <div className="card">
        <div className="card-image">
          <img height="200px" src={props.country.flags.svg} alt="" />
        </div>
        <div className="card-content truncate">
          <p className="card-title">{props.country.name}</p>
          <p>Population: {props.country.population}</p>
          <p>Region: {props.country.region}</p>
          <p>Capital: {props.country.capital}</p>
        </div>
        <div className="card-action">
          <Link to={`/countries/${props.country.name}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

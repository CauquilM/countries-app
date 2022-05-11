import { Link } from "react-router-dom";

function CountryCard(props) {
  return (
    <div className="col s12 m6 l4 xl3">
      <div
        className="card"
        style={{
          backgroundColor: props.nightMode ? "#2b3743" : "white",
          color: props.nightMode ? "white" : "black",
        }}
      >
        <div className="card-image">
          <img height="200px" src={props.country.flags.svg} alt="" />
        </div>
        <div className="card-content truncate">
          <p className="card-title">{props.country.name}</p>
          <p>Population: {props.country.population.toLocaleString()}</p>
          <p>Region: {props.country.region}</p>
          <p>Capital: {props.country.capital}</p>
        </div>
        <div
          className="card-action"
          style={{
            backgroundColor: props.nightMode ? "#2b3743" : "white",
            color: props.nightMode ? "white" : "black",
          }}
        >
          <Link to={`/countries/${props.country.name}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

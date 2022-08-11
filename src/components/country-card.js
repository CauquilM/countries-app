import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CountryCard(props) {
  const nightMode = useSelector((state) => state.nightMode.nightMode);
  return (
    <div className="col s12 m6 l4 xl3">
      <div
        className="card"
        style={{
          backgroundColor: nightMode ? "#2b3743" : "white",
          color: nightMode ? "white" : "black",
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
            backgroundColor: nightMode ? "#2b3743" : "white",
            color: nightMode ? "white" : "black",
          }}
        >
          <Link to={`/countries/${props.country.name}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

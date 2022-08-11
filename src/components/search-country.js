import { useState } from "react";
import { Link } from "react-router-dom";

function SearchCountry() {
  const [country, setCountry] = useState("");

  return (
    <div className="input-field col s12 m5">
      <input
        id="icon_prefix"
        type="text"
        className="validate"
        onChange={(event) => setCountry(event.target.value)}
      />
      <Link to={`/countries/${country}`}>
        <span className="prefix material-symbols-outlined">search</span>
      </Link>
    </div>
  );
}

export default SearchCountry;

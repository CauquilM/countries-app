import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./pages/countries-list";
import CountryDetails from "./pages/country-details";
import ErrorPage from "./pages/error-page";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper red">
            <div className="container">
              <Link
                id="test"
                className="black-text flow-text"
                to="/"
                style={{ color: "white" }}
              >
                Where in the world ?
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <ul>Dark mode</ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="*" element={<ErrorPage />} />

          <Route path="/" element={<CountriesList />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/countries/:name" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

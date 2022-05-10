/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./pages/countries-list";
import CountryDetails from "./pages/country-details";
import ErrorPage from "./pages/error-page";

function App() {
  const [nightMode, setNightMode] = useState(false);

  const changeMode = () => {
    nightMode ? setNightMode(false) : setNightMode(true);
  };

  return (
    <Router>
      <div
        className="app"
        style={{ backgroundColor: nightMode ? "#212e37" : "white" }}
      >
        <nav>
          <div
            className="nav-wrapper"
            style={{
              backgroundColor: nightMode ? "#212e37" : "white",
              color: nightMode ? "white" : "black",
            }}
          >
            <div className="container">
              <Link
                id="test"
                className="flow-text"
                to="/"
                style={{ color: nightMode ? "white" : "black" }}
              >
                Where in the world?
              </Link>
              <ul
                id="nav-mobile"
                className="right hide-on-med-and-down flow-text"
              >
                <li>
                  <ul>
                    <a
                      onClick={changeMode}
                      style={{ color: nightMode ? "white" : "black" }}
                      className="btn-flat"
                    >
                      Dark mode
                    </a>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="*" element={<ErrorPage />} />

          <Route path="/" element={<CountriesList nightMode={nightMode} />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route
            path="/countries/:name"
            element={<CountryDetails nightMode={nightMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

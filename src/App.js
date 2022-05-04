import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./pages/countries-list";

function App() {
  return (
    <Router>
      <div>
      <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<CountriesList/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

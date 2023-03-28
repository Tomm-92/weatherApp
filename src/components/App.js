import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />

      <ForecastSummaries forecasts={forecasts} />

      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
}

export default App;

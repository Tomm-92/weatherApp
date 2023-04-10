import React from "react";
import "../styles/LocationDetails.css";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city} ${country}`}</h1>
  );
}

export default LocationDetails;

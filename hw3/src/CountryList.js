// CountryList.js
import React, { useState, useEffect } from 'react';

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/region/South%20America');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h2>South American Countries</h2>
      <ul>
        {countries.map(country => (
          <li key={country.name.common}>
            <img src={country.flags.svg} alt={country.name.common} width="30" height="20" />
            {country.name.common}
            <p>Capital: {country.capital}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;

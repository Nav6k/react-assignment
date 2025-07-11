import React, { useEffect, useState } from 'react';
import airports from '../data/airports.json'

const getClientCountry = async () => {
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();
  return data.country_name;
};

const Screen2 = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [clientCountry, setClientCountry] = useState('');

  useEffect(() => {
    getClientCountry().then(setClientCountry);
  }, []);

  const handleChange = (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);

    const filtered = airports
      .filter((airport) => airport.airportName.toLowerCase().includes(input))
      .sort((a, b) => {
        if (a.countryName === clientCountry && b.countryName !== clientCountry) return -1;
        if (a.countryName !== clientCountry && b.countryName === clientCountry) return 1;
        return 0;
      });

    setSuggestions(filtered);
  };

  return (
    <div>
      <h2>Screen 2</h2>
      <input
        type="text"
        placeholder="Search airport..."
        value={query}
        onChange={handleChange}
      />

      <ul>
        {suggestions.slice(0, 10).map((airport) => (
          <li key={airport.airportCode}>
            {airport.airportName} - {airport.cityName}, {airport.countryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Screen2;
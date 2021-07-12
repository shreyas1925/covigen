import React from "react";

const test = () => {
  return (
    <div>
      <FormControl className="app__dropdown">
        <div className="app__select">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
      <FormControl className="app__dropdown">
        <div className="app__select">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Statewise</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
      <FormControl className="app__dropdown">
        <div className="app__select">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Vaccination</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

export default test;

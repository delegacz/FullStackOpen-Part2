import React, {useState, useEffect, useImperativeHandle} from 'react';
import axios from 'axios'
import SearchField from './components/SearchField'
import FilterCountryList from './components/FilterCountryList'

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [clickedCountry, setClickedCountry] = useState('');
  const [weather, setWeather] = useState([])

  const getCountries = () => {
    console.log('fired')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(
        response => {
          console.log('promise fulfilled')
          console.log(response.data)
          setCountries(response.data)
        }
      ) 
  }
const axios = require('axios');
const params = {
  access_key: 'RETRACTED',
  query: 'New York'
}

axios.get('https://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(apiResponse);
  }).catch(error => {
    console.log(error);
  });

  useEffect(getCountries,[])
  const weatherApiParams = {
    access_key: 'aa581902e4b65d8a17a2580b20e3caa0',
    query: 'New York'
  }
  const getWeatherInformatin = () => {
    axios
    .get('https://api.weatherstack.com/current', {weatherApiParams}).then(response => {
      console.log('got')
      console.log(response.data)

    })
  }
  useEffect(getWeatherInformatin,[])

  const handleSearchAction = (event) => {
    setClickedCountry('')
    setSearch(event.target.value)
  }
  
  const handleShowEvent= (event) => {
    setClickedCountry(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div className="App">
      <SearchField search={search} handleSearchAction={handleSearchAction}/>
    <div>
      <ul>
        <FilterCountryList countries={countries} search={search} handleShowEvent={handleShowEvent} clickedCountry={clickedCountry}/>
      </ul>
    </div>
    </div>
  )
}
export default App;

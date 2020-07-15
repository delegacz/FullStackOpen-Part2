import React, {useState, useEffect, useImperativeHandle} from 'react';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
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
  useEffect(getCountries,[])
  const handleSearchAction = (event) => {
  setSearch(event.target.value)
  }
  return (
    <div className="App">
      <SearchField search={search} handleSearchAction={handleSearchAction}/>
    <div>
      <ul>
        <FilterCountryList countries={countries} search={search}/>
      </ul>
    </div>
    </div>
  )
}
const FilterCountryList = (props) => {
  let countOfReturnedCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.search.toLowerCase())).length
  if(countOfReturnedCountries>10) {
    return (
      <p>Too many results to display</p>
    )
  }  else {
    return (
      <>
      {props.countries.filter(country => country.name.toLowerCase().includes(props.search.toLowerCase())).map((country,i) => <DisplayCountry key={i} country={country} count={countOfReturnedCountries} countries={props.countries}/>)}
      </>
    )
  }
}
const DisplayCountry = (props) => {
  console.log(props)
  console.log(props.country.flag)
  if(props.count===1) {
    return(<>
      <h1>{props.country.name}</h1>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
      <h2>Languages</h2>
      <ul>
    {props.country.languages.map((language,i) => <li key={i}> {language.name}</li>)}
      </ul>
      <img src={props.country.flag} width="200px"/>
    </>)
  }
  else {
  return(
    <>
      <li>{props.country.name}</li>
    </>
  )}
}
const SearchField = (props) => {
  return (
    <>
    <input value={props.search} onChange={props.handleSearchAction}/>
    <button>Search</button>
    </>
  )
}
export default App;

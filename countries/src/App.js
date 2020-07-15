import React, {useState, useEffect, useImperativeHandle} from 'react';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [clickedCountry, setClickedCountry] = useState('');
  
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
const FilterCountryList = (props) => {
  let countOfReturnedCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.search.toLowerCase())).length
  if(countOfReturnedCountries>10) {
    return (
      <p>Too many results to display</p>
    )
  }  else if(props.clickedCountry != '') { 
    return (
      <>
      {props.countries.filter(country => country.name.match(props.clickedCountry)).map((country,i) => <DetailedCountryView key={i} country={country}/>)}
      </>
    )}
  else {
    return (
      <>
      {props.countries.filter(country => country.name.toLowerCase().includes(props.search.toLowerCase())).map((country,i) => <DisplayCountry key={i} country={country} count={countOfReturnedCountries} countries={props.countries} handleShowEvent={props.handleShowEvent}/>)}
      </>
    )
  }
}
const DisplayCountry = (props) => {
  console.log(props)
  console.log(props.country.flag)
  if(props.count===1) {
    return(<>
      <DetailedCountryView country={props.country}/>
    </>)
  }
  else {
  return(
    <>
      <li>{props.country.name} <button value={props.country.name} onClick={props.handleShowEvent}>Show</button></li>
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

const DetailedCountryView = (props) => {
  return (
    <>
      <h1>{props.country.name}</h1>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
      <h2>Languages</h2>
      <ul>
        {props.country.languages.map((language,i) => <li key={i}> {language.name}</li>)}
      </ul>
      <img src={props.country.flag} width="200px"/>
    </>
  )
}
export default App;

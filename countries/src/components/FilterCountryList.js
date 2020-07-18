import React, {useState, useEffect, useImperativeHandle} from 'react';
import DetailedCountryView from "./DetailedCountryView";
import DisplayCountry from "./DisplayCountry";

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

export default FilterCountryList
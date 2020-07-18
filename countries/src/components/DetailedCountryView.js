import React, {useState, useEffect, useImperativeHandle} from 'react';


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

export default DetailedCountryView
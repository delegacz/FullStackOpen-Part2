import React, {useState, useEffect, useImperativeHandle} from 'react';
import DetailedCountryView from './DetailedCountryView'

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

  export default DisplayCountry
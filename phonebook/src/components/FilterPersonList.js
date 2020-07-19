import React from 'react'
import DisplayPersonsList from './DisplayPeronsList'

const FilterPersonList = (props) => {
    return (
      <>
      {props.persons.filter(person => person.name.toLowerCase()
      .includes(props.newSearch.toLowerCase())).map((person, i) => 
      <DisplayPersonsList key={i} person={person} handleDeleteRequest={() => props.handleDeleteRequest(person.id)}/>)}
      </>
    )
}

export default FilterPersonList
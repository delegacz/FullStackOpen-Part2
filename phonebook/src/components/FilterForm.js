import React from 'react'

const FilterForm = (props) => {
    return (
      <>
      Search <input value={props.newSearch} onChange={props.handleSearch}/>
      </>
    )
  }

export default FilterForm
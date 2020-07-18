import React, {useState, useEffect, useImperativeHandle} from 'react';

const SearchField = (props) => {
    return (
      <>
      <input value={props.search} onChange={props.handleSearchAction}/>
      <button>Search</button>
      </>
    )
  }
export default SearchField
import React from 'react'

const AddPersonForm = (props) => {
    return (
      <form onSubmit={props.addName}>
        <div>
          Name: <input value={props.newName} onChange={props.handleNameChange}/><br/>
          Number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
  }

export default AddPersonForm
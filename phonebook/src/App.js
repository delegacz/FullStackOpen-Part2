import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('Click')
    const nameObject = {
      name: newName,
    }
    console.log(newName);
    console.log(persons);
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added`)
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => <Name key={i} person={person}/>)}
      </ul>
    </div>
  ) 

}
const Name = (props) => {
  return (
    <li>{props.person.name}</li>
  )
}
export default App
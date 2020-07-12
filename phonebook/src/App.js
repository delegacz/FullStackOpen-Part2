import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-2333-322' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('Click')
    const nameObject = {
      name: newName,
      number: newNumber
    }
    console.log(newName);
    console.log(persons);
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added`)
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/><br/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
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
  <li>{props.person.name} {props.person.number}</li>
  )
}
export default App
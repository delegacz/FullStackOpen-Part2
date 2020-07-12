import React, { useState } from 'react'
import AddPersonForm from './components/AddPersonForm'
import FilterPersonList from './components/FilterPersonList'
import FilterForm from './components/FilterForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')
  const [ newSearch, setNewSearch]=useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('Click')
    const nameObject = {
      name: newName,
      number: newNumber
    }
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
  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm newSearch={newSearch} handleSearch={handleSearch}/>
      
      <AddPersonForm  addName={addName}  
                      newName={newName} 
                      newNumber={newNumber} 
                      handleNameChange={handleNameChange} 
                      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        <FilterPersonList newSearch={newSearch} persons={persons}  />
      </ul>
    </div>
  ) 

}

export default App
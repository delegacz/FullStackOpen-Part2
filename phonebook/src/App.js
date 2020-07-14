import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddPersonForm from './components/AddPersonForm'
import FilterPersonList from './components/FilterPersonList'
import FilterForm from './components/FilterForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')
  const [ newSearch, setNewSearch]=useState('')

  const getDatafromServer = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }
  useEffect(getDatafromServer, [])
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
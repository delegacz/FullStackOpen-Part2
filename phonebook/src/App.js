import React, { useState, useEffect } from 'react'
import axios from 'axios'
import peopleService from './services/people'
import AddPersonForm from './components/AddPersonForm'
import FilterPersonList from './components/FilterPersonList'
import FilterForm from './components/FilterForm'
import Notification from './components/Notification'
import { getAllByAltText } from '@testing-library/react'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')
  const [ newSearch, setNewSearch]=useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const getDatafromServer = () => {
    peopleService
    .getAll().then(response => {
      setPersons(response)
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

    const updateNumberOfExistingPerson = (id) => {
      const person = persons.find(p => p.id === id)
      const updatedPerson = {...person, number: newNumber}
      peopleService
      .update(id, updatedPerson).then(updatedPerson => {
       setPersons(persons.map(person => person.id !== id ? person : updatedPerson))
       setNewName('')
       setNewNumber('')
       setMessage(`Number of ${person.name} was updated`)
       setTimeout(() => {setMessage(null)},5000)
     }).catch(error => {
       setErrorMessage(`${person.name} was already removed from server, Update wasn't sucessful`)
       setTimeout(() => {setErrorMessage(null)},5000)
     })
    }

    if(persons.some(person => person.name === newName)) {
        if(window.confirm(`${newName} is already added, replace the old number with new one? `)) {
          const foundperson = persons.find(p => p.name ===  newName)
          updateNumberOfExistingPerson(foundperson.id)
        }
    }
    else {
      peopleService
      .create(nameObject).then(response => { 
          console.log(response)
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          setMessage(`${response.name} with number ${response.number} was added sucessfully`)
          setTimeout(() => {setMessage(null)},5000)
        })
    }
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleDeleteRequest = (id) => {
      if(window.confirm('Are you sure you want to delete entry ID: ' + id )) {
        console.log(persons)
        peopleService
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== id))
            setNewName('');
            setNewNumber('');
            setMessage(`Deletion was sucessfully`)
            setTimeout(() => {setMessage(null)},5000)})
              .catch(error => {
              setErrorMessage(`Record with ${id} was already removed from server `)
              setTimeout(() => {setErrorMessage(null)},5000)
            })
      }
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
      <Notification message={message} errorMessage={errorMessage}/>
      <FilterForm newSearch={newSearch} handleSearch={handleSearch}/>
      <AddPersonForm  addName={addName}  
                      newName={newName} 
                      newNumber={newNumber} 
                      handleNameChange={handleNameChange} 
                      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        <FilterPersonList newSearch={newSearch} persons={persons} handleDeleteRequest={handleDeleteRequest} />
      </ul>
    </div>
  ) 
}

export default App
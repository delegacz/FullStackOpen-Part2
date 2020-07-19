import React from 'react'

const DisplayPersonsList = (props) => {
    return (
    <li key={props.person.id}> {props.person.name} {props.person.number} 
    <button value={props.person.id}  onClick={props.handleDeleteRequest}>delete</button>
    </li>
    )
}

export default DisplayPersonsList
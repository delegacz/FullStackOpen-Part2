import React from 'react'

const DisplayPersonsList = (props) => {
    return (
    <li>{props.person.name} {props.person.number}</li>
    )
}

export default DisplayPersonsList
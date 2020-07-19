import React from 'react'

const Notification = (props) => {
    if(props.message != null) {
      return (
        <>
          <div className="message">
            {props.message}
          </div>
        </>
      )}
    else if(props.errorMessage !=null) {
       return ( 
       <>
        <div className="error">
          {props.errorMessage}
        </div>
      </>)
    } else return (<></>)
  }

export default Notification
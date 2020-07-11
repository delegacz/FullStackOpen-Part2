import React from 'react'
import ReactDOM from 'react-dom'



const Course = ({course}) => {
    return (
      <div>
        {course.map((course,i) => 
          <>
            <Header key={i} course={course}/>
            <Content key={i} course={course}/>
          </>
      )}
      </div>
    )
    
  }
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    let exerciseValues = course.parts.map((part) => part.exercises)
    let sum = exerciseValues.reduce((sum, exerciseValues) => sum + exerciseValues,0 )
    
    return(
      <p>Number of exercises {sum} </p>
    ) 
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part} />)}
      <Total course={course}/>
      </div>
    )
  }

  export default Course
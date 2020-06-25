import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
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
      {course.parts.map((part) => <Part key={part.id} part={part} />
    )}
    <Total course={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1 
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
      {
        name: 'Node',
        exercises: 20,
        id: 5
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
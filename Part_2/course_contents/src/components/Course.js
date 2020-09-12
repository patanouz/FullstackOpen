import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {

  let total = course.parts.reduce((acc, {exercises}) => acc + exercises, 0)
 
  return(
    <p><b>Total of {total} exercises</b></p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      
        {course.parts.map(note =>
          <div key={note.id}>
            <Part part={note} />
          </div>
        )}

    </div>

  )
}

const Course = ({courses}) => {

  return (

    courses.map(course => 

    <div key={course.id}>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      
    </div> 
    )
  )
}

export default Course
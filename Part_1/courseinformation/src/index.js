import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  

  return (
    
    <div>
      <Header course={course}  />
      <Content parts={course} />
      <Total parts={course} />

      
      
    </div>
  )
}
//{props.partx.name} {props.partx.exercises}
const Header = (props) => {

  
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
  
  }


const Content = (props) => {
  

return (
  <div>
    <Part object={props.parts.parts[0]} />
    <Part object={props.parts.parts[1]} />
    <Part object={props.parts.parts[2]} />
  </div>
)

}

const Part = (props) => {

return (
  <div>
    {props.object.name} {props.object.exercises}
  </div>
)


}



const Total = (props) => {
  
  return (
    <div>
      <p>
        Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
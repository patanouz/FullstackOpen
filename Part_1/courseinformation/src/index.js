import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  

  return (
    
    <div>
      <Header course={course}  />
      <Content course={parts} />
     
      <Total array={parts} />

      
      
    </div>
  )
}
//{props.partx.name} {props.partx.exercises}
const Header = (props) => {

  
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
  
  }


const Content = (props) => {
  

return (
  <div>
    <Part object={props.course[0]} />
    <Part object={props.course[1]} />
    <Part object={props.course[2]} />
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
        Number of exercises {props.array[0].exercises + props.array[1].exercises + props.array[2].exercises}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
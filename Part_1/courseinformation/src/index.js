import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  

  return (
    
    <div>
      <Header course={course}  />
      <Content course={part1} />
      <Content course={part2} />
      <Content course={part3} />
      <Total array={[part1, part2, part3]} />

      
      
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
    <Part array={[props.course.name, props.course.exercises]} />
  </div>
)

}

const Part = (props) => {

return (
  <div>
    {props.array[0]} {props.array[1]}
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
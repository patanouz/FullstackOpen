import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    
    <div>
      <Header course={course}  />
      <Content array={[part1, exercises1, part2, exercises2, part3, exercises3]} />
      <Total array={[exercises1, exercises2, exercises3]} />

      
      
    </div>
  )
}

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
    <Part array={[props.array[0], props.array[1]]} />
    <Part array={[props.array[2], props.array[3]]} />
    <Part array={[props.array[4], props.array[5]]} />
    

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
        Number of exercises {props.array[0] + props.array[1] + props.array[2]}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
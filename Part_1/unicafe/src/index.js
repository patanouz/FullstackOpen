import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {

  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)

  return (

    <div>
      <h1>Give feedback</h1>
      <Buttons handleClick={() => setGood(Good + 1)} text="Good" />
      <Buttons handleClick={() => setNeutral(Neutral + 1)} text="Neutral" />
      <Buttons handleClick={() => setBad(Bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics Good={Good} Neutral={Neutral} Bad={Bad} />
    </div>
  )
}


const Buttons = (props) => {

  return (

    <Button text={props.text} handleClick={props.handleClick} />
  )
}

const Button = (props) => {

  return (

    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = ({ Good, Neutral, Bad }) => {

  if ((Good + Neutral + Bad) === 0) return (
    <div>
      No feedback given
    </div>
  )

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="Good" value={Good} />
          <Statistic text="Neutral" value={Neutral} />
          <Statistic text="Bad" value={Bad} />
          <Statistic text="All" value={Good + Neutral + Bad} />
          <Statistic text="Average" value={(Good - Bad) / (Good + Neutral + Bad)} />
          <Statistic text="Positive" value={(Good / (Good + Neutral + Bad)) * 100} percent=" %" />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = (props) => {
  return <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    <td>{props.percent}</td>
  </tr>
}


ReactDOM.render(<App props={''} />, document.getElementById('root'))
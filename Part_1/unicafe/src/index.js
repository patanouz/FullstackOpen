import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {

  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)

  return (

    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(Good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(Neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(Bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      Good {Good}<br />
      Neutral {Neutral}<br />
      Bad {Bad}<br />
      All {Good + Neutral + Bad}<br />
      Average {(Good - Bad) / (Good + Neutral + Bad)} <br />
      Positive {(Good / (Good + Neutral + Bad)) * 100} %<br />
    </div>
  )
}


const Button = (props) => {

  return (

    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


ReactDOM.render(<App props={''} />, document.getElementById('root'))
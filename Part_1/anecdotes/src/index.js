import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {setAnecdote(selected)}<br/>
      Has {votes[selected]} upvotes<br/>
      <button onClick={() => setVotes(upVote({votes, selected}))}>
        Upvote
      </button>
      <button onClick={() => setSelected(generateNumber)} >
        Next anecdote
      </button>
      <h1>Anecdote with the most upvotes</h1>
      {anecdotes[mostUpVotes(votes)]}<br/>
      Has {votes[mostUpVotes(votes)]} upvotes
    </div>
  )
}


const upVote = ({votes, selected}) => {
  const newVotes = [...votes] 
  newVotes[selected]++
  return newVotes
}


const mostUpVotes = (votes) => {
  const array = [...votes]
  let highest = 0;
  let i
  for(i = 0; i < array.length; i++) {
    if(array[i] > array[highest]) {
      highest = i
    }
  }

  return highest
}


const setAnecdote = (props) => anecdotes[props]


const generateNumber = () => Math.round(Math.random() * 5)


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
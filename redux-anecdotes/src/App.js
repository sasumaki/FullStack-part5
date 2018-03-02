import React from 'react'
let _ = require('lodash')

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const actionFor = {
  vote(id) {
    return {
      type: 'vote',
      data: { id }
    }
  },
  anecdoteCreation(content) {
    return {
      type: 'NEW_ANECDOTE',
      data: {
        content,
        id: generateId(),
        votes: 0
      }
    }
  }
}

class App extends React.Component {
  addAnecdote = e => {
    e.preventDefault()
    this.props.store.dispatch(actionFor.anecdoteCreation(this.input.value))
    this.input.value = ''
  }
  render() {
    const anecdotes = this.props.store.getState()
    console.log(anecdotes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {_.sortBy(anecdotes, a => -a.votes).map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() =>
                  this.props.store.dispatch(actionFor.vote(anecdote.id))
                }
              >
                vote
              </button>
            </div>
          </div>
        ))}
        <h2>create new</h2>
        <form>
          <div>
            <input ref={input => (this.input = input)} />
          </div>
          <button onClick={this.addAnecdote}>create</button>
        </form>
      </div>
    )
  }
}

export default App

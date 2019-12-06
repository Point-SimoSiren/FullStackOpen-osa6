import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={e => store.dispatch({ type: 'GOOD' })}>Good</button>
      <button onClick={e => store.dispatch({ type: 'NEUTRAL' })}>Neutral</button>
      <button onClick={e => store.dispatch({ type: 'BAD' })}>Bad</button>
      <button onClick={e => store.dispatch({ type: 'RESET' })}>Reset</button>

      <div>Good {store.getState().good}</div>
      <div>Neutral {store.getState().neutral}</div>
      <div>Bad {store.getState().bad}</div>
      <div>Feedbacks given{store.getState().total}</div>
      <div>Average {store.getState().avg}</div>
      <div>Positive share {store.getState().positiveShare}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
import React, { useEffect } from 'react'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { initAction } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'

const App = (props) => {
    useEffect(() => {
        props.initAction()
    }, [props])

    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <h1>Programming anecdotes</h1>
            <AnecdoteForm />
            <Notification />
            <AnecdotesList user={props.$whoami} />
        </div>
    )
}
export default connect(null, {
    initAction
})(App)
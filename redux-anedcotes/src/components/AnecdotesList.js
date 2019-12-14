import React from 'react'
import { connect } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationAction } from '../reducers/notificationReducer'

/* Listing component to show each anecdotes and to handle like button event
by sending the id to voteAction creator which calls axios based patch method in
services/anecdote and dispatches the VOTE to reducer to update the state.*/

const AnecdotesList = (props) => {
    const voteActionSubmit = (anecdote) => {
        props.voteAction(anecdote.id)
        console.log('submitissa:', anecdote.id, anecdote)
        const user = props.user
        props.notificationAction(`${user} liked <3 : ${anecdote.content}"`, 5)
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        <h5>_______________________________________________________________________________________________________________________________________________________________________________________</h5>
                        <h4>{anecdote.content}</h4>
                    </div>
                    <div>
                        {anecdote.votes} users has liked this anecdote. |
                        <button onClick={() => voteActionSubmit(anecdote)}>
                            L I K E </button>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        notification: state.notification
    }
}
const mapDispatchToProps = {
    voteAction,
    notificationAction
}
const connectedList = connect(mapStateToProps, mapDispatchToProps)(AnecdotesList)
export default connectedList
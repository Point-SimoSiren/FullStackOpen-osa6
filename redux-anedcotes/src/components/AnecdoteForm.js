import React from 'react'
import { connect } from 'react-redux'
import { createAction } from '../reducers/anecdoteReducer'
import { notificationAction } from '../reducers/notificationReducer'

/* Form component for showing add-form and sending form value to action creator
 called formAction in ../reducers/anecdoteReducer which calls axios based service and reducer
 to update the state to include the new anecdote added by user. */

const AnecdoteForm = (props) => {
    const submitToCreate = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        console.log('form submitissa: ', content)

        props.createAction(content)
        props.notificationAction(`You have successfully added a new Anecdote: ${content}`, 6)
    }
    return (
        <div style={{ background: 'darkorange' }}>

            <h3 style={{ padding: '10px', marginLeft: '30px', color: 'white' }}>
                Add your own peace of experience as an anecdote!
            </h3>

            <form onSubmit={submitToCreate}>
                <input placeholder='Type here...'
                    style={{ marginLeft: '30px', marginBottom: '20px', padding: '10px' }} name='anecdote'
                />
                <button style={{ padding: '10px' }} type="submit">S A V E</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    createAction,
    notificationAction
}
const connectedForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default connectedForm
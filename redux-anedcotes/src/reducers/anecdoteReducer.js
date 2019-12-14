import anecdotesService from '../services/anecdotes'

/* Reducer which receives dispatch actions from action creators located at the bottom
of this file and then decides how to update the application level state in redux store */

const anecdoteReducer = (state = [], action) => {
  let newState = [...state]
  switch (action.type) {

    case 'INITIALS':
      return action.payload
        .sort((upper, lower) => (upper.votes > lower.votes) ? -1 : 1)
    default: return state

    case 'CREATE':
      return newState.concat(action.payload)

    case 'VOTE':
      const id = action.payload.id
      const found = newState.findIndex((anecdote) => {
        return anecdote.id === id
      })
      newState[found].votes = newState[found].votes + 1
      newState = sorted(newState)
      return newState
  }
}

//------------------ACTION-CREATORS-------------------

export const createAction = submitted => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.create(submitted)
    dispatch({
      type: 'CREATE',
      payload: newAnecdote,
    })
  }
}

export const voteAction = (id) => {
  return dispatch => {
    anecdotesService.patchVotes(id)
    dispatch({
      type: 'VOTE',
      payload: {
        id: id
      }
    })
  }
}

export const initAction = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INITIALS',
      payload: anecdotes
    })
  }
}
const sorted = (anecdotes) => {
  return anecdotes.sort((upper, lower) => {
    return upper.votes > lower.votes
  })
}

export default anecdoteReducer
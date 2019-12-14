/* Reducer to give hard coded welcome message and to set and remove messages
in application level redux store state according to action type and payload data
sent from action creator at the bottom of this file. */

const notificationReducer = (state = 'Welcome to the world of programming anecdotes!', action) => {
    switch (action.type) {
        case 'SET':
            return action.payload.message
        case 'EMPTY':
            return null
        default:
            return state
    }
}
// ---------Action creator for notifications------

export const notificationAction = (message, duration) => {
    return dispatch => {
        dispatch({
            type: 'SET',
            payload: {
                message: message
            }
        })
        setTimeout(() => {
            dispatch({
                type: 'EMPTY'
            })
        }, duration * 1000)
    }
}
export default notificationReducer
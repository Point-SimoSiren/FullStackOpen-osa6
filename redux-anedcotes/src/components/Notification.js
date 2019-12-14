import React from 'react'
import { connect } from 'react-redux'

/* Component to show welcome message and notifications decided in other components user events through application level redux store state */

const Notification = (props) => {
  const notifyingStyle = {
    color: 'white',
    padding: 10,
    background: 'darkgreen'
  }

  const message = props.notification

  if (message) {
    return (
      <div style={notifyingStyle}>
        {props.notification}
      </div>
    )
  }
  else {
    return (<div></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}
const connectedNotification = connect(mapStateToProps)(Notification)
export default connectedNotification
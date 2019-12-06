const reseted = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0, //all feedback actions increase the count
  follow: 0, //follows ups(+) and downs(-)
  positiveShare: 0,
  avg: 0
}

const counterReducer = (state = reseted, action) => {
  let newState = { ...state }
  switch (action.type) {
    case 'RESET':
      newState = reseted
      break
    case 'GOOD':
      newState.good++
      newState.total++
      newState.follow++
      break
    case 'NEUTRAL':
      newState.neutral++
      newState.total++
      break
    case 'BAD':
      newState.bad++
      newState.total++
      newState.follow--
      break
    default:
      break
  }
  if (newState.follow !== 0) {
    newState.avg = newState.follow / newState.total
    newState.positiveShare = newState.good / newState.total
  }
  return newState
}

export default counterReducer
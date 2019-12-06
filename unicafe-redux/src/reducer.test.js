import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

// 5 test for reducer actions

describe('unicafe reducer', () => {
  const reseted = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    follow: 0,
    positiveShare: 0,
    avg: 0
  }

  //-------1------------------------------------

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(reseted)
  })

  //--------------2-----------------------------------------

  test('state reseted', () => {
    const action = {
      type: 'RESET'
    }
    const state = reseted

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      avg: 0,
      follow: 0,
      positiveShare: 0

    })
  })

  //---------------3--------------------------------

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = reseted

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      neutral: 0,
      bad: 0,
      total: 1,
      avg: 1,
      follow: 1,
      positiveShare: 1

    })
  })

  //-----------------------4-------------------------------

  test('neutral is incremented', () => {
    const action = {
      type: 'NEUTRAL'
    }
    const state = reseted

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      neutral: 1,
      bad: 0,
      total: 1,
      avg: 0,
      follow: 0,
      positiveShare: 0

    })
  })

  //--------------------------------------5------------------

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = reseted

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      neutral: 0,
      bad: 1,
      total: 1,
      avg: -1,
      follow: -1,
      positiveShare: 0

    })
  })

})
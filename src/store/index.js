import C from '../constants';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('travel days', store.getState().allTravelDays.length)

  let { allTravelDays, goal, errors, cityNames } = store.getState()

  console.log(`

    travel days: ${allTravelDays.length}
    goals: ${goal}
    fetching: ${cityNames.fetching}
    suggestions: ${cityNames.suggestions}
    errors: ${errors.length}

  `)
  console.groupEnd()

  return result

}

export default (initialState={}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}

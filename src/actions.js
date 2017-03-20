import C from './constants';
import fetch from 'isomorphic-fetch';

export function addDay(city, date, vacation=false, business=false) {

  return {
    type: C.ADD_DAY,
    payload: {city,date,vacation,business}
  }

}

export const removeDay = function(date) {
  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

export const setGoal = (goal) => ({
  type: C.SET_GOAL,
  payload: goal
})

export const addError = (message) => ({
  type: C.ADD_ERROR,
  payload: message
})

export const clearError = (index) => ({
  type: C.CLEAR_ERROR,
  payload: index
})

export const changeSuggestions = (suggestions) => ({
  type: C.CHANGE_SUGGESTIONS,
  payload: suggestions
})

export const clearSuggestions = () => ({
  type: C.CLEAR_SUGGESTIONS
})

export const randomGoals = () => (dispatch, getState) => {
  if (!getState().cityNames.fetching) {
    dispatch({
      type: C.FETCH_CITY_NAMES
    })

    setTimeout(() => {
      dispatch({
        type: C.CANCEL_FETCHING
      })
    }, 1500)
  }
}

export const suggestCityNames = value => dispatch => {
  dispatch({
    type: C.FETCH_CITY_NAMES
  })
  fetch('http://localhost:3333/cities/' + value)
}

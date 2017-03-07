import C from '../constants';

export const goal = (state=10, action) =>
  (action.type === C.SET_GOAL) ? parseInt(action.payload) : state

export const travelDay = (state=null, action) =>
  (action.type === C.ADD_DAY) ? action.payload : state

  export const errors = (state=[], action) => {

    switch(action.type) {
      case C.ADD_ERROR :
      	return [
           ...state,
           action.payload
      	]
      case C.CLEAR_ERROR :
        return state.filter((message, i) => i !== action.payload)
    	default:
    		return state
    }
  }

export const allTravelDays = (state=[], action) => {
  switch(action.type) {
    case C.ADD_DAY :
      const hasDay = state.some(travelDay => travelDay.date === action.payload.date)
      return (hasDay) ?
        state :
        [
          ...state,
          travelDay(null, action)
        ].sort((a, b) => new Date(b.date) - new Date(a.date))

        case C.REMOVE_DAY :
          return state.filter(travelDay => travelDay.date !== action.payload)
    default:
      return state
  }
}

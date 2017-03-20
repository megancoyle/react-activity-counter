import AddDayForm from '../ui/AddDayForm';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { addDay, suggestCityNames, clearSuggestions } from '../../actions';

const mapStateToProps = (state, props) => ({
  suggestions: state.cityNames.suggestions,
  fetching: state.cityNames.fetching,
  router: props.router
})

const mapDispatchToProps = dispatch => ({
  onNewDay({city, date, vacation, business}) {
    dispatch(
      addDay(city, date, vacation, business)
    )
  },
  onChange(value) {
    if (value) {
      dispatch(
        suggestCityNames(value)
      )
    } else {
      dispatch(
        clearSuggestions()
      )
    }

  },
  onClear() {
    dispatch(
      clearSuggestions()
    )
  }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)

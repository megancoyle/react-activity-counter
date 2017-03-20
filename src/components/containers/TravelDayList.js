import TravelDayList from '../ui/TravelDayList';
import { connect } from 'react-redux';
import { removeDay } from '../../actions';

const mapStateToProps = (state, props) => ({
  days: state.allTravelDays,
  filter: props.params.filter
})

const mapDispatchToProps = dispatch => ({
  onRemoveDay(date) {
    dispatch(
      removeDay(date)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TravelDayList);

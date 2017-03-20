import TravelDayCount from '../ui/TravelDayCount'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

	return {
		total: state.allTravelDays.length,
		vacation: state.allTravelDays.filter(day => day.vacation).length,
		business: state.allTravelDays.filter(day => day.business).length
	}

}

const Container = connect(mapStateToProps)(TravelDayCount)

export default Container

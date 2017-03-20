import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';
import TravelDayRow from './TravelDayRow';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import '../../stylesheets/TravelDayList.scss'

const TravelDayList = ({ days, filter, onRemoveDay=f=>f }) => {

    const filteredDays = (!filter || !filter.match(/vacation|business/)) ?
        days :
        days.filter(day => day[filter])

    const activeFilterStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className="travel-day-list">
            <table>
                <caption>double click to remove</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>City</th>
                    <th><MdFlight /></th>
                    <th><MdBusinessCenter /></th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days" style={(!filter) ? activeFilterStyle : null}>All Days</Link>
                        <Link to="/list-days/vacation" activeStyle={activeFilterStyle}>Vacation Days</Link>
                        <Link to="/list-days/business" activeStyle={activeFilterStyle}>Business Days</Link>
                    </td>
                </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) =>
                    <TravelDayRow key={i} {...day} onRemoveDay={onRemoveDay} />
                )}
                </tbody>
            </table>
        </div>
    )
}

TravelDayList.propTypes = {
    filter: PropTypes.oneOf(['vacation', 'business']),
    onRemoveDay: PropTypes.func,
    days: (props) => (!Array.isArray(props.days)) ?
        new Error("TravelDayList days property must be an array") :
        (!props.days.length) ?
            new Error("TravelDayList days array must contain at least one record") :
            null
}

export default TravelDayList

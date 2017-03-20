import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';
import { TravelDayRow } from './TravelDayRow';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import '../../stylesheets/TravelDayList.scss'

export const TravelDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/vacation|business/)) ?
  days:
  days.filter(day => day[filter])

  return (
    <div className="travel-day-list">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Travel</th>
          <th>Vacation</th>
          <th>Business</th>
        </tr>
        <tr>
          <td colSpan={4}>
            <Link to="list-days">
              All days
            </Link>
            <Link to="/list-days/vacation">
              Vacation Days
            </Link>
            <Link to="/list-days/business">
              Business Days
            </Link>
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredDays.map((day, i) =>
          <TravelDayRow key={i}
                        {...day} />
        )}
      </tbody>
    </table>
    </div>
  )
}

TravelDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error(
        "TravelDayList should be an array"
      )
    } else if(!props.days.length) {
      return new Error(
        "TravelDayList must have at least one record"
      )
    } else {
      return null
    }
  }
}

export default TravelDayList;

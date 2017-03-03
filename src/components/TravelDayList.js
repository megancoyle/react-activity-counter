import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';
import { TravelDayRow } from './TravelDayRow';
import { PropTypes } from 'react';

export const TravelDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Travel</th>
        <th>Vacation</th>
        <th>Business</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <TravelDayRow key={i}
                      {...day} />
      )}
    </tbody>
  </table>
)

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

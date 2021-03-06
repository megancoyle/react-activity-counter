import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'react';

const TravelDayRow = ({ city, date, vacation, business, onRemoveDay=f=>f }) =>
    <tr onDoubleClick={() => onRemoveDay(date)}>
        <td>
            {date}
        </td>
        <td>
            {city}
        </td>
        <td>
            {(vacation) ? <MdFlight /> : null }
        </td>
        <td>
            {(business) ? <MdBusinessCenter /> : null }
        </td>
    </tr>

TravelDayRow.propTypes = {
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    vacation: PropTypes.bool,
    business: PropTypes.bool,
    onRemoveDay: PropTypes.func
}

export default TravelDayRow

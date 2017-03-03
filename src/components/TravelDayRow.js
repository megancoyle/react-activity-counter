import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';

export const TravelDayRow = ({city, date, vacation, business}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>
      {city}
    </td>
    <td>
      {(vacation) ? <MdFlight/> : null}
    </td>
    <td>
      {(business) ? <MdBusinessCenter/> : null}
    </td>
  </tr>
)

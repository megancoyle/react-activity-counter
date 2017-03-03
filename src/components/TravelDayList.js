import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';
import { TravelDayRow } from './TravelDayRow';

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

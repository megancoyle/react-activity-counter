import { PropTypes } from 'react'
import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';
import '../../stylesheets/TravelDayCount.scss'

export const TravelDayCount = ({total=0, vacation=0, business=0}) => (
    <div className="travel-day-count">
      <div className="total-days">
        <span>{total}</span>
        <Calendar />
        <span>days</span>
      </div>
      <div className="vacation-days">
        <span>{vacation}</span>
        <MdFlight />
        <span>days</span>
      </div>
      <div className="business-days">
        <span>{business}</span>
        <MdBusinessCenter />
        <span>days</span>
      </div>
    </div>
)

TravelDayCount.propTypes = {
  total: PropTypes.number,
  vacation: PropTypes.number,
  business: PropTypes.number
}

export default TravelDayCount;

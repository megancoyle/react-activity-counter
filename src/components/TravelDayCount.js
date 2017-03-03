import '../stylesheets/ui.scss';
import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const TravelDayCount = ({total=70, vacation=18, business=20, goal=100}) => (
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
      <div>
        <span>
          {calcGoalProgress(
            total,
            goal
          )}
        </span>
      </div>
    </div>
)

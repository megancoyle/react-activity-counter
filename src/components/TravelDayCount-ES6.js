import { Component } from 'react'
import '../stylesheets/ui.scss'
import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdFlight from 'react-icons/lib/md/flight';
import Calendar from 'react-icons/lib/fa/calendar';

export class TravelDayCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
  render() {
    return (
      <div className="travel-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="vacation-days">
          <span>{this.props.vacation}</span>
            <MdFlight />
          <span>days</span>
        </div>
        <div className="business-days">
          <span>{this.props.business}</span>
            <MdBusinessCenter />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
}

TravelDayCount.defaultProps = {
  total: 50,
  vacation: 10,
  business: 15,
  goal: 70
}

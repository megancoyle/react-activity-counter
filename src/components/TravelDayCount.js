import React from 'react';
import '../stylesheets/ui.scss';

export const TravelDayCount = React.createClass({
  render() {
    return (
      <div className="travel-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="vacation-days">
          <span>2 days</span>
        </div>
        <div className="business-days">
          <span>1 day</span>
        </div>
      </div>
    )
  }
})

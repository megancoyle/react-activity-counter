import '../stylesheets/ui.scss';

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const TravelDayCount = ({total, vacation, business, goal}) => (
    <div className="travel-day-count">
      <div className="total-days">
        <span>{total}</span>
        <span>days</span>
      </div>
      <div className="vacation-days">
        <span>{vacation}</span>
        <span>days</span>
      </div>
      <div className="business-days">
        <span>{business}</span>
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

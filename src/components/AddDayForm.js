import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
  render() {
    const { city, date, vacation, business } = this.props
    return (
      <form className="add-day-form">
        <label htmlFor="city">City</label>
        <input id="city"
               type="text"
               required
               defaultValue={city}/>

        <label htmlFor="date">Date</label>
        <input id="date"
               type="date"
               required
               defaultValue={date}/>
        <div>
          <input id="vacation"
                 type="checkbox"
                 defaultChecked={vacation}/>
          <label htmlFor="vacation">Vacation</label>
        </div>
        <div>
          <input id="business"
                 type="checkbox"
                 defaultChecked={business}/>
          <label htmlFor="business">Business</label>
        </div>
      </form>
    )
  }
}

AddDayForm.defaultProps = {
  city: "DC",
  date: "2017-03-03",
  vacation: true,
  business: false
}

AddDayForm.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  vacation: PropTypes.bool.isRequired,
  business: PropTypes.bool.isRequired
}

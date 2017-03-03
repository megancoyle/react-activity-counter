import { PropTypes, Component } from 'react';

const usCities = [
  "Washington DC",
  "San Fran",
  "Seattle",
  "Boston",
  "Austin",
  "Baltimore"
]

class Autocomplete extends Component {
  get value() {
    return this.refs.inputCity.value
  }

  set value(inputValue) {
    this.refs.inputCity.value = inputValue
  }
  render() {
    return (
      <div>
        <input ref="inputCity"
               type="text"
               list="list-cities" />
        <datalist id="list-cities">
          {this.props.options.map(
            (opt, i) =>
            <option key={i}>{opt}</option>)}
        </datalist>
      </div>
    )
  }
}

export const AddDayForm = ({ city,
                             date,
                             vacation,
                             business,
                             onNewDay }) => {

  let _city, _date, _vacation, _business

  const submit = (e) => {
    e.preventDefault()
    onNewDay({
      city: _city.value,
      date: _date.value,
      vacation: _vacation.checked,
      business: _business.checked
    })
    _city.value = ''
    _date.value = ''
    _vacation.checked = false
    _business.checked = false
  }

  return (
    <form onSubmit={submit}
    className="add-day-form">

      <label htmlFor="city">
      City</label>
      <Autocomplete options={usCities}
             ref={input => _city = input} />

      <label htmlFor="date">Date</label>
      <input id="date"
             type="date"
             required
             defaultValue={date}
             ref={input => _date = input} />

      <div>
        <input id="vacation"
               type="checkbox"
               defaultChecked={vacation}
               ref={input => _vacation = input} />
        <label htmlFor="vacation">Vacation</label>
      </div>

      <div>
        <input id="business"
               type="checkbox"
               defaultChecked={business}
               ref={input => _business = input} />
        <label htmlFor="business">Business</label>
      </div>
      <button>Add Day</button>
    </form>
  )
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

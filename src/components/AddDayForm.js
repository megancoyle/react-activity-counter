import { PropTypes } from 'react';

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
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="city">City</label>
      <input id="city"
             type="text"
             required
             defaultValue={city}
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

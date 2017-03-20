import { PropTypes } from 'react'
import Autocomplete from './Autocomplete'
import '../../stylesheets/AddDayForm.scss'

const AddDayForm = ({ suggestions=[], onNewDay=f=>f, onChange=f=>f, onClear=f=>f, fetching=false, router}) => {

    let _city, _date, _vacation, _business

    const submit = e => {
        e.preventDefault()
        onNewDay({
            city: _city.value,
            date: _date.value.toString(),
            vacation: _vacation.checked,
            business: _business.checked
        })


        const addAnother = confirm(`${_city.value} on ${_date.value.toString()} added. Add another?`)

        if (!addAnother) {
            router.push('/')
        }

        _city.value = ''
        _date.value = ''
        _vacation.checked = false
        _business.checked = false

    }

    return (
        <form onSubmit={submit} className="add-day">

            <label htmlFor="date">Resort Name</label>

            <Autocomplete ref={input => _city = input}
                          suggestions={suggestions}
                          onChange={() => onChange(_city.value)}
                          fetching={fetching}
                          onClear={onClear}
            />

            <label htmlFor="date">Date</label>
            <input id="date"
                   type="date"
                   ref={input => _date = input}
                   required/>

            <div>
                <input id="vacation-day"
                       ref={input => _vacation = input}
                       type="checkbox"/>
                <label htmlFor="vacation-day">Vacation</label>
            </div>

            <div>
                <input id="business-day"
                       ref={input => _business = input}
                       type="checkbox"/>
                <label htmlFor="business-day">Business</label>
            </div>

            <button>Add Day</button>

        </form>
    )
}

AddDayForm.propTypes = {
    suggestions: PropTypes.array,
    onNewDay: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    router: PropTypes.object
}

export default AddDayForm

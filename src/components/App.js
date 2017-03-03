import { Component } from 'react'
import { TravelDayList } from './TravelDayList';
import { TravelDayCount } from './TravelDayCount';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allTravelDays: [
  			{
  				city: "DC",
  				date: "2016-09-02",
  				vacation: true,
  				business: false
  			}
  		]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allTravelDays: [
        ...this.state.allTravelDays,
        newDay
      ]
    })
  }

  countDays(filter) {
    const { allTravelDays } = this.state
    return allTravelDays.filter(
      (day) => (filter) ? day[filter] : day).length
  }

  render() {
    return (
      <div className="app">
      <Menu />
      {(this.props.location.pathname === "/") ?
          <TravelDayCount total={this.countDays()}
                      vacation={this.countDays("vacation")}
                      business={this.countDays("business")}/> :
        (this.props.location.pathname === "/add-day") ?
            <AddDayForm onNewDay={this.addDay} /> :
            <TravelDayList days={this.state.allTravelDays}
            filter={this.props.params.filter}/>
      }
      </div>
    )
  }
}

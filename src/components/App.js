import { Component } from 'react'
import { TravelDayList } from './TravelDayList';
import { TravelDayCount } from './TravelDayCount';
import { AddDayForm } from './AddDayForm';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allTravelDays: [
  			{
  				city: "DC",
  				date: new Date("3/5/2017"),
  				vacation: true,
  				business: false
  			},
  			{
  				city: "San Francisco",
  				date: new Date("1/5/2017"),
  				vactaion: false,
  				business: true
  			},
  			{
  				city: "Seattle",
  				date: new Date("2/5/2017"),
  				vacation: true,
  				business: false
  			}
  		]
    }
  }

  countDays(filter) {
    const { allTravelDays } = this.state
    return allTravelDays.filter(
      (day) => (filter) ? day[filter] : day).length
  }
  render() {
    return (
      <div className="app">
      {(this.props.location.pathname === "/") ?
          <TravelDayCount total={this.countDays()}
                      vacation={this.countDays("vacation")}
                      business={this.countDays("business")}/> :
        (this.props.location.pathname === "/add-day") ?
            <AddDayForm /> :
            <TravelDayList days={this.state.allTravelDays}/>
    }
      </div>
    )
  }
}

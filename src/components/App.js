import { createClass } from 'react'
import { TravelDayList } from './TravelDayList';
import { TravelDayCount } from './TravelDayCount';

export const App = createClass({
  getInitialState() {
    return {
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
  },
  countDays(filter) {
    const { allTravelDays } = this.state
    return allTravelDays.filter(
      (day) => (filter) ? day[filter] : day).length
  },
  render() {
    return (
      <div className="app">
        <TravelDayList days={this.state.allTravelDays}/>
        <TravelDayCount total={this.countDays()}
                        vacation={this.countDays("vacation")}
                        business={this.countDays("business")}/>
      </div>
    )
  }
})

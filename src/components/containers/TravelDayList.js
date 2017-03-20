import TravelDayList from '../ui/TravelDayList'

const sample = [
    {
    "city": "San Diego",
    "date": "2017-1-28",
    "vacation": false,
    "business": false
  },
  {
    "city": "DC",
    "date": "2017-1-31",
    "vacation": false,
    "business": true
  },
  {
    "city": "San Jose",
    "date": "2017-2-12",
    "vacation": true,
    "business": false
  }
]

export default (props) =>
    <TravelDayList days={sample}
                filter={props.params.filter}
                onRemoveDay={date => console.log('remove day on', date)} />

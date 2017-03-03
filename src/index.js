import React from 'react';
import { render } from 'react-dom';
import { TravelDayList } from './components/TravelDayList';

window.React = React

render(
	<TravelDayList days={
		[
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
	}/>,
	document.getElementById('react-container')
)

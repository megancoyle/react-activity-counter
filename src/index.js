import React from 'react';
import { render } from 'react-dom';
import { TravelDayCount } from './components/TravelDayCount';

window.React = React

render(
	<TravelDayCount />,
	document.getElementById('react-container')
)

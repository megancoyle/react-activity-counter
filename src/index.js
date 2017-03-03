import React from 'react';
import { render } from 'react-dom';
import { TravelDayCount } from './components/TravelDayCount';

window.React = React

render(
	<TravelDayCount total={50}
									vacation={20}
									business={10}
									goal={100}/>,
	document.getElementById('react-container')
)

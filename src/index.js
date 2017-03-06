import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import './stylesheets/index.scss';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';
import C from './constants';
import { travelDay } from './store/reducers'

const state = null

const action = {
	type: C.ADD_DAY,
	payload: {
		"city": "Washington DC",
		"date": "2016-12-16",
		"vacation": true,
		"business": false
	}
}

const nextState = travelDay(state, action)

console.log(`

    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}

`)

// window.React = React
//
// render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}/>
// 		<Route path="list-days" component={App} >
// 			<Route path=":filter" component={App} />
// 		</Route>
// 		<Route path="add-day" component={App} />
// 		<Route path="*" component={Whoops404}/>
// 	</Router>,
// 	document.getElementById('react-container')
// )

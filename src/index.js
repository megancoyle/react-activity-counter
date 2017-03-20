import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import './stylesheets/index.scss';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';
import C from './constants';
import storeFactory from './store';

const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}

const saveState = () => {
	const state = JSON.stringify(store.getState())
	localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"city": "San Diego",
		"date": "2016-10-28",
		"vacation": true,
		"business": false
	}
})

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"city": "DC",
		"date": "2016-05-28",
		"vacation": true,
		"business": false
	}
})

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"city": "Baltimore",
		"date": "2016-02-28",
		"vacation": true,
		"business": false
	}
})

// const state= [
// 	{
// 		"city": "DC",
// 		"date": "2016-13-15",
// 		"vacation": true,
// 		"business": false
// 	},
// 	{
// 		"city": "San Jose",
// 		"date": "2016-12-16",
// 		"vacation": false,
// 		"business": true
// 	}
// ]
//
// const action = {
// 	type: C.REMOVE_DAY,
// 	payload: "2016-12-16"
// }
//
// const nextState = allTravelDays(state, action)
//
// console.log(`
//
//     initial goal: ${JSON.stringify(state)}
//     action: ${JSON.stringify(action)}
//     new goal: ${JSON.stringify(nextState)}
//
// `)

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

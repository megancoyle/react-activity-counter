import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import './stylesheets/index.scss';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';
import C from './constants';
import { goal } from './store/reducers'

const state = 10

const action = {
	type: C.SET_GOAL,
	payload: 15
}

const nextState = goal(state, action)

console.log(`

    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}

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

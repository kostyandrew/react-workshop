import React, { Component } from 'react';
import './App.css';

import Home from "./components/Home";
import Films from "./components/Films";
import Film from "./components/Film";
import NoMatch from "./components/NoMatch";

import {
	Route,
	Switch
} from 'react-router-dom'

class Routes extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/films" exact component={Films}/>
					<Route path="/films/:id" exact component={Film}/>
					<Route component={NoMatch} />
				</Switch>
			</div>
		);
	}
}

export default Routes;

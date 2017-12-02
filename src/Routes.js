import React, { Component } from 'react';
import './App.css';

import Home from "./components/Home";

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
					<Route render={() => "404"} />
				</Switch>
			</div>
		);
	}
}

export default Routes;

import React, { Component } from 'react';
import './App.css';

import Home from "./components/Home";
import Films from "./components/Films";

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
					<Route render={() => "404"} />
				</Switch>
			</div>
		);
	}
}

export default Routes;

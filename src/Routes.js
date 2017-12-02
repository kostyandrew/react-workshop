import React, { Component } from 'react';

import Home from "./components/Home";
import Nav from "./components/Nav";
import Films from "./components/Films";
import People from "./components/People";
import Film from "./components/Film";
import Hero from "./components/Hero";
import NoMatch from "./components/NoMatch";

import {
	Route,
	Switch
} from 'react-router-dom'

class Routes extends Component {
	render() {
		return (
			<div>
				<Nav/>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/films" exact component={Films}/>
					<Route path="/films/:id" exact component={Film}/>
					<Route path="/people" exact component={People}/>
					<Route path="/people/:id" exact component={Hero}/>
					<Route component={NoMatch} />
				</Switch>
			</div>
		);
	}
}

export default Routes;

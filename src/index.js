import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

import rootReducer from "./reducers/index";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import {
	BrowserRouter as Router,
} from 'react-router-dom'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);


ReactDOM.render(
	<Provider store={store}>
		<Router basename="/">
			<Routes />
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();

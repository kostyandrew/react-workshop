import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import {
	BrowserRouter as Router,
} from 'react-router-dom'

ReactDOM.render(<Router basename="/"><Routes /></Router>, document.getElementById('root'));
registerServiceWorker();

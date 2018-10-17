import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './Home.js';
import Portfolio from './Portfolio.js';
import Projects from './Projects.js';
import DnD from './DnD.js';
import Tutorials from './Tutorials.js';
import Login from './Login.js';
import CreateAccount from './CreateAccount.js';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path = '/' exact component = {Home} />
			<Route path = '/portfolio' exact component = { Portfolio } />
			<Route path = '/projects' exact component = { Projects } />
			<Route path = '/dnd' exact component = { DnD } />
			<Route path = '/tutorials' exact component = { Tutorials } />
			<Route path = '/login' exact component = { Login } />
			<Route path = '/create-account' exact component = { CreateAccount } />
		</Switch>
	</BrowserRouter>
	);
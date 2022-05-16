import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './Error';
import FormHome from './Form';
import Userinfo from './Form/userinfo';
import {Home} from './home';
import Navbar from './Navbar';

export default function App(params) {
	return(
		<>
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					
					<Route exact path="/users">
						<FormHome/>
					</Route>

					<Route path="/users/:i" children={<Userinfo/>}></Route>

					<Route path="*">
						<Error/>
					</Route>
				</Switch>
			</Router>
		</>
	)
};

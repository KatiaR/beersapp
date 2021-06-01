import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CardDescription } from './components/CardDescription';
import { SearchBox } from './components/SearchBox';
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Switch>
				<Route path="/">
					<SearchBox />
				</Route>
				<Route path="/beers/:id"></Route>
			</Switch>
		</div>
	);
}

export default App;

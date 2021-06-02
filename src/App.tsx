import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SearchBox } from './components/SearchBox';
import { ContentBox } from './components/ContentBox';
import styles from './App.module.scss';
import { CardDescription } from './components/CardDescription';

function App() {
	return (
		<div className={styles.app}>
			<Switch>
				<Route path="/beers.com" exact>
					<SearchBox />
					<ContentBox />
				</Route>
				<Route path="/beers.com/:id">
					<CardDescription />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

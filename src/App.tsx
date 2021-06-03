import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { SearchBox } from './components/SearchBox';
import { ContentBox } from './components/ContentBox';
import styles from './App.module.scss';
import { CardDescription } from './components/CardDescription';

function App() {
	return (
		<div className={styles.app}>
			<Switch>
				<Route path="/beers/:id">
					<CardDescription />
				</Route>
				<Route
					path="/:page"
					component={(
						props: RouteComponentProps<{ page: string }>
					) => (
						<div key={props.match.params.page}>
							<SearchBox />
							<ContentBox />
						</div>
					)}
				/>
				<Redirect from="/" to="/1" />
			</Switch>
		</div>
	);
}

export default App;

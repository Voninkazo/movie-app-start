import React from 'react';
import "./App.css";
import MoviesList from './MoviesList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetails from './MovieDetails';

export default function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/movie/:id">
						<MovieDetails/>
					</Route>
					<Route path="/">
						<MoviesList/>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

// function App() {
// 	return (<div className="App">
// 	<header className="App-header">
// 	  <Counter/>
// 	  <Accordion/>
// 	  <Input/>
// 	  <HelloWorld name=" Sandy" greeting="Salama"/>
// 	  <HelloWorld name=" Sandy"/>
// 	</header>
//   </div>);
// }

// function HelloWorld({name, greeting="Hello"}) {
// 	return <h1> Hello {greeting, name}</h1>
//   }

//   HelloWorld.propTypes ={
// 	name: PropTypes.string,
// 	greeting: PropTypes.string
//   }

// export default App;

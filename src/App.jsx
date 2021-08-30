import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/landingPage';
import PreOrder from './LandingPage/preorder';

function App() {
	return (
		<div className="App">
			<switch>
				<Route exact path="/" component={LandingPage} /> 
				<Route exact path="/preorder" component={PreOrder} />{' '}
			</switch>{' '}
		</div>
	);
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Topics from './components/Topics.jsx';
function App() {
	return (
		<div className='App'>
			<Header>NC News</Header>
			<Topics></Topics>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;

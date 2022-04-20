import './App.css';
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles.jsx';
import Header from './components/Header.jsx';
import Topics from './components/Topics.jsx';

function App() {
	return (
		<div className='App'>
			<Header>NC News</Header>
			<Topics></Topics>
			<main>
				<Routes>
					<Route path='/' element={<Articles />}></Route>
					<Route path='/articles' element={<Articles />}></Route>
					<Route path='/articles/:topic' element={<Articles />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;

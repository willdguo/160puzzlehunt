import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
// import AlphabetPage from './components/AlphabetPage';
import HomePage from './components/HomePage';
import ReciPage from './components/ReciPage';
import GuessTA from './components/GuessTA';
import ChessPage from './components/ChessPage';

export default function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact
						path="/"
						element={<HomePage />} />
				  {/* <Route exact
						path="/alphabet"
						element={<AlphabetPage />} /> */}
          <Route exact
						path="/reci"
						element={<ReciPage />} />
          <Route exact
						path="/160v1"
						element={<GuessTA />} />
          <Route exact
						path="/chess"
						element={<ChessPage />} />
          <Route path="*" element={<HomePage/>}/>
				</Routes>
			</Router>
		</div>
	);

}

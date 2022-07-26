import React from 'react';
import './App.css';
import { usersData } from './raw-data';
import UsersPage from './components/UsersPage';

export default function App() {
	return (
		<div className="App">
			<UsersPage users={usersData} />
		</div>
	)
}

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './Pages/admin_page';
import Form_cont from './Component/form_cont/Form_cont';
import Form_conts from './Component/form_conts/Form_conts';
import HomePage from './Pages/homepage';
import Login from './Component/login_page/login';
import Submitted from './Component/submitted/Submitted';
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/buy" element={<Form_cont />} />
				<Route path="/sell" element={<Form_conts />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/success' element={<Submitted />} />
			</Routes>
		</Router>
	);
}

export default App;

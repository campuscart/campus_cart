import React from 'react';
import AdminPanel from '../Component/AdminPanel/AdminPanel';
import NavBar from './nav';

function AdminPage() {
	return (
		<div style={{ textAlign: 'center' }}>
			<div
				style={{
					backgroundColor: '#282c34',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '18px',
					color: 'white'
				}}
			>
				<NavBar />
				<AdminPanel />
			</div>
		</div>
	);
}

export default AdminPage;

import React from 'react';
import AdminPanel from '../Component/AdminPanel/AdminPanel';
import Navbar from '../Component/HomePage/Navbar/Navbar';
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
				<Navbar />
				<AdminPanel />
			</div>
		</div>
	);
}

export default AdminPage;

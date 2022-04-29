import React from 'react';
import Navbar from '../Component/HomePage/Navbar/Navbar';
import Welcome from '../Component/HomePage/Welcome/Welcome';
import HeroSection from '../Component/HomePage/Hero/Hero-Section';
import FAQ from '../Component/HomePage/FAQs/FAQ';
import SimpleSlider from '../Component/HomePage/Carousel/Carousel';

function HomePage() {
	return (
		<>
			<Navbar />
			<Welcome />
			<HeroSection />
			<SimpleSlider />
			<FAQ />
			<div
				style={{
					width: '100%',
					height: '5rem',
					backgroundColor: '#232322'
				}}
			></div>
		</>
	);
}

export default HomePage;

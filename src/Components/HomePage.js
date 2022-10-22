import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const HomeStyle = {
    width: "100%",
	height: "100vh",
}

export default function HomePage () {
	return (
		<div style={HomeStyle}>
			<Header />

			<Content />
			
			<Footer />
		</div>
	)
}
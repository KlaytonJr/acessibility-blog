import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import LupeAccessibility from './LupeAccessibility';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components'
import normalFont from '../styles/themes/normalFont';
import biggerFont from '../styles/themes/biggerFont';

const HomeStyle = {
    width: "100%",
	height: "100vh",
}

export default function HomePage () {
    const [sizes, setSizes] = useState(normalFont);

    const toggleSize = () => {
        console.log("Click");
        setSizes(sizes.title === 'normal' ? biggerFont : normalFont);
    };

	return (
		<ThemeProvider theme={sizes}>
            <div style={HomeStyle}>
                <GlobalStyle />
                
                <Header />

                <Content />
                
                <Footer />

                <LupeAccessibility toggleSize={toggleSize} sizes={sizes} />
            </div>
		</ThemeProvider>
	)
}
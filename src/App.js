import RouterDOM from './Router';

import React, { useState } from 'react';
import LupeAccessibility from './Components/LupeAccessibility';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import normalFont from './styles/themes/normalFont';
import biggerFont from './styles/themes/biggerFont';
import Footer from './Components/Footer';

const AppStyle = {
    height: "100vh",
    width: "100%",
}

function speechText(e) {  
    let leitura = "";
    let divsPermitidas = ["P","H1", "H2", "H3", "SPAN", "IMG"];
    let tagName = e.target.tagName;
    let valor = e.target.innerText;

    if(divsPermitidas.includes(tagName) && (leitura !== valor || tagName === "IMG")){
        leitura = valor;


        if (tagName === "IMG") {
        leitura = e.target.alt;
        }
        
        console.log(leitura);
        
        const utterance = new SpeechSynthesisUtterance(leitura);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);

        return;
    };
}

var delay = function (elem, time) {
    var timeout = null;
    elem.onmouseover = function(e) {
        // Set timeout to be a timer which will invoke callback after 1s
        timeout = setTimeout(() => {
        speechText(e)
        }, time);
    };

    elem.onmouseout = function() {
        // Clear any timers set to timeout
        clearTimeout(timeout);
    }
};

delay(document, 2000);

function App() {
    const [sizes, setSizes] = useState(normalFont);

    const toggleSize = () => {
        console.log("Click");
        setSizes(sizes.title === 'normal' ? biggerFont : normalFont);
    };
    return (
        <ThemeProvider theme={sizes}>
            <div style={AppStyle}>
                <GlobalStyle />

                <RouterDOM />

                <Footer />

                <LupeAccessibility toggleSize={toggleSize} sizes={sizes} />
            </div>
        </ThemeProvider>
    );
}

export default App;

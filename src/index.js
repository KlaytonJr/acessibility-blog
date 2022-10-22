import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterDOM from './Router';

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

delay(document, 1000);

ReactDOM.render(
  <React.StrictMode>
    <RouterDOM />
  </React.StrictMode>,
  document.getElementById('root')
);

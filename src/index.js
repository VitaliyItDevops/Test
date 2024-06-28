import React from 'react';
import { createRoot } from 'react-dom/client'; 
import HomePage from './component/HomePage'
import Coins from './component/CoinsHomePage'

import Image from './component/Image'
import './css/HomePageStile.css'
// import logo from './img/logo192.png'

// const inputClick = () => console.log("Clicked"); 
// const mouseOver = () => console.log("Mouse Over"); 

// const helpText = "Help Text"; 


{/* <HomePage />
      <h1>{helpText}</h1>
      <input placeholder={helpText} onClick={inputClick} onMouseOver={mouseOver} />
      <p>{helpText === "Help Text!" ? "Yes" : "No"}</p>
      <Image image={logo}/> */}

const App = () => {
  return (
    <div className="name">
      <HomePage/>
      <Coins/>
    </div>);
};

const app = createRoot(document.getElementById('app')); 

app.render(<App />); 
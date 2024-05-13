import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"; 
import About from "./pages/About"; 
import Layout from "./pages/Layout"
import Erbjudanden from './pages/Erbjudanden';
import Privatperson from './pages/Privatperson';
import Yrkesperson from './pages/Yrkesperson';
import English from './pages/English';

export default function App() {   
  return (     
    <BrowserRouter>      
      <Routes>         
        <Route path="/" element={<Layout />}>           
        <Route index element={<Home />} />           
        <Route path="Om mig" element={<About />} />              
        <Route path="Mitt utbud" element={<Erbjudanden />} />
        <Route path="Kontakt" element={<Contact />} /> 
        <Route path="Inspelade övningar" element={<Contact />} /> 
        <Route path="Mitt utbud/privatperson" element={<Privatperson />} />
        <Route path="Mitt utbud/yrkesperson" element={<Yrkesperson />} />
        <Route path="Mitt utbud/english" element={<English />} />
        </Route>       
      </Routes>     
    </BrowserRouter>   
  ); 
} 
//ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

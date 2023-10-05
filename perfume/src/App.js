import React from 'react';
import './styles.css';
import Navbar from './components/navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';

function Home() {
  return (
    <div>
      
      <div className="container">
        <h1> Paris Perfume Outlet</h1>
        <h2>Welcome!</h2>
        <h3>Bienvenidos!</h3>
        <img src="paris.png" alt="Background images" id="heroImage"/>
      </div>
    </div>
  );
}



function About() {
  return <h2>About Us Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

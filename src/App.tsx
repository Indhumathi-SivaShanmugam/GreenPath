import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import './App.css';
import SecondaryNavbar from './components/SecondaryNavbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <SecondaryNavbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<div style={{padding:'4rem',textAlign:'center'}}><h1>Welcome to Walmart</h1><p>This is the main homepage. Click Greenpath in the navigation to explore eco-friendly products!</p></div>} />
            <Route path="/greenpath" element={<HomePage />} />
            <Route path="/greenpath/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 
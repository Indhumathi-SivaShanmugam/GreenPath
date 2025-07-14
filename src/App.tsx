import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import './App.css';
import SecondaryNavbar from './components/SecondaryNavbar';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <SecondaryNavbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 
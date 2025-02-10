import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/contact";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';

function App() {
  return (
    <Router>
      <Header />
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop-details' element={<ShopDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

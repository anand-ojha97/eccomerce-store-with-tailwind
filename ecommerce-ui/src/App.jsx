import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeroBanner from "./components/Banner/HeroBanner";
import YellowBanner from "./components/Banner/YellowBanner";
import Fact from "./components/Fact/Fact";
import DiscountFeatures from "./components/Features/DiscountFeatures";
import HomeFeatures from "./components/Features/HomeFeatures";
import Footer from "./components/Footer/Footer";
import FruitShop from "./components/Fruits Shop/FruitShop";
import Header from "./components/Header/Header";
import Bestseller from "./components/Seller/Bestseller";
import Testimonial from "./components/Sliders/Testimonial";
import VegitableShop from "./components/Sliders/VegitableShop";
import Contact from "./pages/contact";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

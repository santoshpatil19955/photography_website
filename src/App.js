import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import Service from "./pages/Service";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import the page
import "./styles/styles.css";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<Service />} /> 
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;

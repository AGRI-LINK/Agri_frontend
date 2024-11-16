import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './components/Profile'
import Messaging from './pages/Messaging'
import Login from './components/Login'
import Map from './pages/Map'
import Payment from './pages/Payment'
import Notifications from './components/Notifications'
import ReviewAndRating from './components/ReviewAndRating'
import Register from './components/Register'
import ProductCard from './pages/products/ProductCard'
import ProductListing from './pages/products/ProductListing'
import ProductDetails from './pages/products/ProductDetails'
import AddProduct from './pages/products/AddProduct'
import ShoppingCart from './pages/buyer/ShoppingCart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import BuyerDashboard from './pages/buyer/BuyerDashboard'
import Contact from './pages/Contact'
import Sidebar from './pages/farmer/Sidebar'
import EditProfile from './components/EditProfile'



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing addItemToCart={addItemToCart} />} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/farmer" element={<Sidebar/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messaging />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/review" element={<ReviewAndRating />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/buyer" element={<BuyerDashboard /> } />
        <Route path="/addproduct" element={<AddProduct /> } />
        <Route path="/editprofile" element={<EditProfile /> } />
        <Route path="/card" element={<ProductCard /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

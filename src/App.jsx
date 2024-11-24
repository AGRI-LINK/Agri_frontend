import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';
import Messaging from './pages/Messaging';
import Login from './components/Login';
import Map from './pages/Map';
import Payment from './pages/Payment';
import Notifications from './components/Notifications';
import ProductCard from './pages/products/ProductCard';
import ProductListing from './pages/products/ProductListing';
import ProductDetails from './pages/products/ProductDetails';
import AddProduct from './pages/products/AddProduct';
import ShoppingCart from './pages/buyer/ShoppingCart';
import Contact from './pages/Contact';
import BuyerDashboard from './pages/buyer/BuyerDashboard';
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import EditProfile from './components/EditProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RootLayout from './layouts/RootLayout';
import ReviewAndRating from './components/ReviewAndRating';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import OrderHistory from './pages/orders/OrderHistory';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout cartItemCount={cartItems.length} />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "regist",
          element: <Register />
        },
        {
          path: "privacy",
          element: <PrivacyPolicy />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "products",
          element: <ProductListing addItemToCart={addItemToCart} />
        },
        {
          path: "products/:id",
          element: <ProductDetails />
        },
        {
          path: "cart",
          element: <ShoppingCart
            cartItems={cartItems}
            removeItemFromCart={removeItemFromCart}
          />
        }
      ]
    },
    {
      path: "/messages",
      element: <Messaging />
    },
    {
      path: "/notifications",
      element: <Notifications />
    },
    {
      path: "/farmer",
      element: <FarmerDashboard />,
      children: [
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "addproduct",
          element: <AddProduct />
        },
        
        {
          path: "card",
          element: <ProductCard />
        },
        {
          path: "edit",
          element: <EditProfile />
        }
      ]
    },
    {
      path: "/buyerdashboard",
      element: <BuyerDashboard />,
      children: [
        {
          // path: "/buyerdashboard/",
          index: true,
          element: <Dashboard />
        },
        {
          path: "products",
          element: <ProductListing />
        },
        {
          path: "cart",
          element: <ShoppingCart />
        },
        {
          path: "wishlist",
          element: <Profile />
        },
        {
          path: "messages",
          element: <Messaging />
        },
        
        {
          path: "reviews",
          element: <ReviewAndRating />
        },
        {
          path: "orderhist",
          element: <OrderHistory />
        },
        {
          path: "map",
          element: <Map />
        },
        {
          path: "payment",
          element: <Payment />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
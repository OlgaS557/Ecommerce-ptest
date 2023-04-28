import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ProfilePage from './Pages/ProfilePage';
import SignInPage from './Pages/SignInPage';
import BlogsPage from './Pages/BlogsPage';
import BlogPage from './Pages/BlogPage';
import ReturnOfGoods from './Pages/ReturnOfGoods';
import AddProduct from './Pages/AddProduct';

// import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


import './scss/styles.scss';
import './css_modules/products.module.css';




function App() {
  return (
    <div className='container'>
      {/* <NavBar/> */}
      
        <Routes>
            <Route path="/" element={ <HomePage />}/>
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/products/id" element={<ProductPage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/checkout" element={<CheckoutPage />}/>
            <Route path="/add-product" element={<AddProduct />}/>
            <Route path="/profile" element={<ProfilePage />}/>
            <Route path="/blogs" element={<BlogsPage />}/>
            <Route path="/blogs/:id" element={<BlogPage />}/>
            <Route path="/blogs/:id" element={<BlogPage />}/>
            <Route path="/returns" element={<ReturnOfGoods />}/>
            <Route path="/login" element={<SignInPage />}/>
          </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

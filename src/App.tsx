import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ProfilePage from './Pages/ProfilePage';
import LogInPage from './Pages/LogInPage';
import RegisterPage from './Pages/RegisterPage';
import BlogsPage from './Pages/BlogsPage';
import BlogPage from './Pages/BlogPage';
import ReturnOfGoods from './Pages/ReturnOfGoods';
import AddProduct from './Pages/AddProduct';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './scss/styles.scss';
import './css_modules/products.module.css';


const routes = [
  {
    path: '/products',
   element: <ProductsPage />
  },
]

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Routes>
        {/* {routes.map((item, key) => {
          return   <Route key={key} path={item.path} element={item.element} />
        })} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:menu" element={<ProductsPage />} />
        <Route path="/products/id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/returns" element={<ReturnOfGoods />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

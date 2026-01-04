import HomePage from '../Pages/HomePage';
import ProductsPage from '../Pages/ProductsPage';
import ProductPageId from '../Pages/ProductPageId';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import ProfilePage from '../Pages/ProfilePage';
import LogInPage from '../Pages/LogInPage';
import RegisterPage from '../Pages/RegisterPage';
import BlogsPage from '../Pages/BlogsPage';
import BlogPage from '../Pages/BlogPage';
import ReturnOfGoods from '../Pages/ReturnOfGoods';
import AddProduct from '../Pages/AddProduct';
import NotFoundPage from '../Pages/NotFoundPage';

export const routes = [
    {path:"/", element:<HomePage />},
    {path:"/products/:menu", element:<ProductsPage />},
    {path:"/products/:menu/:id", element:<ProductPageId />},
    {path:"/cart", element:<CartPage />},
    {path:"/checkout", element:<CheckoutPage />},
    {path:"/add-product", element:<AddProduct />},
    {path:"/blogs", element:<BlogsPage />},
    {path:"/blogs/:id", element:<BlogPage />},
    {path:"/returns", element:<ReturnOfGoods />},
    {path:"/login", element:<LogInPage />},
    {path:"/signup", element:<RegisterPage />},
    {path:"/profile", element:<ProfilePage />},
    {path:"*", element: <NotFoundPage />},

]

// export const privateRoutes = [
//     {path:"/", element:<HomePage />},
//     {path:"/products/:menu", element:<ProductsPage />},
//     {path:"/products/:menu/:id", element:<ProductPageId />},
//     {path:"/cart", element:<CartPage />},
//     {path:"/checkout", element:<CheckoutPage />},
//     {path:"/add-product", element:<AddProduct />},
//     {path:"/blogs", element:<BlogsPage />},
//     {path:"/blogs/:id", element:<BlogPage />},
//     {path:"/returns", element:<ReturnOfGoods />},
//     {path:"/profile", element:<ProfilePage />},
    
// ]

// export const publicRoutes = [
//     {path:"/", element:<HomePage />},
//     {path:"/products/:menu", element:<ProductsPage />},
//     {path:"/products/:menu/:id", element:<ProductPageId />},
//     {path:"/cart", element:<CartPage />},
//     {path:"/login", element:<LogInPage />},
//     {path:"/signup", element:<RegisterPage />},
//     {path:"/profile", element:<ProfilePage />},
// ]
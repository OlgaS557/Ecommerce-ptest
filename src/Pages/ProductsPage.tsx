import {FC} from 'react';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';
import Subscribe from '../components/Subscribe';


const ProductPage:FC = () => {



    return (
        <div >
            <NavBar />
            <Products/>
            <Subscribe/>
        </div>
    )
}

export default ProductPage;
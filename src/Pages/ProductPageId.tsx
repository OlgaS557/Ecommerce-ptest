import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPageId = () => {
    const {id} = useParams();
    //console.log('id', id);
    
  return (
    <div>
        <h1>id: {id}</h1>
    </div>
  )
}

export default ProductPageId;
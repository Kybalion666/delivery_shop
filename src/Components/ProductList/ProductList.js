import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ProductItem from '../ProductItem/ProductItem.js';
import { Context } from '../../index.js';
import './ProductList.css';


const ProductList = observer(() => {
  const { product, basket } = useContext(Context);


  return (
    <div className='containerproductlist'>
        {product.products.map((product) => (
          <div
            className='productlist'
            key={product.id}
            md={3}
          >
            <ProductItem product={product} />
          </div>
        ))}
        
      
    </div>
  );
});

export default ProductList;

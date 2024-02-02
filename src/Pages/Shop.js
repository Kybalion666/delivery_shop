import React, { useContext, useEffect } from 'react'
import ProductList from '../Components/ProductList/ProductList.js'
import { fetchProduct } from '../http/productAPI.js'
import { observer } from 'mobx-react-lite'
import { Context } from '../index.js'

 export const Shop = observer(() => {
  const {product} = useContext(Context)

  useEffect( () =>{
    fetchProduct().then(data => product.setProduct(data))
  },[])
  return (
    <ProductList/>
  )
})


import React from 'react'
import { products } from '../data'
import { SingelProduct } from './SingelProduct';

export const Products = () => {
console.log(products);

  return (
    <div className="container">
    <div className='d-flex justify-content.center gap-3 flex-wrap bg-light'>
      <h3 className='w-100 m-2'></h3> 
      {products.map(obj=><SingelProduct key={obj.id} {...obj}/>)}
    </div>
    </div>
  )
}


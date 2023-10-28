import React from 'react'
import {PRODUCTS} from '../../products';
import {Product} from './Product';
import './Shop.css';


function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Shop right here</h1>
      </div>
      <div className='products'>
{PRODUCTS.map((items)=>(
  <Product data={items}/>
)
)}
      </div>
    </div>
  )
}

export default Shop

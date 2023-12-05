import React, { useContext } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';
import { ShopContext } from '../context/ShopContext';



export default function Navbar() {

  const {increaseCount} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='links'>
<Link to='/'>Shop</Link>
<div className='iconSpan'>
<Link to='/cart'>
    <ShoppingCart size={32}/>
</Link>
<span style={{marginBottom:"3px", color:'white'}}>{increaseCount()}</span>
</div>
      </div>
    </div>
  )
}

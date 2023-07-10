import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const item = useSelector((state)=>state.cart);
  return (
    <>
    <div className='sticky top-0 z-10 bg-white text-green border-b grid grid-cols-2 gap-24 py-4 pl-12'>
        <div className='font-bold text-xl'>Global Mart</div>
        <div className='pl-12 flex gap-4 font-medium'>
            <Link to="/">Home</Link>
            <Link to ='/home'>Shop Now</Link>
            <Link to ='/cart'>Cart</Link>
            <div>Cart item : {item.length}</div>
        </div>
    </div>
    </>
  )
}

export default Navbar
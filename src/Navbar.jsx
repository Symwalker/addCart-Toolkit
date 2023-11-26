import React from 'react'
import { BiSolidShoppingBag } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const tottalItem = useSelector(state=>state.cart.cart.length)
    console.log(tottalItem);
  return (
    <div className='bg-gray-300 py-2 px-3 text-black flex justify-between'>
        <div>My logo</div>
        <Link to={'/'}><div className='flex border-black border p-2 rounded-lg'>All Products</div></Link>
        <Link to={'/cart'}>
        <div className='flex'><BiSolidShoppingBag size={30} color='purple'/> <span className='relative right-2 bottom-2 text-green-purple'>{tottalItem}</span></div>
        
        </Link>
      
    </div>
  )
}

export default Navbar

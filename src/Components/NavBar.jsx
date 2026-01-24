import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/user.png'

export default function NavBar() {
  return (
    <div className='bg-[#0F766E] flex justify-between items-center px-5'>
      <div className=''>
        <img src={Logo} alt="" width='60PX'/>
      </div>
      <div className='flex'>
         

        <div className="relative group">
          <span className="cursor-pointer hover:text-[#F97316]">Shop</span>

            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/shop/food">Food</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/shop/toys">Toys</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/shop/drug">Medicine</Link>
              </li>
            </ul>
        </div>
          <Link to="/" className="hover:text-[#F97316]">Home</Link>
          <Link to="/new" className="hover:text-[#F97316]">New</Link>
          <Link to="/contact" className="hover:text-[#F97316]">Contact</Link>
          <Link to="/hospital" className="hover:text-[#F97316]">Hospital</Link>
        </div>
        <div>
          <button></button>
        </div>
    </div>
  )
}

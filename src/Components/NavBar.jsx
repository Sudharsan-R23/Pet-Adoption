import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/bird.png';
import styles from '../Styles/NavBar.module.css';

export default function NavBar() {
  return (
    <div className='bg-[#0F766E] flex justify-between items-center py-1 px-6'>
      <div className=''>
        <Link to='/'><img src={Logo} alt="" width='50PX' /></Link>

      </div>
      <div className='flex font-sans text-[#FFFFFF] gap-5'>
        <div className="relative group">
          <span className="cursor-pointer hover:text-[#F97316] transition duration-300">
            SHOP
          </span>

          <ul className="absolute shadow left-0 mt-2 w-44 bg-white text-black rounded shadow-lg
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                 transition-all duration-300 delay-150">
            <li className="px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:rounded transition"><Link to="/">Food</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200 hover:cursor-pointer transition"><Link to="/">Toys</Link></li>
            <li className="px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:rounded transition"><Link to="/">Drugs</Link></li>
          </ul>
        </div>

        <Link to="/" className="hover:text-[#F97316]">HOSPITAL</Link>
        <Link to="/new" className="hover:text-[#F97316]">NEWS</Link>
        <Link to="/contact" className="hover:text-[#F97316]">CONTACT</Link>
      </div>
      <div className={`${styles.nav} `}>
        <input type="checkbox" className={styles.checkbox} />

        <svg className={styles.icon} viewBox="0 0 100 56">
          <use href="#menu" className={styles.line1} />
          <use href="#menu" className={styles.line2} />
        </svg>

        <svg className={styles.hidden}>
          <symbol viewBox="0 0 100 56" id="menu">
            <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
          </symbol>
        </svg>
      </div>
    </div>
  )
}

import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/bird.png';
import styles from '../Styles/NavBar.module.css';

export default function NavBar() {

  const [ON, setOn] = useState(false);
  const [ShopItem, setShopItem] = useState(false);

  return (
    <>
      <div className={` ${ON ? '' : 'rounded-b-lg'} bg-[#0F766E] relative z-50 flex justify-between items-center py-1 px-6 `}>
        <div className=''>
          <Link to='/'><img src={Logo} alt="" width='50PX' /></Link>

        </div>
        <div className='flex font-sans text-[#FFFFFF] max-sm:hidden gap-7'>
          <div className="relative group">
            <span className="cursor-pointer hover:text-[#6EE7B7] transition duration-300">
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

          <Link to="/" className="hover:text-[#6EE7B7]">HOSPITAL</Link>
          <Link to="/new" className="hover:text-[#6EE7B7]">NEWS</Link>
          <Link to="/contact" className="hover:text-[#6EE7B7]">CONTACT</Link>
        </div>
        <div onClick={() => { setOn(!ON) }} className={`${styles.nav} hidden max-sm:flex`}>
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

      <div className={`
    w-4/5 min-h-screen bg-[#0F766E] 
    fixed top-0 left-0  flex 
    transform transition-transform duration-300 ease-in-out text-white
    ${ON ? 'translate-x-0' : '-translate-x-full'}
       `}>

        <div className='flex flex-col  font-sans gap-8 mt-28 ml-10'>
          <Link to="/" className="text-2xl font-medium">HOSPITAL</Link>
          <Link to="/new" className="text-2xl font-medium">NEWS</Link>
          <Link to="/contact" className="text-2xl font-medium">CONTACT</Link>

          <div className="text-2xl font-medium">
            <div onClick={() => { setShopItem(!ShopItem) }} className=" ">
              SHOP
            </div>
            <div className={`ml-7 border-l-2 pl-2  mt-4 flex flex-col gap-7 overflow-hidden transition-all duration-500 ease-in-out
      ${ShopItem ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} 
    `}
            >
              <Link className='font-normal' to="/">Food</Link>
              <Link className='font-normal' to="/">Toys</Link>
              <Link className='font-normal' to="/">Durgs</Link>
            </div>
          </div>
              
        </div>
      </div>

    </>
  )
}

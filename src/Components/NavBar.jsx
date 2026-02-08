import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/bird.png';
import styles from '../Styles/NavBar.module.css';
import { TiSocialYoutube } from "react-icons/ti";
import { FaSquareInstagram, FaEarthAmericas } from "react-icons/fa6";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
    
      <nav
        className={`fixed top-0 left-0 w-full h-16 z-50
        bg-[#0F766E] text-white
        flex items-center justify-between px-6
        [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]
        ${menuOpen ? '' : 'rounded-b-lg'}`}
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-12" />
        </Link>

        <div className="hidden sm:flex gap-7 font-sans">
          <div className="relative group">
            <span className={`${styles.customCursor} hover:text-[#6EE7B7] transition`}>
              SHOP
            </span>

            <ul
              className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-300"
            >
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/">Food</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/">Toys</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/">Medicines</Link>
              </li>
            </ul>
          </div>

          <Link to="/" className={`${styles.customCursor} hover:text-[#6EE7B7]`}>
            HOSPITAL
          </Link>
          <Link to="/new" className={`${styles.customCursor} hover:text-[#6EE7B7]`}>
            NEWS
          </Link>
          <Link to="/contact" className={`${styles.customCursor} hover:text-[#6EE7B7]`}>
            CONTACT
          </Link>
        </div>
         <div onClick={() => { setMenuOpen(!menuOpen) }} className={`${styles.nav} hidden max-sm:flex`}>
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
  

      </nav>
      <aside
        className={`fixed top-0 left-0 h-screen w-4/5 bg-[#0F766E]
        z-40 text-white
        transform transition-transform duration-300
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mt-24 ml-8 flex flex-col gap-8 font-sans">
          <Link to="/" className="text-2xl  [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">HOSPITAL</Link>
          <Link to="/new" className="text-2xl  [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">NEWS</Link>
          <Link to="/contact" className="text-2xl  [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">CONTACT</Link>
          <div>
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="text-2xl  [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]"
            >
              SHOP
            </button>

            <div
              className={`ml-6 mt-4 flex flex-col gap-5 overflow-hidden
              transition-all duration-300
              ${shopOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <Link to="/">Food</Link>
              <Link to="/">Toys</Link>
              <Link to="/">Medicines</Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <TiSocialYoutube
              onClick={() => openLink('https://www.youtube.com/@incredibleanimal9406')}
              className="text-4xl cursor-pointer"
            />
            <FaSquareInstagram
              onClick={() => openLink('https://www.instagram.com/')}
              className="text-4xl cursor-pointer"
            />
            <FaEarthAmericas
              onClick={() => openLink('https://a-z-animals.com/animals/')}
              className="text-4xl cursor-pointer"
            />
          </div>
        </div>
      </aside>
    </>
  );
}

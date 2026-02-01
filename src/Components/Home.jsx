import React from 'react';
import NavBar from './NavBar';
import Banner from '../assets/images/Banner.png';
import styles from '../Styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={`flex justify-center`}>
        <div className={`flex justify-center w-11/12 relative -z-10 mt-7`}>
          <img src={Banner} className={`rounded-3xl`} alt="" width='100%' />
          <div className={`${styles.Itemstxt} absolute inset-0 flex flex-col justify-between p-10`}>
            <h1 className={`text-6xl`}>hello world</h1>
            <div className={``}>
              <button className="bg-green-500 px-9 py-5 mr-7">Adaptation</button>
              <button className="bg-green-500 px-9 py-5">Donate</button>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

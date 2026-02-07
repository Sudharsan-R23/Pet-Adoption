import React from 'react';
import NavBar from './NavBar';
import Banner from '../assets/images/Banner.png';
import styles from '../Styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center">
        <div className="relative w-11/12 mt-7">
          
          <img
            src={Banner}
            alt="Banner"
            className="w-full rounded-3xl"
          />

          
          <div
            className="absolute inset-0 flex flex-col justify-between p-10"
          >
           
            <h1 className="text-6xl max-[768px]:text-4xl">
              hello world
            </h1>

           
            <div>
              <button
                className={`${styles.customCursor} bg-[#0F766E] text-2xl uppercase text-white px-9 py-5 rounded-xl mr-7
                max-[1024px]:px-3 max-[1024px]:py-3 max-[768px]:text-xl`}
              >
                Adaptation
              </button>

              <button
                className={`${styles.customCursor} bg-[#0F766E] text-2xl uppercase text-white px-9 py-5 rounded-xl
                max-[1024px]:px-3 max-[1024px]:py-3 max-[768px]:text-xl`}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

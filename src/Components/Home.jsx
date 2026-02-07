import React from 'react';
import NavBar from './NavBar';
import Banner from '../assets/images/Banner.png';
import styles from '../Styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center">
        <div className="relative w-full max-w-7xl px-4 mt-4">
          <div className="relative overflow-hidden rounded-3xl h-[60vh] sm:h-[65vh] lg:h-[500px]">
            <img
              src={Banner}
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl text-black">
                hello world
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`${styles.customCursor}
                  bg-[#0F766E] text-white uppercase
                  text-lg sm:text-xl
                  px-6 py-3 sm:px-9 sm:py-5
                  rounded-xl`}>Adaptation</button>

                <button className={`${styles.customCursor} bg-[#0F766E] text-white uppercase
                  text-lg sm:text-xl
                  px-6 py-3 sm:px-9 sm:py-5
                  rounded-xl`}
                >
                  Donate
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

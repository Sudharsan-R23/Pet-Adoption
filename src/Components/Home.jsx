import React from 'react';
import NavBar from './NavBar';
import Banner from '../assets/images/Banner.png';
import styles from '../Styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="pt-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-7xl px-4 mt-4">
            <div className="relative h-[60vh] sm:h-[65vh] lg:h-[500px]  rounded-3xl">

              <img
                src={Banner}
                alt="Banner"
                className={` ${styles.imgB} rounded-2xl absolute inset-0 w-full h-full object-cover`}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
                <h1 className={`${styles.slideLoop  } text-2xl sm:text-6xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.6)] font-bold`}>
                  Meet Your New Best Friend❤️
                </h1>

                <div className="flex flex-col  sm:flex-row gap-4">
                  <button
                    className={`${styles.customCursor}   bg-[#0F766E] text-white uppercase
  text-lg sm:text-xl
  px-6 py-3 sm:px-9 sm:py-5
  rounded-xl border-4 border-[#0F766E]
  font-semibold
  transition-colors transition-transform duration-300 ease-in-out
  hover:bg-white hover:text-[#0F766E]
  hover:-translate-y-1 hover:shadow-xl
  active:translate-y-0 [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]`}
                  >
                    Adaptation
                  </button>

                  <button
                    className={`${styles.customCursor}   bg-[#0F766E] text-white uppercase
  text-lg sm:text-xl
  px-6 py-3 sm:px-9 sm:py-5
  rounded-xl border-4 font-semibold border-[#0F766E]
    [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]
  transition-colors transition-transform duration-300 ease-in-out
  hover:bg-white hover:text-[#0F766E]
  hover:-translate-y-1 hover:shadow-xl
  active:translate-y-0`}
                  >
                    Donate
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

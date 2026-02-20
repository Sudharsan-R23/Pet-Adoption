import React from 'react';
import NavBar from './NavBar';
import Banner from '../assets/images/Banner.png';
import petb from '../assets/OIP.webp'
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
                <h1 className={`${styles.slideLoop} text-2xl sm:text-6xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.6)] font-bold`}>
                  Meet Your New Best Friend❤️
                </h1>

                <div className="flex flex-col  sm:flex-row gap-4">
                  <button
                    className={`${styles.customCursor}   bg-[#0F766E] text-white uppercase text-lg sm:text-xl px-6 py-3 sm:px-9 sm:py-5 rounded-xl border-4 border-[#0F766E] font-semibold transition-colors transition-transform duration-300 ease-in-out hover:bg-white hover:text-[#0F766E] hover:-translate-y-1 hover:shadow-xl active:translate-y-0 [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]`}
                  >Adaptation</button>

                  <button
                    className={`${styles.customCursor}   bg-[#0F766E] text-white uppercase text-lg sm:text-xl px-6 py-3 sm:px-9 sm:py-5 rounded-xl border-4 font-semibold border-[#0F766E] [text-shadow:0_2px_4px_rgba(0,0,0,0.6)] transition-colors transition-transform duration-300 ease-in-out hover:bg-white hover:text-[#0F766E] hover:-translate-y-1 hover:shadow-xl active:translate-y-0`}
                  >Donate</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="my-20 ">
          <div className="m-4 flex ">
            <div className={`flex justify-center items-center gap-5 ${styles.InPara}`}>
              <div className={` ${styles.InParaTXT}`}>
                <h1 className={`mb-3 font-semibold uppercase text-4xl`}>hjjhhj</h1>
                <p className="text-justify font-semibold">Lorem ipsum dolor sit igendi illo modi doloremque quam et. Ut atque, iste ipsa reiciendis nobis laudantium. Maiores dicta sunt asperiores ullam quidem molestiae ipsum dolorum architecto quibusdam repudiandae, ut possimus vel blanditiis labore porro iusto obcaecati! Unde excepturi amet provident, animi nostrum iusto totam perferendis fuga et repellendus, tenetur aperiam magni molestias quia blanditiis ad ducimus? Animi, harum maxime quaerat dolores pariatur eius odio. Praesentium dicta pariatur quasi, aliquid veritatis cumque. Odit, eligendi. Explicabo alias ipsam in eos qui ipsa quia magni blanditiis expedita exercitationem! Dolor beatae vitae id iure nisi dignissimos velit, dolorem commodi laboriosam dolores illo veniam obcaecati fuga, laborum ipsam officia, nihil eos optio dicta! Deserunt adipisci modi doloribus earum quam quos?</p>
              </div>

              <div className={styles.InParaImageTXT}>
                <img
                  src={petb}
                  className="max-w-sm rounded-md block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import React from 'react'
import { TiSocialYoutube } from "react-icons/ti";
import { FaSquareInstagram, FaEarthAmericas } from "react-icons/fa6";

export default function 
() {
  return (
    <div>
        <div className={`p-10 bg-[#0F766E] justify-center content-center flex text-white`}>
            <h1>Create a family with us | </h1>
            <div className={`flex ml-1`}>
                < TiSocialYoutube/>
                <FaSquareInstagram/>
                <FaEarthAmericas/>
            </div>
        </div>
    </div>
  )
}

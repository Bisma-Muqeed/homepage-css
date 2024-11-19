import React from 'react'
import style from "./Hero.module.css"
// import Image from 'next/image'
const hero = () => {
  return (
    <div>
      <div className = {style.heroContainer}>
        {/* <Image
        src ="/image/Hero.svg"
        alt = "Food Image"
        layout="fill"
        objectFit="cover"/> */}
      </div>
      
    </div>
  )
}

export default hero

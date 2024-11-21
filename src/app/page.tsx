import React from 'react'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Footer from './Component/Footer'

const page = () => {
  return (
    <div>
     <Header/>
     <Hero 
  title="Welcome To BurgerZone" 
  imageSrc="/image/burger.png" 
  altText="Burger" 
/>
     <Footer/>
     
    </div>
  )
}

export default page

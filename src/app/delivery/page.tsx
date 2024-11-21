import React from 'react'
import Header from '../Component/Header'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'



const page = () => {
  return (
    <div>
        <Header/>
        <Hero
          title="Delivery Coming SOON !" 
          imageSrc="/image/delivery.png" 
          altText="Delivery" />
        <Footer/>
      
    </div>
  )
}

export default page

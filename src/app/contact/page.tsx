import React from 'react'
import Header from '../Component/Header'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'


const page = () => {
  return (
    <div>
      <Header/>
        <Hero
          title="Contact US Coming Soon !" 
          imageSrc="/image/contact.png" 
          altText="man" />
        <Footer/>
    </div>
  )
}

export default page

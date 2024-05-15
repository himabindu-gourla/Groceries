import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Products from '../ProductPage/Products'

import Footer from "../../Components/Footer/Footer"
// import HeroSection from './HeroSection/HeroSection'
// import HeroSection2 from './HeroSection2/HeroSection2'
// import HeroSection3 from './HeroSection3/HeroSection3'



const Home = () => {
  return (
    <div>
        <Navbar/>
         {/* <HeroSection/> */}
        {/* <HeroSection2/> */}
        {/* <HeroSection3/>  */}

        <Products/>
        
        <Footer/>
    </div>
  )
}

export default Home
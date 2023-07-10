import React from 'react'
import Header from './Header'
import Home from '../pages/Home'
import AboutUs from './AboutUs'
import Fotter from './Fotter'

function FrontPage() {
  return (
    <div>
   <Header />
   <AboutUs />
   <Fotter />
  {/* <Home /> */}
    </div>
  )
}

export default FrontPage
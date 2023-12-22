import React from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import Reliable from '../../components/Reliable/Reliable'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <Services/>
        <About/>
        <Reliable/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function Hero() {
  return (
    <section className='hero container-fluid'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-6">
            <div className="hero-left p-3 p-lg-5">
                <p className="fs-4 text-warning">HR Services</p>
                <h1 className="display-4 text-white text-900">
                Make your recruitment process hassle free
                </h1>
                <p className="fs-5 text-light">Upskill your existing workforce with the top consultancy in bangalore. Hire the best talents from one of the Best job consultancy in bangalore.</p>
                <div className="btns d-flex flex-wrap gap-3">
                    <Button variant='contained' className='bg-white text-primary btn-large p-3 px-4 btn-main btn-hero'>Contact Us</Button>
                    <Button variant='outlined' className='p-3 px-4 btn-outline btn-hero btn-large'>Know More</Button>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-6">
            <div className="hero-right p-3 p-lg-5">
                <img src="https://sandbox.elemisthemes.com/assets/img/photos/about23.jpg" alt="her-image" className="w-100 rounded-3" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

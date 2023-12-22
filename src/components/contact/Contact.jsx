import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function Contact() {
  return (
    <section className='p-3 p-md-4 p-lg-5'>
        <div className="contact container d-flex flex-column align-items-center justify-content-center rounded-4">
            <h1 className="fs-1 text-white fw-bold">Hire Faster Hire Better</h1>
            <Button variant='container' className='bg-white text-main1 p-3 mt-4' >Contact us</Button>
        </div>
    </section>
  )
}

export default Contact

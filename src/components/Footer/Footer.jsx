import React from 'react'
import './style.css'
import { Button, TextField } from '@mui/material'

function Footer() {
  return (
    <footer className='p-3 p--md-4 p-lg-5'>
    <div className="footer-top py-4">
        <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6">
                <div className="ft-left">
               <h1 className="fs-1 text-white"> Join our community by using our <br /> services and grow your business.</h1>
                </div>
               
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <div className="ft-right">
               <Button variant='contained' className='btn-main rounded-5 p-3 float-end'>Try It For Free</Button>
                </div>
            </div>
        </div>
    </div>
    <hr className='text-light'/>
    <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="">
                <h1 className="fs-3 text-white mb-4">Yugyanthara</h1>
                <p className="fs-5 mt-3 text-light">© 2023 Sandbox. <br />All rights reserved.</p>
                <div className="social-icons d-flex gap-3 align-items-center">
                    <i className='bi bi-facebook text-white fs-4'></i>
                    <i className='bi bi-linkedin text-white fs-4'></i>
                    <i className='bi bi-youtube text-white fs-4'></i>
                    <i className='bi bi-telegram text-white fs-4'></i>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="">
                <h1 className="fs-3 text-white mb-4">Get in Touch</h1>
                <p className="fs-5 mt-3 text-light">Moonshine St. 14/05 Light City, London, United Kingdom</p>
                <p className="text-light fs-5 mt-3">info@email.com <br />00 (123) 456 78 90</p>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="">
                <h1 className="fs-3 text-white mb-4">Learn More</h1>
                <ul className="fs-5 mt-3 text-light">
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Services</li>
                    <li>terms of Use</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="">
                <h1 className="fs-3 text-white mb-4">Our Newsletter</h1>
                <p className="fs-5 mt-3 text-light">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                <div className="input d-flex gap-2">
                <TextField
                id="outlined-uncontrolled"
                label="Uncontrolled"
                color='secondary'
                focused
                className='text-white'
                />
                <Button variant='contained' className='p-3 btn-main'>Send</Button>
                </div>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer

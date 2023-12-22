import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function About() {
  return (
    <section className='about container-fluid p-3 p-md-4 p-lg-5 bg-light'>
        <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <div className="about-left">
                <img src="https://img.freepik.com/free-photo/smiling-executive-holding-some-documents-with-workmates_1098-3972.jpg?size=626&ext=jpg&ga=GA1.1.552979184.1703274185&semt=ais" alt="about" className="w-100 h-100 rounded-4 mb-3" />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                <div className="about-right">
                    <span className="text-main1 fs-4">About us</span>
                    <h1 className="fs-1 fw-bold">
                    Best Quality Recruitment Staffing Agency</h1>
                    <p className="fs-6 mt-4 text-secondary">
                    Be practical solutions offers training in diverse domains to graduates, Be practical Academia offers training in diverse domains to graduates, during graduation phase. These certificate courses enable students to boost their career prospects and find placement in IT industries.  After the completion of these certificate courses across many sunrise segments such as Digital and Business Analytics, the learners will future-proof themselves and remain relevant for the rapidly evolving technology marketplace. 
                    </p>
                    <Button variant='outlined' className='btn-main mt-2 p-3'>Contact Us Now</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About

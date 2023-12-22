import React from 'react'
import './style.css'
import { Button } from '@mui/material'

const servicesData = [
    {
        title:"Permanent Staffing",
        description:"Our approach towards recruitment is fully tailor made for each requirement."
    },
    {
        title:"Contract Staffing",
        description:"Building an agile and flexible workforce requires an easy and fast access to expert talent, available on short notice."
    },
    {
        title:"Train & Deploy Program",
        description:"Our approach towards recruitment is fully tailor made for each requirement."
    },
    {
        title:"Corporate Training Program",
        description:"Be-practical provides corporate training to small, medium and large scale industry."
    }
]

function Services() {
  return (
    <section className='services container-fluid p-3 p-md-4 p-lg-5'>
        <label className="fs-4 text-main1 text-center w-100">Services</label>
        <h1 className="banner-heading display-6 text-center fw-bold">
        The service we offer is specifically <br /> designed to meet your needs.
        </h1>
    <div className="row mt-5">
        {
            servicesData.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
                    <div className="service-card h-100  p-2 text-center d-flex flex-column justify-content-between">
                  <div className="service-header">
                  <div className="service-icon">
                   <i className="bi bi-stars"></i>
                   </div>
                  </div>
                   <h1 className="fs-3">{item.title}</h1>
                   <p className="fs-5">{item.description}</p>
                   <Button variant='text text-main1 fw-bold p-3' className='w-100'>Read More</Button>
                    </div>
                </div>
            ))
        }
    </div>
    </section>
  )
}

export default Services

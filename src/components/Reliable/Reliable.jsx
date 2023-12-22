import React from 'react'
import './style.css'
import { Alert } from '@mui/material'

function Reliable() {
  return (
    <section className='reliable container-fluid p-3 p-md-4 p-lg-5'>
        <label className="w-100 text-center text-main1 fs-4">RECRUITMENT AGENCY</label>
        <h1 className="fs-1 text-center banner-heading">WE’RE RELIABLE & COST EFFICIENT <br />RECRUITMENT AGENCY​</h1>
        <div className="row mt-5 align-items-center justify-content-center">
            <div className="col-12 col-md-6 mb-3">
            <Alert severity="success" className='p-2'>
                <h1 className="fs-3 fw-bold mb-3">Recruitment</h1>
                <ul className='fs-5'>
                    <li>we will help you to find right resources</li>
                    <li>We're Reliable & Cost Efficiant Recruitment Agency</li>
                    <li>fully screened and qualified candidates in any industry</li>
                </ul>
            </Alert>
            </div>
            <div className="col-12 col-md-6 mb-3">
            <Alert severity="success" className='p-2'>
                <h1 className="fs-3 fw-bold mb-3">Train & Deploy</h1>
                <ul className='fs-5'>
                    <li>Faster resource identification</li>
                    <li>Effective placement</li>
                    <li>Cost-effective</li>
                </ul>
            </Alert>
            </div>
            <div className="col-12 col-md-6 mb-3">
            <Alert severity="success" className='p-2'>
                <h1 className="fs-3 fw-bold mb-3">Corporate Training</h1>
                <ul className='fs-5'>
                    <li>Prepare Your Organization with Essential Digital Skills</li>
                    <li>Improve company's reputation.</li>
                    <li>Improve employee retention</li>
                </ul>
            </Alert>
            </div>
        </div>
    </section>
  )
}

export default Reliable

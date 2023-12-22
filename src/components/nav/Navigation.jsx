import { Button } from '@mui/material'
import React from 'react'
import './style.css'

function Navigation() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg p-3">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">Yugyanthara</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3 ">
        <li class="nav-item">
          <a class="nav-link fs-5" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fs-5" href="#">Permanent Staffing</a></li>
            <li><a class="dropdown-item fs-5" href="#">Contract Staffing</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item fs-5" href="#">Corporate Training</a></li>
            <li><a class="dropdown-item fs-5" href="#">Train And Deploy</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" aria-disabled="true">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" aria-disabled="true">Contact us</a>
        </li>
      </ul>
       <Button variant='contained' className='p-3'>Create Account</Button>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Navigation

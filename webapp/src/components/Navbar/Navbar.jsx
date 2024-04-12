import React from 'react'
import './Navbar.css'
import arrowlogo from '../../assets/headarrow.svg'
import headsearch from '../../assets/headsearch.svg'
import headlogo from '../../assets/headlogo.svg'
const Navbar = () => {
  return (
    <header>
    <div class="top-section">
        <div class="subtop">
            <p>The zoo will be closed March 22, 2023 due to the sever snowstorm.</p>
            <div class="headbutton">
              <h>Learn More</h>
            <img src={arrowlogo} alt="Your Image Alt Text"/>
            </div>
        </div>
    </div>
    <div class="bottom-section">
      <ul class="subbottom container list-unstyled d-flex justify-content-center align-items-end">
        <li class="nav-item"><img src={headlogo} alt="Logo" class="logo"/></li>
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Visit</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Things to Do</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Animal</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Learn</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Explore</a></li>
        <li class="nav-item"><img src={headsearch} alt="Logo" class="logo"/></li>
        <li class="nav-item"><a href="#" class="nav-link">Members</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Donate</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Ticket</a></li>
      </ul>
    </div>
</header>
  )
}

export default Navbar
import React, { useState } from 'react'

export default function NavBar() {

    const handleNavToggle = ()=>{
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('menu').classList.toggle('active');
        });
        
    }
  return (
    <div className='parent-nav'>
        <nav>
        <div className="container-nav">
            <div className="logo"><a href="index.html">Tino<span>Hub.</span></a></div>
            <button className="menu-toggle" onClick={handleNavToggle} id="menu-toggle">&#9776;</button>
            
            <ul className=" nav-links" id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="profile.html">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

import React, { useState } from 'react'
import './navbar.css'
import shackLogo from './sh.png';
import { Link } from 'react-router-dom';
function Navbar() 
{
  const [nav,setNav] = useState('')

  

  return (
    <div className='navbar'>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      <div className="nav">
      <div className="films">
      <span className="film" >Film</span>
      <span className="shack">Shack</span>
      </div>
        <ul className='nav2'>
          <li><Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></li>
          <li><Link to="/movie" style={{textDecoration:'none',color:'white'}}>Movies</Link></li>
          <li><a href='/about' style={{textDecoration:'none',color:'white'}}>About</a></li>
          <li><Link to="/login" style={{textDecoration:'none',color:'white'}}>Login</Link></li>
         
        </ul>
      
      </div>
    </div>
  )
}

export default Navbar

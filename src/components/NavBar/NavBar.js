import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  return (
    <div className='navbar'>
      <NavLink to='my-library' className='my-library-button'>My Library</NavLink>
      <NavLink to='home' className='home-button'>Home</NavLink>
    </div>
  )
}

export default NavBar
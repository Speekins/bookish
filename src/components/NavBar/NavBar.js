import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  return (
    <div className='navbar'>
      <NavLink to='/' className='home-button'>Home</NavLink>
      <NavLink to='/my-library' className='my-library-button'>My Library</NavLink>
      <NavLink to='/search' className='search-button'>Past Popular</NavLink>
    </div>
  )
}

export default NavBar
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <NavLink to='my-library'>My Library</NavLink>
      <NavLink to='home'>Home</NavLink>
    </>
  )
}

export default NavBar
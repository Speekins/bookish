import React, { useEffect, useState } from 'react'
import Proptypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ clearSearch, view }) => {

  const [disable, setDisable] = useState(view)

  useEffect(() => {
    setDisable(view)
  }, [view])

  return (
    <div className='navbar'>
      <NavLink to='/'
        className={'home-button ' + (disable === 'home' && 'disabled')}
        disabled={(disable === 'home' ? true : false)}
      >Home</NavLink>
      <NavLink to='/my-library'
        className={'my-library-button ' + (disable === 'my-library' && 'disabled')}
        disabled={(disable === 'my-library' ? true : false)}
      >My Library</NavLink>
      <NavLink to='/search'
        className={'search ' + (disable === 'search' && 'disabled')}
        disabled={(disable === 'search' ? true : false)}
        onClick={() => clearSearch()}
      >Past Popular</NavLink>
    </div >
  )
}

NavBar.propTypes = {
  clearSearch: Proptypes.func.isRequired,
  view: Proptypes.string.isRequired
}

export default NavBar
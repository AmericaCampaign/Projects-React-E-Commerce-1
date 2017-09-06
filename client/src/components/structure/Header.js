import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>
  <header>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>
  </header>

export default Header

import React from 'react'
import Logo from '../Atoms/Logo'
import Nav from '../Atoms/Nav'

const Header = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <Logo />
      </div>
      <div className="s-grid-l lg-cols-3 s-cross-center s-main-end header-links">
        <Nav />
      </div>
    </div>
  </header>
)

export default Header
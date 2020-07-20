import React from 'react'
import {Link} from 'react-router-dom'

const MainMenu = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <a href="/">
          <img src="https://ux.ed.team/img/edteam-ux.svg" alt="Edteam" className="main-logo" />
        </a>
      </div>
      <div className="s-column lg-row lg-cross-center lg-main-end">
        <nav className="main-menu s-z-tooltip" id="main-menu">
          <ul>
            <li><Link to="/"> Inicio </Link></li>
            <li><Link to="/cursos"> Cursos </Link></li>
            <li><Link to="/formulario"> Formulario </Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default MainMenu
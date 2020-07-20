import React from 'react'
import PropTypes from 'prop-types'

const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://www.chevrolet.com.pa/content/dam/chevrolet/na/mx/es/index/cars/2019-aveo/aveo-shared-assets/2019-aveo-masthead-imwidth=1200.jpg" alt="banner" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Aveo 2018.1</p>
          <p> Gris Plata</p>
          <a href="https://www.chevrolet.com.pa/autos/aveo" className="button">Comprar</a>
        </div>
      </div>
    </div>
  </div>
)

export default Banner
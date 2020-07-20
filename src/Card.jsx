import React from 'react'
import PropTypes from 'prop-types'

// const mayorDeEdad = edad => edad > 18

// const Card = (props) => (
const Card = ({imagen, titulo, imagenProfesor, profesor, precio}) => (
  
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={ imagen } alt={titulo} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {titulo}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={imagenProfesor} alt="Profesor" />
            </div>
          </div>
          <span className="small">
           {profesor}
          </span>
          <small>
            {/* { (mayorDeEdad(persona.edad)
              ? "Es mayor de edad"
              : "Es menor de edad") } */}
          </small>
        </div>
      </div>
      <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `$ ${precio} USD` }</a>
      </div>
    </div>
  </article>
)

Card.propTypes = {
  titulo: PropTypes.string,
  imagen: PropTypes.string,
  imagenProfesor: PropTypes.string,
  profesor: PropTypes.string,
  precio: PropTypes.number
}

Card.defaultProps = {
  titulo: "--",
  imagen: "https://ichef.bbci.co.uk/news/410/cpsprodpb/BEBC/production/_92982884_thinkstockphotos-620960752.jpg",
  imagenProfesor: "https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg",
  profesor: "Fulano de tal",
  precio: "0.00"
}

export default Card
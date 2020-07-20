import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Card = ({id,titulo,imagen,imagenProfesor,profesor,precio}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={imagen} alt={titulo} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {titulo}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={imagenProfesor} alt={profesor} />
            </div>
          </div>
          <span className="small">{profesor}</span>
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
  titulo: "Título del curso",
  imagen: "No hay imagen",
  imagenProfesor: "No hay imagen del profesor",
  profesor: "Fulano de tal",
  precio: 0
}

export default Card
import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD

// const mayorDeEdad = edad => edad > 18

// const Card = (props) => (
const Card = ({imagen, titulo, imagenProfesor, profesor, precio}) => (
  
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={ imagen } alt={titulo} />
=======
import {Link} from 'react-router-dom'

const Card = ({id,titulo,imagen,imagenProfesor,profesor,precio}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={imagen} alt={titulo} />
      </Link>
>>>>>>> 7b4bbc1aebc4ea3385162af072c095e7cd26dae6
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {titulo}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
<<<<<<< HEAD
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
=======
              <img src={imagenProfesor} alt={profesor} />
            </div>
          </div>
          <span className="small">{profesor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `$ ${precio} USD` }</a>
>>>>>>> 7b4bbc1aebc4ea3385162af072c095e7cd26dae6
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
<<<<<<< HEAD
  titulo: "--",
  imagen: "https://ichef.bbci.co.uk/news/410/cpsprodpb/BEBC/production/_92982884_thinkstockphotos-620960752.jpg",
  imagenProfesor: "https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg",
  profesor: "Fulano de tal",
  precio: "0.00"
=======
  titulo: "Título del curso",
  imagen: "No hay imagen",
  imagenProfesor: "No hay imagen del profesor",
  profesor: "Fulano de tal",
  precio: 0
>>>>>>> 7b4bbc1aebc4ea3385162af072c095e7cd26dae6
}

export default Card